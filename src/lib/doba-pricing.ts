import { PRODUCTS, type Product } from "./catalog";

/** Doba hides wholesale dollars behind login. When a listing publishes
 *  "up to $X per sale (Y% margin)" we reverse-engineer their example retail
 *  and implied warehouse cost: cost = X * (1/Y - 1). */
export type DobaHint = {
  slug: string;
  perSale?: number;
  marginPct?: number;
  note?: string;
};

export const DOBA_HINTS: DobaHint[] = [
  { slug: "quiet-stainless-2l", perSale: 19.57, marginPct: 61 },
  { slug: "cordless-elfin", perSale: 25.79, marginPct: 37 },
  { slug: "stainless-xl", perSale: 20.59, marginPct: 30 },
  { slug: "elevated-station", perSale: 23.35, marginPct: 30 },
  { slug: "frog-dispenser", perSale: 4.2, marginPct: 26 },
  { slug: "elevated-mesh", perSale: 11.97, marginPct: 27 },
  { slug: "lounge-cot-beige", perSale: 29.07, marginPct: 27 },
  { slug: "calming-chews", perSale: 15.64, marginPct: 55 },
  { slug: "joint-liquid", perSale: 29.24, marginPct: 55 },
  { slug: "oat-shampoo", marginPct: 37, note: "Doba published margin only — no dollar cost." },
  { slug: "furry-balm", marginPct: 37, note: "Doba published margin only — no dollar cost." },
  { slug: "grooming-bundle", marginPct: 37, note: "BeNat bundle; Doba published margin only." },
  { slug: "denta-bone", marginPct: 23, note: "Doba published margin only — no dollar cost." },
  { slug: "sling-away", marginPct: 33, note: "Doba published margin only — no dollar cost." },
  { slug: "ball-launcher", marginPct: 30, note: "Doba published margin only — no dollar cost." },
  { slug: "canopy-cot", marginPct: 30, note: "Doba published margin only — no dollar cost." },
];

const HINT_BY_SLUG = new Map(DOBA_HINTS.map((hint) => [hint.slug, hint]));

export type PriceFlag = "healthy" | "ok" | "thin" | "at-cost" | "high" | "unknown";

export type PriceRow = {
  product: Product;
  hint?: DobaHint;
  dobaCost?: number;
  dobaSuggested?: number;
  ourProfit?: number;
  ourMargin?: number;
  flag: PriceFlag;
};

export function impliedFromHint(hint: DobaHint) {
  if (!hint.perSale || !hint.marginPct) return undefined;
  const suggested = hint.perSale / (hint.marginPct / 100);
  return { suggested, cost: suggested - hint.perSale };
}

function flagFor(row: Omit<PriceRow, "flag" | "product"> & { hbPrice: number }): PriceFlag {
  if (row.dobaCost == null || row.ourMargin == null) return "unknown";
  if (row.ourMargin < 0.1) return "at-cost";
  if (row.dobaSuggested != null && row.hbPrice > row.dobaSuggested * 1.4) return "high";
  if (row.ourMargin < 0.3) return "thin";
  if (row.ourMargin < 0.45) return "ok";
  return "healthy";
}

export function pricingRows(): PriceRow[] {
  return PRODUCTS.map((product) => {
    const hint = HINT_BY_SLUG.get(product.slug);
    const implied = hint ? impliedFromHint(hint) : undefined;
    const dobaCost = implied?.cost;
    const dobaSuggested = implied?.suggested;
    const ourProfit = dobaCost != null ? product.price - dobaCost : undefined;
    const ourMargin = ourProfit != null ? ourProfit / product.price : undefined;
    return {
      product,
      hint,
      dobaCost,
      dobaSuggested,
      ourProfit,
      ourMargin,
      flag: flagFor({
        hint,
        dobaCost,
        dobaSuggested,
        ourProfit,
        ourMargin,
        hbPrice: product.price,
      }),
    };
  });
}

export function flagLabel(flag: PriceFlag) {
  if (flag === "healthy") return "Healthy";
  if (flag === "ok") return "Okay";
  if (flag === "thin") return "Thin";
  if (flag === "at-cost") return "At cost";
  if (flag === "high") return "High vs Doba example";
  return "Cost on Doba login";
}
