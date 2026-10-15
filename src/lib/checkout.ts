const SIZES = new Set(["XS", "S", "M", "L", "XL"]);

export type CheckoutLine = {
  slug: string;
  quantity: number;
  size?: string;
};

export function parseCheckoutLines(input: unknown): CheckoutLine[] {
  const raw = Array.isArray(input)
    ? input
    : input && typeof input === "object" && "lines" in input
      ? (input as { lines: unknown }).lines
      : null;

  if (!Array.isArray(raw) || raw.length === 0) {
    throw new Error("Cart is empty.");
  }

  const lines: CheckoutLine[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const record = item as { slug?: unknown; quantity?: unknown; size?: unknown };
    const slug = typeof record.slug === "string" ? record.slug.trim() : "";
    const quantity = typeof record.quantity === "number" ? record.quantity : Number(record.quantity);
    if (!slug || !Number.isFinite(quantity) || quantity < 1) continue;
    const line: CheckoutLine = { slug, quantity: Math.min(9, Math.floor(quantity)) };
    if (typeof record.size === "string" && record.size.trim()) {
      const size = record.size.trim().toUpperCase();
      if (SIZES.has(size)) line.size = size;
    }
    lines.push(line);
  }

  if (lines.length === 0) {
    throw new Error("Cart is empty.");
  }

  return lines;
}
