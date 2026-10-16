import { createServerFn } from "@tanstack/react-start";

const CODE = "0118";
const START = 50;
const COUNTER_EMAIL = "visit-counter@happybowlpets.com";

function readCode(input: unknown): string {
  const raw =
    typeof input === "string"
      ? input
      : input && typeof input === "object" && "data" in input && typeof input.data === "string"
        ? input.data
        : input && typeof input === "object" && "code" in input && typeof input.code === "string"
          ? input.code
          : "";
  return raw.replace(/\D/g, "");
}

/** 50 is the floor. A new counter stays at 50 until the first visit, then each visit adds one. */
export function nextTotal(current: number | null, bump: boolean): number {
  if (current == null || !Number.isFinite(current)) return bump ? START + 1 : START;
  const base = Math.max(START, Math.floor(current));
  return bump ? base + 1 : base;
}

type CounterCustomer = { id: string; metadata?: { visits?: string } };

const memory = globalThis as typeof globalThis & { __hbVisits?: number };

function memoryTotal(bump: boolean): number {
  const current = memory.__hbVisits ?? null;
  const total = nextTotal(current, bump);
  memory.__hbVisits = total;
  return total;
}

async function stripeRequest(key: string, path: string, body?: URLSearchParams): Promise<Response> {
  return fetch(`https://api.stripe.com/v1${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Basic ${Buffer.from(`${key}:`).toString("base64")}`,
      ...(body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body,
  });
}

async function readTotal(bump: boolean): Promise<number> {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return memoryTotal(bump);

  const listed = await stripeRequest(
    key,
    `/customers?email=${encodeURIComponent(COUNTER_EMAIL)}&limit=1`,
  );
  if (!listed.ok) return memoryTotal(bump);
  const found = (await listed.json()) as { data?: CounterCustomer[] };
  let customer = found.data?.[0];
  if (!customer) {
    const created = await fetch("https://api.stripe.com/v1/customers", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${key}:`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Idempotency-Key": "hb-visit-counter",
      },
      body: new URLSearchParams({
        email: COUNTER_EMAIL,
        name: "Happy Bowl visit counter",
        description: "Internal visit count. Not a shopper.",
        "metadata[visits]": String(START),
      }),
    });
    if (!created.ok) return memoryTotal(bump);
    customer = (await created.json()) as CounterCustomer;
  }

  const current = Number(customer.metadata?.visits);
  const total = nextTotal(Number.isFinite(current) ? current : null, bump);
  if (String(total) !== customer.metadata?.visits) {
    await stripeRequest(
      key,
      `/customers/${customer.id}`,
      new URLSearchParams({ "metadata[visits]": String(total) }),
    );
  }
  memory.__hbVisits = total;
  return total;
}

export const recordVisit = createServerFn({ method: "POST" }).handler(async () => {
  try {
    await readTotal(true);
  } catch {
    memoryTotal(true);
  }
  return { ok: true as const };
});

export const revealVisits = createServerFn({ method: "POST" })
  .validator((input: unknown) => readCode(input))
  .handler(async ({ data }) => {
    if (data !== CODE) return { ok: false as const };
    try {
      return { ok: true as const, total: await readTotal(false) };
    } catch {
      return { ok: true as const, total: memoryTotal(false) };
    }
  });
