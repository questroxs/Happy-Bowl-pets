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
  warehouseUrl: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "hydration-starter",
    sku: "HB-KIT-01",
    name: "Hydration Starter Kit",
    tagline: "The 2 L stainless fountain plus the 8-pack of filters that fit it.",
    description:
      "Two warehouse boxes, sold together: the quiet 2 L stainless fountain and the 8-filter restock. This is the first order we recommend — the same fountain on the product photo, and the same filter pack beside it.",
    details: [
      "Ships as two warehouse items: 2 L stainless fountain + 8 cartridges and 4 sponges",
      "Photo is a composite of those two products — not a styled kitchen set",
      "Best first purchase for cats, small dogs, and apartment kitchens",
    ],
    price: 52,
    category: "kits",
    species: "both",
    image: "/products/kit-starter.jpg",
    featured: true,
    related: ["quiet-stainless-2l", "filter-8pack", "slow-meal-mat"],
    warehouseUrl:
      "https://www.doba.com/product/PyqtQhNcWcve/dropshipping-2l676oz-automatic-electric-pet-water-fountain-stainless-steel-pet-drinking-fountain-cat-dog-water-dispenser.html",
  },
  {
    slug: "quiet-stainless-2l",
    sku: "HB-FNT-01",
    name: "Quiet Stainless Fountain",
    tagline: "2 L / 67.6 oz 304 stainless, split faucet, water-level window.",
    description:
      "The compact stainless fountain the warehouse ships: 304 steel, about two litres, a split faucet, and a window so you can see when to refill. Quiet pump (35 dB or under). Sized for cats and smaller dogs.",
    details: [
      "304 stainless basin, 2 L / 67.6 oz (about 7.3 × 7.3 × 6.7 in)",
      "Split faucet with low / medium / high flow; USB cord about 77 in",
      "Visible water-level window; swap the filter about every 30 days",
    ],
    price: 36,
    category: "hydration",
    species: "both",
    image: "/products/fountain-2l.jpg",
    featured: true,
    capacity: "2 L",
    material: "304 stainless steel",
    related: ["hydration-starter", "filter-8pack", "stainless-xl"],
    warehouseUrl:
      "https://www.doba.com/product/PyqtQhNcWcve/dropshipping-2l676oz-automatic-electric-pet-water-fountain-stainless-steel-pet-drinking-fountain-cat-dog-water-dispenser.html",
  },
  {
    slug: "slow-meal-mat",
    sku: "HB-LIC-01",
    name: "Slow Meal Lick Mat",
    tagline: "Food-grade silicone, four textures, suction cups for floor or tub.",
    description:
      "The warehouse lick mat: a ridged silicone pad with suction cups. Spread wet food, yogurt, or a smear of kibble mash. Color from the warehouse is blue, green, teal, or red — the mat you receive is this shape.",
    details: [
      "Food-grade silicone with four slow-feeder textures and suction cups",
      "Use on tile, crate trays, or in the bath; dishwasher-safe",
      "Warehouse color is blue, green, teal, or red — same mat, different color",
    ],
    price: 22,
    category: "mealtime",
    species: "both",
    image: "/products/lick-mat.jpg",
    featured: true,
    material: "Food-grade silicone",
    related: ["calm-mealtime-kit", "puzzle-feeder", "elevated-station"],
    warehouseUrl:
      "https://www.doba.com/product/GuDZqBmFWoVz/dropshipping-lick-mat-for-dogs-slow-feeder-bowl-pet-lick-mat-for-anxiety-reduction-dog-lick-pad-for-treats-grooming-use-in-shower-bath-with-suction-cup.html",
  },
  {
    slug: "stainless-xl",
    sku: "HB-FNT-XL",
    name: "Stainless Fountain XL",
    tagline: "PawHut 7 L / 246 oz tank for multi-pet homes.",
    description:
      "The larger stainless fountain the warehouse ships — PawHut 1.8 gallon, 304 steel, water-level window, quiet pump. This is the photo of that unit, not a styled stand-in.",
    details: [
      "304 stainless, 7 L / 246 oz (12.6 × 8.7 × 8.8 in)",
      "Window with LED, two flow modes, pump under 35 dB",
      "Filters in the box with this fountain — do not use the 2 L 8-pack here",
    ],
    price: 68,
    category: "hydration",
    species: "both",
    image: "/products/fountain-xl.jpg",
    capacity: "7 L",
    material: "304 stainless steel",
    related: ["quiet-stainless-2l", "hydration-starter", "cordless-elfin"],
    warehouseUrl:
      "https://www.doba.com/product/YsKyDkpWOcqn/dropshipping-246-oz7l-stainless-steel-cat-water-fountain-with-filters-ultra-quiet-pump-for-cats-dogs-multi-pet-homes.html",
  },
  {
    slug: "cordless-elfin",
    sku: "HB-FNT-ELFIN",
    name: "Cordless Elfin Fountain",
    tagline: "Cheerble Elfin E1+ — 2 L pumpless fountain, stainless tray, 30-day battery.",
    description:
      "The warehouse ships the Cheerble Elfin E1+ in white: a 2 L cordless fountain with MagDrive circulation (no submerged pump), a stainless drinking tray, and a 5000 mAh pack that lasts about a month. For indoor cats and small dogs. This is that unit, not a corded stainless stand-in.",
    details: [
      "Cheerble Elfin E1+, white, 2 L tank with stainless tray (Doba D01027H85UA)",
      "Pumpless MagDrive circulation; 5000 mAh battery, about 30 days per charge",
      "Indoor cats and small dogs; US warehouse, not the 2 L or 7 L stainless fountains",
    ],
    price: 64,
    category: "hydration",
    species: "both",
    image: "/products/elfin.jpg",
    capacity: "2 L",
    material: "ABS + stainless tray",
    related: ["quiet-stainless-2l", "stainless-xl", "filter-8pack"],
    warehouseUrl:
      "https://www.doba.com/product/QvCjqZTNEJbG/dropshipping-cheerble-pet-fountain-elfin-e1-battery-operated-pumpless-water-dispenser-with-stainless-steel-tray-for-indoor-cats-2-liters.html",
  },
  {
    slug: "calm-mealtime-kit",
    sku: "HB-KIT-02",
    name: "Calm Mealtime Kit",
    tagline: "The 2 L fountain plus the lick mat — two warehouse boxes.",
    description:
      "Fountain path plus a slower bowl. You get the same 2 L stainless fountain and the same silicone lick mat listed on their own pages. The photo is those two products side by side.",
    details: [
      "Ships as two warehouse items: 2 L fountain + silicone lick mat",
      "For cats and dogs who gulp, pace, or need a longer meal",
      "Lick-mat color may be blue, green, teal, or red",
    ],
    price: 56,
    category: "kits",
    species: "both",
    image: "/products/kit-calm.jpg",
    related: ["slow-meal-mat", "quiet-stainless-2l", "puzzle-feeder"],
    warehouseUrl:
      "https://www.doba.com/product/PyqtQhNcWcve/dropshipping-2l676oz-automatic-electric-pet-water-fountain-stainless-steel-pet-drinking-fountain-cat-dog-water-dispenser.html",
  },
  {
    slug: "filter-8pack",
    sku: "HB-FLT-08",
    name: "Filter 8-Pack",
    tagline: "Eight 4-in-1 cartridges and four sponges for the 2 L fountain.",
    description:
      "The restock the warehouse sends for the Quiet Stainless Fountain: eight layered filter cartridges (about 8.4 × 4.3 × 1.0 cm) plus four foam pre-filters. Not for the 7 L XL tank.",
    details: [
      "8 carbon cartridges + 4 sponge pre-filters",
      "Fits the 2 L Quiet Stainless Fountain; swap about every 4 weeks",
      "Will not seat in the 7 L PawHut XL — that unit uses its own filters",
    ],
    price: 19,
    category: "filters",
    species: "both",
    image: "/products/filters.jpg",
    related: ["quiet-stainless-2l", "hydration-starter", "stainless-xl"],
    warehouseUrl:
      "https://www.doba.com/product/oCepDcBtQJbm/dropshipping-8pcs-stainless-steel-pet-water-fountain-filters-pet-water-fountain-filters-8-pack-replacement-filters-with-4-sponge-filters-for-stainless-steel-cat-dog.html",
  },
  {
    slug: "puzzle-feeder",
    sku: "HB-PLAY-ROTO",
    name: "Puzzle IQ Feeder",
    tagline: "Pet Life Roto Paw — rotating drum onto a slow-feed tray.",
    description:
      "The warehouse ships the Pet Life Roto Paw: a windmill drum that drops kibble through dual-size holes onto a slow-feed bowl. Green and grey, about 12.6 × 10.6 × 9.8 in. This photo is that feeder.",
    details: [
      "Pet Life Roto Paw rotating IQ feeder (SKU DT71GN)",
      "Adjustable height knobs; dual hole sizes for kibble and treats",
      "Wipe-clean polymer; dogs, and some cats who will work a puzzle",
    ],
    price: 28,
    category: "mealtime",
    species: "both",
    image: "/products/feeder.jpg",
    related: ["slow-meal-mat", "calm-mealtime-kit", "elevated-station"],
    warehouseUrl:
      "https://www.doba.com/product/BmDrFaVoKYvO/dropshipping-pet-life-roto-paw-iq-training-interactive-rotating-slow-dog-feeder.html",
  },
  {
    slug: "elevated-station",
    sku: "HB-MEAL-ELEV",
    name: "Oak Feeding Station",
    tagline: "PawHut oak stand, two 0.5 gal stainless bowls, cabinet underneath.",
    description:
      "The warehouse ships the PawHut oak feeding station: particle-board cabinet in oak, two 9.3 in stainless bowls (0.5 gal each), storage behind the doors, slow-feeder insert in the box. Sized for large dogs with a 21.7–25.6 in shoulder. This photo is that stand.",
    details: [
      "PawHut / Aosom D08-085V00AK — oak, 23.6 × 11.8 × 14 in (Doba D0102X3UQWV)",
      "Two 0.5 gal stainless bowls + slow-feeder; 10.6 gal cabinet below",
      "Large dogs, 21.7–25.6 in shoulder; not a cat product",
    ],
    price: 72,
    category: "mealtime",
    species: "dogs",
    image: "/products/elevated.jpg",
    capacity: "0.5 gal × 2",
    material: "Oak particle board + stainless",
    related: ["slow-meal-mat", "puzzle-feeder", "calm-mealtime-kit"],
    warehouseUrl:
      "https://www.doba.com/product/lFCDvRuYJcbq/dropshipping-pawhut-elevated-dog-bowls-with-storage-cabinet-2-stainless-steel-bowls-slow-feeder-dog-feeding-station-for-large-dogs-oak.html",
  },
  {
    slug: "ball-launcher",
    sku: "HB-PLAY-LAUNCHER",
    name: "Auto Ball Launcher",
    tagline: "PawHut orange launcher, 26–79 ft, six ETPU balls in the box.",
    description:
      "The warehouse item is the PawHut automatic ball launcher in orange and white. Rechargeable 5200 mAh pack, remote, three distances, six 2.5 in ETPU balls. Dogs only, outdoors or a long indoor run.",
    details: [
      "PawHut orange launcher, 13.4 × 12.8 × 10.8 in, ABS housing",
      "26–79 ft launch, 5200 mAh battery, 98 ft remote, six ETPU balls",
      "Medium and large dogs; not a cat product",
    ],
    price: 89,
    category: "play",
    species: "dogs",
    image: "/products/launcher.jpg",
    exploring: true,
    related: ["frog-dispenser", "travel-bowl-set", "puzzle-feeder"],
    warehouseUrl:
      "https://www.doba.com/product/SAChVRpFvcql/dropshipping-automatic-dog-ball-launcher-with-26-79-ft-distance-automatic-ball-launcher-for-medium-and-large-dogs-orange.html",
  },
  {
    slug: "frog-dispenser",
    sku: "HB-PLAY-FROG",
    name: "Floating Frog Dispenser",
    tagline: "SodaPup Bull Frog — USA-made rubber treat dispenser.",
    description:
      "The warehouse ships the SodaPup Bull Frog eDispenser in green. FDA-compliant rubber, made in the USA, large size for dogs about 30–60 lb. Fill with kibble or a smear of paste. Supervise, as with any chew.",
    details: [
      "SodaPup Bull Frog, large: about 3 × 3.25 in, 7.8 oz",
      "USA-made natural rubber treat dispenser; dishwasher-safe",
      "Dogs 30–60 lb; not a meal, not a cat toy",
    ],
    price: 15,
    category: "play",
    species: "dogs",
    image: "/products/frog.jpg",
    related: ["puzzle-feeder", "tri-chew", "ball-launcher"],
    warehouseUrl:
      "https://www.doba.com/product/ceQgFKJTVCvo/dropshipping-bull-frog-dog-chew-toy-treat-dispenser---usa-made-sodapup.html",
  },
  {
    slug: "tri-chew",
    sku: "HB-PLAY-TRI",
    name: "Tri-Chew Dispenser",
    tagline: "Pet Life Tri-Chew — TPR chew with three treat tunnels.",
    description:
      "The warehouse ships the Pet Life Tri-Chew: a TPR rubber chew with three inner tunnels for kibble or paste, ridged for gums, and a circle on top for a smear of peanut butter. About 7 × 5 × 1.5 in. Warehouse color is orange, blue, or pink — same toy, different color.",
    details: [
      "Pet Life Tri-Chew TPR (Doba D0102HAXI5V / UPC 810051333244)",
      "Three treat tunnels + top well; about 6.9 × 4.9 × 1.5 in",
      "Dogs; color from the warehouse is orange, blue, or pink. Supervise any chew.",
    ],
    price: 14,
    category: "play",
    species: "dogs",
    image: "/products/tri-chew.jpg",
    exploring: true,
    material: "TPR rubber",
    related: ["frog-dispenser", "puzzle-feeder", "ball-launcher"],
    warehouseUrl:
      "https://www.doba.com/product/rcDkCAvOdYVZ/dropshipping-pet-life-tri-chew-treat-dispensing-and-chewing-interactive-tpr-dog-toy.html",
  },
  {
    slug: "travel-bowl-set",
    sku: "HB-TRV-4IN1",
    name: "Travel Bottle Set",
    tagline: "4-in-1 bottle: water, food cup, poop-bag slot, and scoop. 300 ml.",
    description:
      "The warehouse 4-in-1 walk bottle: 300 ml (10 oz) water, a food cup, a poop-bag dispenser, and a small scoop. ABS, button-dispense. Warehouse color is yellow, pink, or green — same bottle you see here.",
    details: [
      "300 ml water bottle with food cup, bag dispenser, and scoop",
      "ABS, dishwasher-safe, large button for one-hand water",
      "Color from the warehouse: yellow, pink, or green",
    ],
    price: 32,
    category: "accessories",
    species: "both",
    image: "/products/travel.jpg",
    exploring: true,
    material: "ABS",
    related: ["quiet-stainless-2l", "hydration-starter", "slow-meal-mat"],
    warehouseUrl:
      "https://www.doba.com/product/eFCmVIrOaYDK/dropshipping-portable-4-in-1-pet-water-bottle-with-food-storage-poop-bag-dispenser-and-spoon-300ml-capacity-available-in-yellow-pink-green-and-other-colors.html",
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
