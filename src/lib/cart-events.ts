import { createServerFn } from "@tanstack/react-start";

export type CartAddInput = {
  anonId: string | null;
  slug: string;
  variant: string | null;
  quantity: number;
};

const SAFE = /^[A-Za-z0-9._:-]+$/;

function cleanText(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max || !SAFE.test(trimmed)) return null;
  return trimmed;
}

/** Validate untrusted input. Returns null when the event should be dropped. */
export function parseCartAdd(input: unknown): CartAddInput | null {
  if (!input || typeof input !== "object") return null;
  const raw = input as Record<string, unknown>;
  const slug = cleanText(raw.slug, 120);
  if (!slug) return null;
  const qty = Number(raw.quantity);
  const quantity = Number.isInteger(qty) && qty >= 1 && qty <= 99 ? qty : 1;
  return {
    anonId: cleanText(raw.anonId, 64),
    slug,
    variant: cleanText(raw.variant, 40),
    quantity,
  };
}

/** Anonymous add-to-cart log. Always resolves { ok: true }; never throws. */
export const logCartAdd = createServerFn({ method: "POST" })
  .validator((input: unknown) => parseCartAdd(input))
  .handler(async ({ data }) => {
    if (!data) return { ok: true as const };
    try {
      const { getSql } = await import("@/lib/db");
      const sql = await getSql();
      await sql`insert into cart_events (anon_id, product_slug, variant, quantity)
        values (${data.anonId}, ${data.slug}, ${data.variant}, ${data.quantity})`;
    } catch {
      // Tracking must never affect shopping.
    }
    return { ok: true as const };
  });

const ANON_KEY = "hb-anon-id";

/** Random per-browser id in localStorage. No personal data. */
export function anonId(): string | null {
  try {
    let id = window.localStorage.getItem(ANON_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      window.localStorage.setItem(ANON_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

/** Fire-and-forget. Never awaited, never throws, no UI. */
export function trackCartAdd(slug: string, variant?: string, quantity = 1): void {
  if (typeof window === "undefined") return;
  try {
    void logCartAdd({
      data: { anonId: anonId(), slug, variant: variant ?? null, quantity },
    }).catch(() => undefined);
  } catch {
    // ignore
  }
}
