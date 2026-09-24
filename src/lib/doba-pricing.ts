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
  { slug: "cordless-dual-45", perSale: 28.13, marginPct: 35 },
  { slug: "cheerble-d1-4l", perSale: 33.68, marginPct: 34 },
  { slug: "moda-filters-3", perSale: 5.77, marginPct: 29 },
  { slug: "bone-pad-bed", perSale: 32.19, marginPct: 45 },
  { slug: "brown-bolster", perSale: 7.87, marginPct: 25 },
  { slug: "pig-ears-25", perSale: 12, marginPct: 21 },
  { slug: "calm-powder", perSale: 20.34, marginPct: 55 },
  { slug: "calm-drops-60", perSale: 15.01, marginPct: 67 },
  { slug: "detox-powder", perSale: 11.57, marginPct: 57 },
  { slug: "cbd2heal-dogs", perSale: 113.55, marginPct: 87, note: "Listing example is 'up to' across 150–4000 mg. Photo is the 1000 mg bottle." },
  { slug: "tartar-foam", perSale: 8.12, marginPct: 39 },
  { slug: "paw-balm-15", perSale: 6.37, marginPct: 64 },
  { slug: "benat-towel", perSale: 3.3, marginPct: 37 },
  { slug: "moo-cifier", perSale: 4.88, marginPct: 29 },
  { slug: "giraffe-cow", perSale: 4.88, marginPct: 29 },
  { slug: "dura-chew", perSale: 4.88, marginPct: 29 },
  { slug: "foxy-tail", perSale: 4.88, marginPct: 29 },
  { slug: "fish-catnip", perSale: 4.88, marginPct: 29 },
  { slug: "dumbbell-float", perSale: 4.88, marginPct: 29 },
  { slug: "open-road-seat", perSale: 11.41, marginPct: 33 },
  { slug: "squeeze-scoop", perSale: 4.88, marginPct: 29 },
  { slug: "rolling-carrier", perSale: 14.1, marginPct: 27 },
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
