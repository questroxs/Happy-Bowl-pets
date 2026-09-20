export const CATEGORIES = [
  { id: "hydration", label: "Hydration" },
  { id: "kits", label: "Kits" },
  { id: "filters", label: "Filters" },
  { id: "mealtime", label: "Mealtime" },
  { id: "play", label: "Play" },
  { id: "accessories", label: "Accessories" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];
export type Species = "dogs" | "cats" | "both";

export type Product = {
  slug: string;
  sku: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  price: number;
  category: CategoryId;
  species: Species;
  image: string;
  featured?: boolean;
  exploring?: boolean;
  capacity?: string;
  material?: string;
  related: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "hydration-starter",
    sku: "HB-KIT-01",
    name: "Hydration Starter Kit",
    tagline: "Fountain + filters — the first buy that makes sense.",
    description:
      "Quiet stainless fountain and a starter filter set, together. Most homes should start here: fresher water on day one, and a restock rhythm already in the box.",
    details: [
      "Quiet stainless fountain (2 L) plus a multi-pack of replacement filters",
      "Best first purchase for cats, small dogs, and apartment kitchens",
      "Ships as one kit — fountain and filters together",
    ],
    price: 52,
    category: "kits",
    species: "both",
    image: "/products/kit-starter.jpg",
    featured: true,
    related: ["quiet-stainless-2l", "filter-8pack", "slow-meal-mat"],
  },
  {
    slug: "quiet-stainless-2l",
    sku: "HB-FNT-01",
    name: "Quiet Stainless Fountain",
    tagline: "Everyday hero. About 2 litres of circulating water.",
    description:
      "A compact stainless fountain for cats and smaller dogs. Low hum, easy to wipe down, sized for a kitchen corner rather than a utility room.",
    details: [
      "Brushed stainless basin, roughly 2 L",
      "Designed for quiet overnight running",
      "Pairs with the Filter 8-Pack for a simple restock cadence",
    ],
    price: 36,
    category: "hydration",
    species: "both",
    image: "/products/fountain-2l.jpg",
    featured: true,
    capacity: "2 L",
    material: "Stainless steel",
    related: ["hydration-starter", "filter-8pack", "stainless-xl"],
  },
  {
    slug: "slow-meal-mat",
    sku: "HB-LIC-AUTUMN",
    name: "Slow Meal Lick Mat",
    tagline: "Spread, freeze, and let mealtime take a breath.",
    description:
      "A ridged silicone mat for wet food, yogurt, or a smear of kibble mash. Useful when you want a calmer bowl — not a race.",
    details: [
      "Food-grade silicone with raised ridges",
      "Suction-friendly for floors and crate trays",
      "Dishwasher-safe; freeze for longer sessions",
    ],
    price: 22,
    category: "mealtime",
    species: "both",
    image: "/products/lick-mat.jpg",
    featured: true,
    material: "Silicone",
    related: ["calm-mealtime-kit", "puzzle-feeder", "hydration-starter"],
  },
  {
    slug: "stainless-xl",
    sku: "HB-FNT-XL",
    name: "Stainless Fountain XL",
    tagline: "A deeper tank for multi-pet homes and bigger drinkers.",
    description:
      "Larger stainless fountain for households that share water or simply go through a 2 L tank too fast. Same quiet brief, more capacity.",
    details: [
      "Stainless tank in the 6–8 L range",
      "Better for two-cat homes, large dogs, or all-day drinkers",
      "Use XL filters — standard packs will not fit",
    ],
    price: 68,
    category: "hydration",
    species: "both",
    image: "/products/fountain-xl.jpg",
    capacity: "7 L",
    material: "Stainless steel",
    related: ["multi-pet-kit", "filter-xl", "quiet-stainless-2l"],
  },
  {
    slug: "cordless-base",
    sku: "HB-FNT-WIRE",
    name: "Cordless Fountain Base",
    tagline: "When the outlet is on the wrong wall.",
    description:
      "A rechargeable circulating base for spots where a cord is awkward — a sunroom, a crate run, a rental with one socket. Accessory, not a replacement for the stainless hero.",
    details: [
      "Cordless / rechargeable circulating base",
      "Use as an add-on when placement is awkward",
      "Not a substitute for the 2 L stainless fountain",
    ],
    price: 48,
    category: "hydration",
    species: "both",
    image: "/products/cordless.jpg",
    material: "Stainless and polymer",
    related: ["quiet-stainless-2l", "travel-bowl-set", "hydration-starter"],
  },
  {
    slug: "calm-mealtime-kit",
    sku: "HB-KIT-02",
    name: "Calm Mealtime Kit",
    tagline: "Hydration plus a lick mat for slower routines.",
    description:
      "The pairing we recommend when water is sorted and meals still feel frantic: fountain path plus a Slow Meal Lick Mat, boxed as one habit.",
    details: [
      "Quiet fountain path with a Slow Meal Lick Mat",
      "For cats and dogs who gulp, pace, or need a longer meal",
      "Ships as one kit",
    ],
    price: 56,
    category: "kits",
    species: "both",
    image: "/products/lick-mat.jpg",
    related: ["slow-meal-mat", "hydration-starter", "puzzle-feeder"],
  },
  {
    slug: "multi-pet-kit",
    sku: "HB-KIT-03",
    name: "Multi-Pet Hydration Kit",
    tagline: "XL fountain and filters for shared households.",
    description:
      "Built for homes that share a bowl: a larger stainless tank and the filters that actually fit it. One kit instead of guessing sizes.",
    details: [
      "XL stainless fountain plus matching filters",
      "Meant for two or more drinkers",
      "Do not mix with the 2 L filter pack",
    ],
    price: 78,
    category: "kits",
    species: "both",
    image: "/products/fountain-xl.jpg",
    related: ["stainless-xl", "filter-xl", "hydration-starter"],
  },
  {
    slug: "filter-8pack",
    sku: "HB-FLT-08",
    name: "Filter 8-Pack",
    tagline: "The restock most 2 L homes actually want.",
    description:
      "Replacement carbon filters for the Quiet Stainless Fountain. Eight is enough to settle into a monthly swap without another order hanging over you.",
    details: [
      "Fits the 2 L Quiet Stainless Fountain",
      "Swap about every 2–4 weeks depending on pets and water",
      "Not sized for the XL tank",
    ],
    price: 19,
    category: "filters",
    species: "both",
    image: "/products/filters.jpg",
    related: ["quiet-stainless-2l", "filter-care", "hydration-starter"],
  },
  {
    slug: "filter-xl",
    sku: "HB-FLT-XL",
    name: "XL Fountain Filter Pack",
    tagline: "Filters cut for the larger tank.",
    description:
      "Replacement filters sized for the Stainless Fountain XL. Keep this pack if the 7 L is your house fountain — the 8-pack will not seat correctly.",
    details: [
      "Sized for the 6–8 L stainless fountain",
      "Same swap rhythm as the standard pack",
      "Will not fit the 2 L model",
    ],
    price: 18,
    category: "filters",
    species: "both",
    image: "/products/filters.jpg",
    related: ["stainless-xl", "multi-pet-kit", "filter-care"],
  },
  {
    slug: "filter-care",
    sku: "HB-FLT-KIT",
    name: "Filter Care Bundle",
    tagline: "Filters and sponges in one tidy restock.",
    description:
      "The unglamorous kit that keeps a fountain tasting like water: replacement filters plus the foam pre-filter most pumps want wiped on a shorter cycle.",
    details: [
      "Filters and pump sponges together",
      "For the 2 L stainless path",
      "A good second order after the Starter Kit",
    ],
    price: 24,
    category: "filters",
    species: "both",
    image: "/products/filters.jpg",
    related: ["filter-8pack", "quiet-stainless-2l", "hydration-starter"],
  },
  {
    slug: "puzzle-feeder",
    sku: "HB-PLAY-ROTO",
    name: "Puzzle IQ Feeder",
    tagline: "A rotating bowl that makes kibble take longer.",
    description:
      "Interactive feeder with moving compartments. Useful for dogs (and some cats) who finish dinner in twelve seconds and then look betrayed.",
    details: [
      "Rotating puzzle compartments for dry food",
      "Adjustable challenge; wipe-clean polymer",
      "Mealtime enrichment — not a substitute for a fountain",
    ],
    price: 28,
    category: "mealtime",
    species: "both",
    image: "/products/feeder.jpg",
    related: ["slow-meal-mat", "calm-mealtime-kit", "frog-dispenser"],
  },
  {
    slug: "ball-launcher",
    sku: "HB-PLAY-LAUNCHER",
    name: "Auto Ball Launcher",
    tagline: "Fetch, without the shoulder.",
    description:
      "A compact automatic ball launcher for dogs who need a job. We are not leading the shop with this — hydration still comes first — but it earns a place for high-energy homes.",
    details: [
      "Automatic tennis-ball launcher",
      "Best outdoors or in a long indoor run",
      "Dogs only; not a cat product",
    ],
    price: 89,
    category: "play",
    species: "dogs",
    image: "/products/launcher.jpg",
    exploring: true,
    related: ["ever-antler", "roast-turkey-chew", "travel-bowl-set"],
  },
  {
    slug: "roast-turkey-chew",
    sku: "HB-SP-TURKEY",
    name: "Roast Turkey Chew",
    tagline: "A treat-dispensing chew that looks like Sunday lunch.",
    description:
      "Durable rubber chew with hidden pockets for paste or kibble. Enrichment, not a meal — and not an edible turkey.",
    details: [
      "Treat-dispensing rubber chew",
      "Stuff, freeze, and supervise",
      "Dogs; size up for power chewers",
    ],
    price: 16,
    category: "play",
    species: "dogs",
    image: "/products/turkey.jpg",
    exploring: true,
    related: ["ever-antler", "frog-dispenser", "puzzle-feeder"],
  },
  {
    slug: "ever-antler",
    sku: "HB-SP-ANTLER",
    name: "Ever Antler Chew",
    tagline: "The long chew for dogs who need a job in their mouth.",
    description:
      "A durable antler-shaped chew for settled evening chewing. Meant to last — not to be swallowed in pieces. Supervise, as with any chew.",
    details: [
      "Long-lasting nylon-style chew",
      "Evening enrichment for moderate to strong chewers",
      "Dogs only; discard if it becomes small enough to swallow",
    ],
    price: 18,
    category: "play",
    species: "dogs",
    image: "/products/antler.jpg",
    exploring: true,
    related: ["roast-turkey-chew", "ball-launcher", "frog-dispenser"],
  },
  {
    slug: "frog-dispenser",
    sku: "HB-PLAY-FROG",
    name: "Floating Frog Dispenser",
    tagline: "A bobbing treat toy for water-loving dogs.",
    description:
      "Frog-shaped dispenser that floats. Toss it in a bowl, a kiddie pool, or the yard with a few pieces of kibble inside.",
    details: [
      "Floating rubber treat dispenser",
      "Works in water or on land",
      "Dogs; not a chew bone — it is a dispenser",
    ],
    price: 15,
    category: "play",
    species: "dogs",
    image: "/products/frog.jpg",
    related: ["roast-turkey-chew", "puzzle-feeder", "ball-launcher"],
  },
  {
    slug: "travel-bowl-set",
    sku: "HB-TRV-4IN1",
    name: "Travel Bowl Set",
    tagline: "Water and food that collapse into a bag.",
    description:
      "Fold-flat bowls, a bottle, and a clip pouch for walks, cars, and weekends away. Hydration should not stop at the front door.",
    details: [
      "Collapsible silicone bowls with a water bottle and pouch",
      "Clips to a leash or bag",
      "Dogs and cats on the go",
    ],
    price: 32,
    category: "accessories",
    species: "both",
    image: "/products/travel.jpg",
    exploring: true,
    material: "Silicone",
    related: ["quiet-stainless-2l", "hydration-starter", "cordless-base"],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function productsByCategory(category: CategoryId) {
  return PRODUCTS.filter((product) => product.category === category);
}

export function featuredProducts() {
  return PRODUCTS.filter((product) => product.featured);
}

export function exploringProducts() {
  return PRODUCTS.filter((product) => product.exploring);
}

export function relatedProducts(product: Product) {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => Boolean(item));
}

export function searchProducts(query: string, category?: CategoryId, species?: Species) {
  const needle = query.trim().toLowerCase();
  return PRODUCTS.filter((product) => {
    if (category && product.category !== category) return false;
    if (species && species !== "both" && product.species !== "both" && product.species !== species) {
      return false;
    }
    if (!needle) return true;
    const haystack = `${product.name} ${product.tagline} ${product.description} ${product.sku}`.toLowerCase();
    return haystack.includes(needle);
  });
}

export function speciesLabel(species: Species) {
  if (species === "dogs") return "Dogs";
  if (species === "cats") return "Cats";
  return "Dogs & cats";
}
