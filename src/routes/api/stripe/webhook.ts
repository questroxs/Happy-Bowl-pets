import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/lib/env.server";
import { emailLoadedSession, emailPaidCheckout, orderMailConfigured } from "@/lib/order-notice.server";
import { verifyStripeSignature } from "@/lib/stripe-signature";

const PAID_EVENTS = new Set(["checkout.session.completed", "checkout.session.async_payment_succeeded"]);

export const Route = createFileRoute("/api/stripe/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = await request.text();
        const secret = env("STRIPE_WEBHOOK_SECRET");
        if (!secret) {
          return Response.json({ received: false, error: "webhook_secret_missing" }, { status: 500 });
        }
        const valid = verifyStripeSignature(payload, request.headers.get("stripe-signature"), secret);
        if (!valid) {
          return Response.json({ received: false, error: "bad_signature" }, { status: 400 });
        }

        let event: { type?: string; data?: { object?: Record<string, unknown> } };
        try {
          event = JSON.parse(payload) as { type?: string; data?: { object?: Record<string, unknown> } };
        } catch {
          return Response.json({ received: false, error: "bad_json" }, { status: 400 });
        }

        const session = event.data?.object;
        if (!event.type || !PAID_EVENTS.has(event.type) || !session) {
          return Response.json({ received: true, ignored: true });
        }
        if (session.payment_status !== "paid") {
          return Response.json({ received: true, ignored: true });
        }
        if (!orderMailConfigured()) {
          return Response.json({ received: false, reason: "mail_not_configured" }, { status: 503 });
        }

        try {
          const sessionId = typeof session.id === "string" ? session.id : "";
          const fresh = await emailPaidCheckout(sessionId);
          const result = fresh.reason === "not_found" ? await emailLoadedSession(session) : fresh;
          if (result.reason === "not_configured") {
            return Response.json({ received: false, reason: "mail_not_configured" }, { status: 503 });
          }
          return Response.json({ received: true, emailed: result.emailed, duplicate: result.duplicate ?? false });
        } catch (error) {
          console.error("[order-email]", error instanceof Error ? error.message : "send failed");
          return Response.json({ received: false, error: "email_failed" }, { status: 500 });
        }
      },
    },
  },
});
