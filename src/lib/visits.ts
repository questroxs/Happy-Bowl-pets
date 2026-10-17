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

/** One lifetime total. The starting 50 is counted once. Every later visit is counted once. */
export function foreverTotal(counts: number[]): number {
  const saved = counts.filter((value) => Number.isFinite(value)).map((value) => Math.floor(value));
  if (!saved.length) return START;
  const visits = saved.reduce((sum, value) => sum + Math.max(0, value - START), 0);
  return START + visits;
}

type CounterCustomer = {
  id: string;
  created?: number;
  metadata?: { visits?: string; visitToken?: string; folded?: string; basis?: string };
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

function foldedIds(customer: CounterCustomer | null | undefined): Set<string> {
  return new Set(
    (customer?.metadata?.folded ?? "")
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean),
  );
}

/** Oldest counter that has already grown. Extra totals are added onto it once. */
function keeperAndExtras(customers: CounterCustomer[]): {
  keeper: CounterCustomer | null;
  extras: CounterCustomer[];
} {
  const grown = customers.filter((customer) => (storedVisits(customer) ?? 0) > START);
  const pool = grown.length ? grown : customers;
  const ordered = [...pool].sort((a, b) => (a.created ?? 0) - (b.created ?? 0));
  const keeper = ordered[0] ?? null;
  if (!keeper) return { keeper: null, extras: [] };
  const already = foldedIds(keeper);
  const extras = grown.filter((customer) => customer.id !== keeper.id && !already.has(customer.id));
  return { keeper, extras };
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

async function foldCounts(key: string, customers: CounterCustomer[]): Promise<CounterCustomer | null> {
  const { keeper, extras } = keeperAndExtras(customers);
  if (!keeper) return null;
  const liveKeeper = (await stripeCustomer(key, `/customers/${keeper.id}`)) ?? keeper;
  if (liveKeeper.metadata?.basis === "lifetime") return liveKeeper;

  const current = storedVisits(liveKeeper) ?? START;
  const already = foldedIds(liveKeeper);
  const pending = extras.filter((customer) => !already.has(customer.id));
  const parts = [current, ...pending.map((customer) => storedVisits(customer) ?? 0)];
  let combined = foreverTotal(parts);
  if (already.size && pending.length === 0) {
    combined = Math.max(START, current - START * already.size);
  }
  const highest = Math.max(current, ...pending.map((customer) => storedVisits(customer) ?? 0));
  if (combined < highest) combined = highest;
  if (combined < current) combined = current;

  const folded = new Set(already);
  for (const extra of pending) folded.add(extra.id);
  const saved = await stripeRequest(
    key,
    `/customers/${liveKeeper.id}`,
    new URLSearchParams({
      "metadata[visits]": String(combined),
      "metadata[folded]": [...folded].join(","),
      "metadata[basis]": "lifetime",
    }),
  );
  if (!saved.ok) return liveKeeper;
  return (await stripeCustomer(key, `/customers/${liveKeeper.id}`)) ?? liveKeeper;
}

async function readTotal(bump: boolean): Promise<number> {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return memoryTotal(bump);

  const listed = await listCounters(key);
  if (!listed) return memory.__hbVisits ?? START;

  let customer = (await foldCounts(key, listed)) ?? keeperAndExtras(listed).keeper;
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
        "metadata[basis]": "lifetime",
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
