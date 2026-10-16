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

export const TRAVEL_BOWL_SLUG = "travel-bowl-3in1";

const SOURCE_SLUG: Record<string, string> = {
  [TRAVEL_BOWL_SLUG]: "slow-meal-mat",
};

const WEEK = 7 * 24 * 60 * 60 * 1000;

const FOR_SALE = new Set([
  "calming-chews",
  "joint-liquid",
  "joint-muscle-chew",
  "skin-chews",
  "yegbong-drops",
  "pig-ears-25",
  "calm-powder",
  "calm-drops-60",
  "detox-powder",
  "cbd2heal-dogs",
  "herbal-harmony",
  "immune-suspension",
]);

/** Prices clear $8 profit and 40% after Doba cost, shipping, and 2.9% + $0.30. */
const SALE: Record<string, Pick<Product, "name" | "tagline" | "description" | "details" | "price">> = {
  "calming-chews": {
    name: "Welsdom Calming Chews",
    tagline: "30 soft chews for dogs.",
    description:
      "Welsdom Calming Chews come as 30 soft chews for dogs. One chew, given by hand, as part of a daily routine.",
    details: [
      "Key Ingredients & Active Content (per pouch)",
      "Calming chew blend: Included",
      "Count: 30 chews",
      "Benefits & Features",
      "Daily Use: Soft chews made for a regular routine.",
      "How to Offer: A chew a dog can take by hand.",
      "Palatable Design: Soft chews for everyday use.",
    ],
    price: 33.99,
  },
  "joint-liquid": {
    name: "Welsdom Joint Oil",
    tagline: "120 ml joint oil for dogs and cats.",
    description:
      "Welsdom Joint Oil is a 120 ml liquid for dogs and cats. Add the serving printed on the bottle to food.",
    details: [
      "Key Ingredients & Active Content (per bottle)",
      "Joint nutritional oil: Included",
      "Size: 120 ml",
      "Measuring cup: Included",
      "Small-dog serving printed on the bottle: 2 ml",
      "Benefits & Features",
      "How to Use: Add the printed serving to food.",
      "Shared Household: Labeled for dogs and cats.",
      "Measured Serving: A cup is included so the daily amount stays simple.",
    ],
    price: 52.99,
  },
  "joint-muscle-chew": {
    name: "Welsdom Joint & Muscle Chews",
    tagline: "30 soft chews for dogs.",
    description:
      "Welsdom Joint & Muscle Chews are 30 soft chews for dogs. The pouch lists collagen, MSM, hyaluronic acid, glucosamine, chondroitin, and fish oil.",
    details: [
      "Key Ingredients & Active Content (per pouch)",
      "Collagen Hydrolysate (Hydrolyzed Collagen): 0.14 g",
      "Methylsulfonylmethane (MSM): 0.04 g",
      "Sodium Hyaluronate (Hyaluronic Acid): 0.008 g",
      "Glucosamine & Chondroitin: Included",
      "Fish Oil: Included, provides omega-3s",
      "Benefits & Features",
      "How to Offer: 30 soft chews for a daily routine.",
      "Pouch Ingredients: Collagen, MSM, hyaluronic acid, glucosamine, chondroitin, and fish oil.",
      "Palatable Design: Soft chews make daily use easy.",
    ],
    price: 38.99,
  },
  "skin-chews": {
    name: "Welsdom Skin Health Chews",
    tagline: "30 bacon soft chews, 120 g.",
    description:
      "Welsdom Skin Health Chews are 30 bacon soft chews, 120 g, for dogs. Fish oil is listed on the pouch.",
    details: [
      "Key Ingredients & Active Content (per pouch)",
      "Omega coat and skin chew blend: Included",
      "Fish oil: Included",
      "Count: 30 soft chews, 120 g",
      "Flavor: Bacon",
      "Benefits & Features",
      "Count: 30 bacon soft chews, 120 g.",
      "Fish oil: Listed on the pouch.",
      "Palatable Design: Bacon-flavored soft chews.",
    ],
    price: 27.99,
  },
  "yegbong-drops": {
    name: "Yegbong Soothing Drops",
    tagline: "60 ml dropper for cats and dogs.",
    description:
      "Yegbong Soothing Drops are a 60 ml dropper for cats and dogs. A daily drop added to food or water.",
    details: [
      "Key Ingredients & Active Content (per bottle)",
      "Soothing drop formula: Included",
      "Size: 60 ml / 2 fl oz",
      "Benefits & Features",
      "How to Use: A daily drop added to food or water.",
      "Shared Household: For cats and dogs.",
      "Easy Use: A dropper that can be added to a meal.",
    ],
    price: 22.99,
  },
  "pig-ears-25": {
    name: "Bonez Pig Ears, 25 Count",
    tagline: "25 whole pig ears, about 4 lb.",
    description:
      "Bonez Pig Ears (25 count, about 4 lb) are whole pig-ear chews for dogs.",
    details: [
      "Key Ingredients & Active Content (per bag)",
      "Whole pig ears: 25",
      "Bag weight: about 4 lb",
      "Benefits & Features",
      "Single-Ingredient Chew: Pig ears, with nothing else listed on the bag.",
      "Supervised Chew: Stay with your dog while they chew.",
      "Dogs Only: Not a meal, and not for pets that gulp chews whole.",
    ],
    price: 79.99,
  },
  "calm-powder": {
    name: "Calming Powder for Dogs",
    tagline: "A powder stirred into a dog's meal.",
    description:
      "Calming Powder for Dogs is a powder stirred into a dog's meal.",
    details: [
      "Key Ingredients & Active Content (per pouch)",
      "Calming powder blend: Included",
      "Benefits & Features",
      "Meal Mix: Stirred into breakfast or dinner.",
      "How to Use: A powder added to a dog's food.",
      "For Dogs: Labeled for dogs.",
    ],
    price: 40.99,
  },
  "calm-drops-60": {
    name: "Calming Comfort Drops, 60 mL",
    tagline: "60 ml drops for cats and dogs. Not CBD.",
    description:
      "Welsdom Calming Comfort Drops (60 ml) are a liquid for cats and dogs. A daily drop added to food or water. Not CBD.",
    details: [
      "Key Ingredients & Active Content (per bottle)",
      "Calming comfort formula: Included",
      "Size: 60 ml",
      "Not CBD",
      "Benefits & Features",
      "How to Use: A daily drop added to food or water.",
      "Shared Household: For cats and dogs.",
      "Dropper Bottle: A measured liquid, not a chew.",
    ],
    price: 23.99,
  },
  "detox-powder": {
    name: "Welsdom Detox Powder, 120 g",
    tagline: "120 g bacon-flavored powder.",
    description:
      "Welsdom Detox Powder is a 120 g bacon-flavored powder for cats and dogs. Stir a serving into wet food.",
    details: [
      "Key Ingredients & Active Content (per pouch)",
      "Detox powder blend: Included",
      "Size: 120 g",
      "Flavor: Bacon",
      "Benefits & Features",
      "How to Use: Stir a serving into wet food.",
      "Flavor: Bacon powder, 120 g.",
      "Meal Mix: Bacon-flavored powder for wet food.",
    ],
    price: 26.99,
  },
  "cbd2heal-dogs": {
    name: "CBD2HEAL Dog Tincture, 1000 mg",
    tagline: "1000 mg hemp-extract dropper for dogs.",
    description:
      "CBD2HEAL Dog Tincture is a 1000 mg hemp-extract liquid for dogs. This order is the bottle in the photo. A few drops from the dropper.",
    details: [
      "Key Ingredients & Active Content (per bottle)",
      "Hemp extract: 1000 mg",
      "Flavor shown: Bacon. Original is also listed.",
      "Benefits & Features",
      "Dropper Tincture: A liquid for dogs, not a treat pouch.",
      "Labeled Strength: This order is the 1000 mg bottle in the photo.",
      "Daily Use: A few drops from the dropper.",
    ],
    price: 40.99,
  },
  "herbal-harmony": {
    name: "Herbal Harmony Drops, 30 ml",
    tagline: "30 ml bacon-flavored drops. Not CBD.",
    description:
      "Welsdom Herbal Harmony (30 ml) is a bacon-flavored liquid for dogs and cats. A daily drop added to food or water. Not CBD, and not the 60 ml Calming Comfort Drops.",
    details: [
      "Key Ingredients & Active Content (per bottle)",
      "Herbal harmony suspension: Included",
      "Size: 30 ml",
      "Flavor: Bacon",
      "Not CBD, and not the 60 ml Calming Comfort Drops",
      "Benefits & Features",
      "How to Use: A daily drop added to food or water.",
      "Not CBD: Not the 60 ml Calming Comfort Drops.",
      "Shared Household: For dogs and cats.",
    ],
    price: 20.99,
  },
  "immune-suspension": {
    name: "Immune Suspension, 60 ml",
    tagline: "60 ml bacon-flavored liquid with a measuring cup.",
    description:
      "Welsdom Immune Suspension is a 60 ml bacon-flavored liquid for dogs and cats, with a measuring cup. A daily amount added to food.",
    details: [
      "Key Ingredients & Active Content (per bottle)",
      "Immune suspension: Included",
      "Size: 60 ml",
      "Flavor: Bacon",
      "Measuring cup: Included",
      "Not CBD, and not the 30 ml Herbal Harmony bottle",
      "Benefits & Features",
      "How to Use: A daily amount added to food.",
      "Measured Serving: A cup is included.",
      "Meal Pour: A small daily amount in food.",
    ],
    price: 32.99,
  },
};


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

  if (ingestible(next) && !FOR_SALE.has(product.slug)) {
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
  } else if (SALE[product.slug]) {
    next = { ...next, ...SALE[product.slug], stock: "in_stock", featured: false, exploring: false };
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
  if (product.slug === "slow-meal-mat") next.slug = TRAVEL_BOWL_SLUG;
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
  if (REMOVED.has(slug) || REMOVED.has(SOURCE_SLUG[slug] ?? "")) return null;
  const product = PRODUCTS.find((item) => item.slug === (SOURCE_SLUG[slug] ?? slug));
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
