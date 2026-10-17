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

/** 50 is only the floor for a brand-new counter. A saved total is never lowered. */
export function nextTotal(current: number | null, bump: boolean): number {
  if (current == null || !Number.isFinite(current)) return bump ? START + 1 : START;
  const base = Math.max(START, Math.floor(current));
  return bump ? base + 1 : base;
}

/** The real total is the highest number already stored. Never an older or newer lower one. */
export function highestVisit(values: Array<number | null | undefined>): number | null {
  let best: number | null = null;
  for (const value of values) {
    if (typeof value !== "number" || !Number.isFinite(value)) continue;
    const next = Math.floor(value);
    if (best == null || next > best) best = next;
  }
  return best;
}

type CounterCustomer = {
  id: string;
  created?: number;
  metadata?: { visits?: string; visitToken?: string };
};

const memory = globalThis as typeof globalThis & { __hbVisits?: number };

function memoryTotal(bump: boolean): number {
  const current = memory.__hbVisits ?? null;
  const total = nextTotal(current, bump);
  memory.__hbVisits = total;
  return total;
}

function storedVisits(customer: CounterCustomer | null | undefined): number | null {
  const value = Number(customer?.metadata?.visits);
  return Number.isFinite(value) ? Math.floor(value) : null;
}

function pickCounter(customers: CounterCustomer[]): CounterCustomer | null {
  const ranked = customers.filter((customer) => storedVisits(customer) != null);
  ranked.sort((a, b) => {
    const gap = (storedVisits(b) ?? 0) - (storedVisits(a) ?? 0);
    if (gap !== 0) return gap;
    return (a.created ?? 0) - (b.created ?? 0);
  });
  if (ranked[0]) return ranked[0];
  const oldest = [...customers].sort((a, b) => (a.created ?? 0) - (b.created ?? 0));
  return oldest[0] ?? null;
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

async function stripeCustomer(key: string, path: string, body?: URLSearchParams): Promise<CounterCustomer | null> {
  const response = await stripeRequest(key, path, body);
  if (!response.ok) return null;
  const customer = (await response.json()) as CounterCustomer;
  return customer.id ? customer : null;
}

async function listCounters(key: string): Promise<CounterCustomer[] | null> {
  const response = await stripeRequest(
    key,
    `/customers?email=${encodeURIComponent(COUNTER_EMAIL)}&limit=100`,
  );
  if (!response.ok) return null;
  const found = (await response.json()) as { data?: CounterCustomer[] };
  return found.data ?? [];
}

async function freshTotal(key: string, customer: CounterCustomer): Promise<number | null> {
  const live = await stripeCustomer(key, `/customers/${customer.id}`);
  return storedVisits(live ?? customer);
}

async function readTotal(bump: boolean): Promise<number> {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return memoryTotal(bump);

  const listed = await listCounters(key);
  if (!listed) return memory.__hbVisits ?? START;

  let customer = pickCounter(listed);
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
    if (!created.ok) return memory.__hbVisits ?? START;
    const body = (await created.json()) as CounterCustomer;
    if (!body.id) return memory.__hbVisits ?? START;
    customer = (await stripeCustomer(key, `/customers/${body.id}`)) ?? body;
  }

  if (!bump) {
    const total = await freshTotal(key, customer);
    if (total == null) return memory.__hbVisits ?? START;
    const shown = nextTotal(total, false);
    memory.__hbVisits = shown;
    return shown;
  }

  for (let attempt = 0; attempt < 6; attempt++) {
    const live = await stripeCustomer(key, `/customers/${customer.id}`);
    const current = storedVisits(live);
    if (current == null) break;
    const total = nextTotal(current, true);
    if (total <= current) return current;
    const token = `${Date.now().toString(36)}-${attempt}-${Math.random().toString(36).slice(2)}`;
    const saved = await stripeRequest(
      key,
      `/customers/${customer.id}`,
      new URLSearchParams({
        "metadata[visits]": String(total),
        "metadata[visitToken]": token,
      }),
    );
    if (!saved.ok) continue;
    const check = await stripeCustomer(key, `/customers/${customer.id}`);
    if (check?.metadata?.visitToken === token && storedVisits(check) === total) {
      memory.__hbVisits = total;
      return total;
    }
  }

  const latest = await freshTotal(key, customer);
  if (latest == null) return memory.__hbVisits ?? START;
  const shown = nextTotal(latest, false);
  memory.__hbVisits = shown;
  return shown;
}

export const recordVisit = createServerFn({ method: "POST" }).handler(async () => {
  try {
    await readTotal(true);
  } catch {
    // A failed write must not replace the saved total.
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
      return { ok: true as const, total: memory.__hbVisits ?? START };
    }
  });
