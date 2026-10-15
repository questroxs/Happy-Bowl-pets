import { PRODUCTS, type Product } from "./catalog";
import type { StockState } from "./stock-overrides";

/** Catalog revision shown only on happybowlpets.vercel.app until it is approved. */

const REMOVED = new Set([
  "dry-mousse",
  "eye-drops",
  "paw-balm-15",
  "benat-towel",
  "yegbong-lav-100",
  "crystal-shampoo",
  "pupx-glitter",
  "pupx-glow-4",
  "usa-k9-magnum",
  "tough-bone",
  "pupx-glow-2",
  "skull-chew",
  "calm-mealtime-kit",
  "frog-dispenser",
]);

const PRICES: Record<string, number> = {
  "lounge-cot-beige": 138.99,
  "groom-glove": 19.99,
  "denta-twist": 21.99,
  "broom-lick": 21.99,
  "cat-tunnel": 35.99,
  "pee-pads": 42.99,
  "cordless-dual-45": 92.99,
  "cheerble-d1-4l": 125.99,
  "moda-filters-3": 25.99,
  "tartar-foam": 22.99,
  "moo-cifier": 21.99,
  "giraffe-cow": 21.99,
  "dura-chew": 21.99,
  "foxy-tail": 21.99,
  "fish-catnip": 21.99,
  "dumbbell-float": 21.99,
  "open-road-seat": 41.99,
  "squeeze-scoop": 21.99,
  "rolling-carrier": 67.99,
  "remote-dual-45": 216.99,
  "moo-born": 21.99,
  "totty-chew": 21.99,
  "bone-teether": 21.99,
  "bubble-vogue": 103.99,
  "stainless-xl": 71.99,
  "cordless-elfin": 87.99,
  "elevated-station": 89.99,
  "tri-chew": 21.99,
  "creepy-webs": 35.99,
  "snowman-hoodie": 38.99,
};

const PHOTO = (slug: string) => `/products/preview/${slug}.jpg`;

const PHOTOS = new Set([
  "creepy-webs",
  "rodeo-bones",
  "snowman-hoodie",
  "inmate-stripes",
  "travel-bowl-set",
  "travel-nest",
  "collapsi-pad",
  "bath-brush",
  "corn-chew",
  "dirty-doormat",
  "brown-bolster",
  "mesh-sling",
  "slow-meal-mat",
  "puzzle-feeder",
]);

const CLAIM =
  /\b(anxiety|immune|detox|joint health|heals|heal|vet-approved|veterinary|inflammation|cartilage|fda|mobility support|antioxidant)\b/i;

const WEEK = 7 * 24 * 60 * 60 * 1000;

type Replacement = Pick<Product, "name" | "tagline" | "description" | "details" | "price" | "warehouseUrl"> & {
  material?: string;
  capacity?: string;
};

const REPLACEMENTS: Record<string, Replacement> = {
  "travel-nest": {
    name: "Fleece Nest Bed, Large",
    tagline: "Soft warm fleece nest, large.",
    description:
      "A soft warm fleece nest cushion in the large size, for a puppy, a cat, or a small dog.",
    details: ["Large fleece nest cushion", "For puppies, cats, and small dogs"],
    price: 66.99,
    warehouseUrl:
      "https://www.doba.com/product/ASqwQCVOWYbM/dropshipping-pet-dog-bed-soft-warm-fleece-puppy-cat-bed-dog-cozy-nest-sofa-bed-cushion-l-size.html",
  },
  "collapsi-pad": {
    name: "Felt Cat House",
    tagline: "Foldable felt cave, 18 × 15 × 17 in.",
    description:
      "A house-shaped felt hideaway for indoor cats. 18 × 15 × 17 in, with a hollow window and a wide arched entrance. It folds flat.",
    details: ["Felt, 18 × 15 × 17 in", "Foldable, with a wide arched entrance", "For indoor cats and kittens"],
    price: 48.99,
    material: "Felt",
    warehouseUrl:
      "https://www.doba.com/product/PfCGVNtjToqY/dropshipping-house-shaped-felt-cat-house-for-indoor-cats18x15x17-foldable-cat-bed-cavebreathable-hollow-window-cat-hideaway-with-wide-arched-entrance-for-kittens-multi-cats.html",
  },
  "bath-brush": {
    name: "Steam Spray Grooming Brush",
    tagline: "Silicone grooming brush with a spray.",
    description:
      "A reusable silicone grooming brush for dogs and cats, with a spray to lift loose hair.",
    details: ["Silicone bristles", "Spray grooming brush", "For dogs and cats"],
    price: 22.99,
    material: "Silicone",
    warehouseUrl:
      "https://www.doba.com/product/FfQPKcnylCDY/dropshipping-steam-spray-pet-grooming-brush-silicone-massage-shedding-hair-remover-comb-reusable-pet-cleaning-grooming-tool-for-dogs-and-cats.html",
  },
  "corn-chew": {
    name: "Glow-Stick Squeak Toy",
    tagline: "Pet Life TPR toy with an LED glow stick.",
    description: "A Pet Life TPR dog toy with LED lighting and a squeaker.",
    details: ["TPR rubber", "LED lighting and a squeaker", "For dogs"],
    price: 21.99,
    material: "TPR",
    warehouseUrl:
      "https://www.doba.com/product/WBDtefqBVPbv/dropshipping-pet-life-glow-stick-tpr-and-led-lighting-squeak-and-chew-dog-toy.html",
  },
  "dirty-doormat": {
    name: "Washable Dog Mat",
    tagline: "Quilted plush mat with a carry handle.",
    description:
      "A washable quilted plush mat with a carry handle. Use it on the floor, in a crate, on the sofa, or in the car. For dogs, puppies, and cats.",
    details: ["Quilted plush with a carry handle", "Washable", "For dogs, puppies, and cats"],
    price: 29.99,
    warehouseUrl:
      "https://www.doba.com/product/oDQmbUZUVJvC/dropshipping-washable-dog-mat-with-carry-handle-soft-plush-quilted-dog-bed-mat-portable-crate-pad-and-kennel-liner-for-floor-sofa-car-and-travel-all-season-pet-sleeping-mat-for-dogs-puppies-and-cats.html",
  },
  "brown-bolster": {
    name: "Fleece Nest Bed, Small",
    tagline: "Soft warm fleece nest, small.",
    description:
      "A soft warm fleece nest cushion in the small size, for a puppy, a cat, or a small dog.",
    details: ["Small fleece nest cushion", "For puppies, cats, and small dogs"],
    price: 48.99,
    warehouseUrl:
      "https://www.doba.com/product/gZVkFQqtWobP/dropshipping-pet-dog-bed-soft-warm-fleece-puppy-cat-bed-dog-cozy-nest-sofa-bed-cushion-mat-s-size.html",
  },
  "mesh-sling": {
    name: "Canvas Pet Carrier",
    tagline: "Canvas carrier for a small dog or cat.",
    description: "A canvas pet carrier for a small dog or cat.",
    details: ["Canvas carrier", "For a small dog or cat"],
    price: 57.99,
    material: "Canvas",
    warehouseUrl: "https://www.doba.com/product/tovDqPGYeYbT/dropshipping-fashion-canvas-pet-carrier.html",
  },
  "slow-meal-mat": {
    name: "3-in-1 Travel Bowl",
    tagline: "Collapsible silicone bowl with suction cups and a hook.",
    description:
      "A collapsible silicone travel bowl with suction cups and a hook, so it can hang from a collar or a backpack. It folds flat.",
    details: ["Collapsible silicone", "Suction cups", "Hook for a collar or backpack"],
    price: 18.99,
    material: "Silicone",
    warehouseUrl:
      "https://www.doba.com/product/yjCSKRQfOeVF/dropshipping-3-in-1-pet-travel-collapsible-bowl-foldable-slow-feeder-with-strong-suction-cups-portable-silicone-dog-bowl-with-hook-for-hanging-on-collarbackpack.html",
  },
  "puzzle-feeder": {
    name: "Sniffer Snack Mat",
    tagline: "Pet Life snuffle mat.",
    description: "A Pet Life snuffle mat. Hide kibble in the fabric for a dog or a cat to find.",
    details: ["Fabric snuffle mat", "For dogs and cats"],
    price: 53.99,
    warehouseUrl:
      "https://www.doba.com/product/WJbkeZqtDYvt/dropshipping-pet-life-sniffer-snack-interactive-feeding-pet-snuffle-mat.html",
  },
};

const COMING_SOON_NAMES: Record<string, string> = {
  "calming-chews": "Welsdom Chews, 30 count",
  "joint-liquid": "Welsdom Oil, 120 ml",
  "joint-muscle-chew": "Welsdom Soft Chews, 30 count",
  "skin-chews": "Welsdom Bacon Chews, 30 count",
  "yegbong-drops": "Yegbong Drops, 60 ml",
  "pig-ears-25": "Bonez Pig Ears, 25 count",
  "calm-powder": "Dog Powder",
  "calm-drops-60": "Welsdom Drops, 60 ml",
  "detox-powder": "Welsdom Powder, 120 g",
  "cbd2heal-dogs": "CBD2HEAL Tincture, 1000 mg",
  "herbal-harmony": "Herbal Harmony Drops, 30 ml",
  "immune-suspension": "Welsdom Suspension, 60 ml",
  "hemp-joint-120": "Soft Chews, 120 count",
  "glucosamine-120": "Soft Chews, 120 count",
  "glucosamine-tabs": "Dog Tablets",
  "hemp-oil-drops": "Hemp Oil Drops",
};

function cleanSentence(text: string): string {
  return text
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => sentence && !CLAIM.test(sentence))
    .join(" ")
    .trim();
}

function ingestible(product: Product): boolean {
  return product.category === "treats" || product.category === "wellness";
}

export function isPreviewRemoved(slug: string): boolean {
  return REMOVED.has(slug);
}

export function canPurchase(product: Product): boolean {
  return (product.stock ?? "in_stock") === "in_stock";
}

export function agedOut(product: Product, now = Date.now()): boolean {
  if (product.stock !== "out_of_stock" || !product.stockSince) return false;
  const since = Date.parse(product.stockSince);
  return Number.isFinite(since) && now - since > WEEK;
}

export function projectPreview(
  product: Product,
  overrides: Record<string, { stock: StockState; since: string }> = {},
): Product | null {
  if (REMOVED.has(product.slug)) return null;

  let next: Product = {
    ...product,
    details: [...product.details],
    dobaUrl: product.warehouseUrl,
    stock: "in_stock",
  };

  const replacement = REPLACEMENTS[product.slug];
  if (replacement) {
    next = {
      ...next,
      ...replacement,
      featured: product.slug === "slow-meal-mat" ? true : next.featured,
    };
  }

  if (PRICES[product.slug] != null && !replacement) next.price = PRICES[product.slug];
  if (PHOTOS.has(product.slug)) next.image = PHOTO(product.slug);

  if (product.slug === "snowman-hoodie") {
    next.name = "LED Halloween Hoodie";
    next.tagline = "Pet Life hooded sweater with LED lighting.";
    next.description =
      "The Pet Life hooded sweater with LED lighting. The photo is the listing photo of the sweater that ships.";
    next.details = ["Hooded sweater with LED lighting", "Sizes follow the listing"];
    next.price = 38.99;
  }

  if (ingestible(next)) {
    const name = COMING_SOON_NAMES[product.slug] ?? next.name;
    next = {
      ...next,
      name,
      tagline: "Coming soon.",
      description: `${name} is not for sale yet.`,
      details: ["Not available to purchase yet."],
      stock: "coming_soon",
      featured: false,
      exploring: false,
    };
  } else {
    next.tagline = cleanSentence(next.tagline) || next.tagline;
    next.description = cleanSentence(next.description) || next.description;
    next.details = next.details.map((detail) => cleanSentence(detail)).filter(Boolean);
  }

  const override = overrides[product.slug];
  if (override && next.stock !== "coming_soon") {
    next.stock = override.stock;
    next.stockSince = override.since;
    if (override.stock !== "in_stock") {
      next.featured = false;
      next.exploring = false;
    }
  }

  next.dobaUrl = next.warehouseUrl;
  return next;
}

export function previewCatalog(
  overrides: Record<string, { stock: StockState; since: string }> = {},
  now = Date.now(),
): Product[] {
  return PRODUCTS.map((product) => projectPreview(product, overrides)).filter(
    (product): product is Product => Boolean(product) && !agedOut(product!, now),
  );
}

export function previewOne(
  slug: string,
  overrides: Record<string, { stock: StockState; since: string }> = {},
): Product | null {
  if (REMOVED.has(slug)) return null;
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) return null;
  return projectPreview(product, overrides);
}

export function needsReplacement(
  overrides: Record<string, { stock: StockState; since: string }> = {},
  now = Date.now(),
): Product[] {
  return PRODUCTS.map((product) => projectPreview(product, overrides)).filter(
    (product): product is Product => Boolean(product) && agedOut(product!, now),
  );
}
