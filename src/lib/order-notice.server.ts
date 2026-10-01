import { connect as tlsConnect } from "node:tls";
import { env } from "./env.server";
import { flattenStripeParams } from "./stripe-form";
import {
  formatPaidOrder,
  lineItemsFromStripe,
  paidOrderFromSession,
  type PaidOrder,
} from "./order-notice";

const SHOP_INBOX = "info@happybowlpets.com";

type StripeResult = {
  status: number;
  body: Record<string, unknown>;
};

async function stripeRequest(path: string, payload?: Record<string, unknown>): Promise<StripeResult> {
  const secret = env("STRIPE_SECRET_KEY");
  if (!secret) throw new Error("Stripe secret is missing.");
  const response = await fetch(`https://api.stripe.com${path}`, {
    method: payload ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${secret}`,
      ...(payload ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: payload ? flattenStripeParams(payload).toString() : undefined,
  });
  const body = (await response.json()) as Record<string, unknown>;
  return { status: response.status, body };
}

async function sendResend(subject: string, text: string): Promise<void> {
  const key = env("RESEND_API_KEY");
  if (!key) throw new Error("Resend is not configured.");
  const from = env("ORDER_FROM_EMAIL") || "Happy Bowl Co. <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SHOP_INBOX],
      subject,
      text,
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend rejected the order email (${response.status}): ${detail.slice(0, 240)}`);
  }
}

function smtpRead(socket: ReturnType<typeof tlsConnect>): Promise<string> {
  return new Promise((resolve, reject) => {
    let buffer = "";
    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split("\r\n");
      const complete = lines.slice(0, -1);
      if (complete.length === 0) return;
      const last = complete[complete.length - 1] ?? "";
      if (/^\d{3} /.test(last)) {
        socket.off("data", onData);
        socket.off("error", onError);
        resolve(complete.join("\n"));
      }
    };
    const onError = (error: Error) => {
      socket.off("data", onData);
      reject(error);
    };
    socket.on("data", onData);
    socket.on("error", onError);
  });
}

function smtpCode(response: string): number {
  const match = response.match(/^(\d{3})/m);
  return match ? Number(match[1]) : 0;
}

async function smtpCommand(
  socket: ReturnType<typeof tlsConnect>,
  command: string,
  ok: number,
  label: string,
): Promise<void> {
  socket.write(`${command}\r\n`);
  const response = await smtpRead(socket);
  if (smtpCode(response) !== ok) {
    throw new Error(`SMTP ${label} failed: ${response.slice(0, 180)}`);
  }
}

async function sendSmtp(subject: string, text: string): Promise<void> {
  const user = env("ORDER_SMTP_USER");
  const pass = env("ORDER_SMTP_PASS");
  if (!user || !pass) throw new Error("SMTP is not configured.");
  const host = env("ORDER_SMTP_HOST") || "smtp.gmail.com";
  const port = Number(env("ORDER_SMTP_PORT") || "465");
  const from = env("ORDER_FROM_EMAIL") || `Happy Bowl Co. <${user}>`;
  const fromAddr = from.match(/<([^>]+)>/)?.[1] || user;

  const socket = tlsConnect({ host, port, servername: host });
  await new Promise<void>((resolve, reject) => {
    socket.once("secureConnect", () => resolve());
    socket.once("error", reject);
  });
  const greeting = await smtpRead(socket);
  if (smtpCode(greeting) !== 220) throw new Error(`SMTP greeting failed: ${greeting.slice(0, 180)}`);
  await smtpCommand(socket, "EHLO happybowlpets.com", 250, "EHLO");
  await smtpCommand(socket, "AUTH LOGIN", 334, "AUTH");
  await smtpCommand(socket, Buffer.from(user).toString("base64"), 334, "AUTH");
  await smtpCommand(socket, Buffer.from(pass).toString("base64"), 235, "AUTH");
  await smtpCommand(socket, `MAIL FROM:<${fromAddr}>`, 250, "MAIL");
  await smtpCommand(socket, `RCPT TO:<${SHOP_INBOX}>`, 250, "RCPT");
  await smtpCommand(socket, "DATA", 354, "DATA");
  const body = [
    `From: ${from}`,
    `To: ${SHOP_INBOX}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    text.replace(/^\./gm, ".."),
    ".",
    "",
  ].join("\r\n");
  socket.write(body);
  const accepted = await smtpRead(socket);
  if (smtpCode(accepted) !== 250) throw new Error(`SMTP data rejected: ${accepted.slice(0, 180)}`);
  socket.write("QUIT\r\n");
  socket.end();
}

export function orderMailConfigured(): boolean {
  return Boolean(env("RESEND_API_KEY") || (env("ORDER_SMTP_USER") && env("ORDER_SMTP_PASS")));
}

async function deliver(order: PaidOrder): Promise<"resend" | "smtp"> {
  const mail = formatPaidOrder(order);
  if (env("RESEND_API_KEY")) {
    await sendResend(mail.subject, mail.text);
    return "resend";
  }
  if (env("ORDER_SMTP_USER") && env("ORDER_SMTP_PASS")) {
    await sendSmtp(mail.subject, mail.text);
    return "smtp";
  }
  throw new Error("No order email sender is configured.");
}

async function sessionLineItems(sessionId: string): Promise<string[]> {
  const result = await stripeRequest(`/v1/checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=20`);
  if (result.status >= 400) return [];
  return lineItemsFromStripe(result.body);
}

export async function emailPaidCheckout(
  sessionId: string,
): Promise<{ emailed: boolean; duplicate?: boolean; reason?: "not_paid" | "not_configured" | "not_found" }> {
  if (!sessionId.startsWith("cs_")) return { emailed: false, reason: "not_found" };
  const loaded = await stripeRequest(`/v1/checkout/sessions/${encodeURIComponent(sessionId)}`);
  if (loaded.status >= 400) return { emailed: false, reason: "not_found" };
  return emailLoadedSession(loaded.body);
}

export async function emailLoadedSession(session: Record<string, unknown>): Promise<{
  emailed: boolean;
  duplicate?: boolean;
  reason?: "not_paid" | "not_configured";
}> {
  const sessionId = typeof session.id === "string" ? session.id : "";
  if (!sessionId || session.payment_status !== "paid") return { emailed: false, reason: "not_paid" };
  const metadata =
    session.metadata && typeof session.metadata === "object"
      ? (session.metadata as Record<string, unknown>)
      : {};
  if (metadata.shop_notified === "1") return { emailed: true, duplicate: true };
  if (!orderMailConfigured()) return { emailed: false, reason: "not_configured" };

  const items = await sessionLineItems(sessionId).catch(() => []);
  const order = paidOrderFromSession(session, items);
  if (!order) return { emailed: false };
  await deliver(order);
  await stripeRequest(`/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
    metadata: { shop_notified: "1" },
  }).catch(() => undefined);
  return { emailed: true };
}
