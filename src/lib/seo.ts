import type { Product } from "./catalog";
import { previewCatalog } from "./catalog-preview";

export const SITE = "https://happybowlpets.com";
export const BRAND = "Happy Bowl Pets Co.";

export const HOME_TITLE = "Stainless Steel Pet Water Fountains for Cats & Dogs | Happy Bowl Pets Co.";
export const HOME_DESCRIPTION =
  "Quiet stainless steel water fountains, filters, bowls and enrichment toys for dogs and cats. Easy to clean, thoughtfully chosen. Secure Stripe checkout.";

export const SHOP_TITLE = "Shop Cat & Dog Water Fountains, Filters & Bowls | Happy Bowl Pets Co.";
export const SHOP_DESCRIPTION =
  "Browse quiet stainless pet fountains, replacement filters, travel bowls, slow-feed mats and toys for dogs and cats. Find the right fit for your home.";

export type SeoCategoryId = "fountains" | "fountain-filters" | "bowls" | "enrichment-toys";

export type SeoCategory = {
  id: SeoCategoryId;
  path: `/${SeoCategoryId}`;
  nav: string;
  h1: string;
  title: string;
  description: string;
  copy: string[];
};

export const SEO_CATEGORIES: SeoCategory[] = [
  {
    id: "fountains",
    path: "/fountains",
    nav: "Fountains",
    h1: "Stainless steel pet water fountains",
    title: "Cat & Dog Stainless Steel Water Fountains | Happy Bowl Pets Co.",
    description:
      "Quiet stainless steel water fountains for cats and dogs, from compact 2 L basins to larger multi-pet tanks. Easy to rinse. US shipping.",
    copy: [
      "A pet water fountain should be quiet enough for a kitchen and simple enough to rinse on a weeknight. Happy Bowl Pets Co. keeps stainless steel fountains for cats and dogs: compact basins for one animal, and larger tanks when more than one pet shares the bowl.",
      "Stainless is the material we start with because it does not hold odor the way plastic can, and the basin wipes clean. Look for a visible water line so you know when to refill, and a cord length that reaches a real outlet without a tangle across the floor. Cordless options sit on the same shelf when a counter has no nearby plug.",
      "Choose a 2 liter fountain for a cat or a small dog. Step up in capacity for a multi-pet home so the bowl is not empty by afternoon. Filters that match the fountain are listed on their own page, so the cartridge you reorder is the one that seats in that unit.",
      "Every fountain here is sold for dogs and cats only. Checkout is on Stripe, shipping stays inside the United States, and the photo on the product page is the piece we send.",
    ],
  },
  {
    id: "fountain-filters",
    path: "/fountain-filters",
    nav: "Filters",
    h1: "Replacement filters for pet fountains",
    title: "Pet Fountain Replacement Filters | Happy Bowl Pets Co.",
    description:
      "Replacement filters and sponges matched to our stainless pet fountains. Swap on a monthly rhythm so the stream stays clear for cats and dogs.",
    copy: [
      "A fountain only stays pleasant if the filter is the one that fits it. These replacement packs are the cartridges and sponges we list beside our stainless pet fountains, not a universal pad that almost sits in the tray.",
      "Most homes swap a fountain filter about every four weeks, sooner if several pets drink from the same basin or the water starts to smell. Keep a spare pack in the cabinet so the fountain is not sitting dry while you wait on a shipment. Match the pack to the fountain you already own. A cartridge made for one basin will not seat in a different model, so the product page names the fountain it belongs to.",
      "Rinse the basin when you change the cartridge. A clean tray and a fresh filter are the whole routine: no tools, no special soap, just water and a minute at the sink. Cats and dogs both drink from these fountains, so the filter you pick should match the fountain already in the house, not the pet’s size.",
      "If you are starting from scratch, the fountain pages name the filter that belongs with them. Order both together the first time, then reorder only the pack.",
    ],
  },
  {
    id: "bowls",
    path: "/bowls",
    nav: "Bowls",
    h1: "Bowls, lick mats, and slow feeders",
    title: "Dog & Cat Bowls, Lick Mats & Slow Feeders | Happy Bowl Pets Co.",
    description:
      "Travel bowls, lick mats, and slow feeders for dogs and cats. Silicone and steel pieces that rinse clean and pack flat for home or the car.",
    copy: [
      "Mealtime bowls at Happy Bowl Pets Co. are the pieces that slow a fast eater down or travel without a spill. Silicone lick mats spread a meal across ridges. Collapsible travel bowls fold flat, hang from a hook, and open again at the park. Slow feeders and puzzle trays make kibble last longer than a single gulp.",
      "Pick a lick mat when you want a stationary pad for wet food or a smear of kibble mash, at home or in the bath. Suction cups matter on tile. A travel bowl is the better choice for walks, the car, and weekends, because it collapses and does not ask for a countertop.",
      "Raised feeding stations sit with the bowls when a tall dog should not crane down to the floor. Check the height note on that page before you order. Every bowl and mat here is for dogs and cats, rinses in the sink, and is shown as the item we ship.",
      "Pair a bowl with a fountain if water and meals share the same corner of the kitchen. Filters and fountains live on their own pages so the drinking setup stays easy to reorder.",
    ],
  },
  {
    id: "enrichment-toys",
    path: "/enrichment-toys",
    nav: "Toys",
    h1: "Enrichment toys for dogs and cats",
    title: "Enrichment Toys for Dogs & Cats | Happy Bowl Pets Co.",
    description:
      "Snuffle mats, puzzle feeders, and chase toys for dogs and cats. A slower way to serve kibble and a reason to play after the walk.",
    copy: [
      "Enrichment toys give a dog or a cat something to do with their meal or their afternoon. A snuffle mat hides kibble in fabric so finding dinner takes a few minutes. A puzzle feeder drops pieces as it is nudged. Fetch toys, plush, and dental chews sit beside them for play that is not about the food bowl.",
      "Start with a snuffle mat for a dog who finishes dinner too fast and then stares at the empty dish. Cats who like a crinkle or a tunnel get their own pieces on this page, separate from the dog-only chews. Read the size note: a toy built for a 30 pound dog is not the right pick for a kitten.",
      "These are toys, not a training program. Supervise chew toys, and retire a plush if the stuffing shows. Rinse a feeder after sticky food. The catalog stays limited to dogs and cats, with the same photos we use at checkout.",
      "Looking for the water bowl instead of a toy? Fountains, filters, and meal bowls each have their own page, and the full shop is one tap away.",
    ],
  },
];

export function seoCategory(id: SeoCategoryId): SeoCategory {
  const found = SEO_CATEGORIES.find((category) => category.id === id);
  if (!found) throw new Error(`Unknown category ${id}`);
  return found;
}

export function productsInCategory(id: SeoCategoryId): Product[] {
  return previewCatalog().filter((product) => categoryHas(id, product));
}

function categoryHas(id: SeoCategoryId, product: Product): boolean {
  if (id === "fountains") return product.category === "hydration";
  if (id === "fountain-filters") return product.category === "filters";
  if (id === "bowls") return product.category === "mealtime" && product.slug !== "puzzle-feeder";
  return product.category === "play" || product.slug === "puzzle-feeder";
}

export function categoryPathFor(product: Product): string {
  if (product.category === "hydration") return "/fountains";
  if (product.category === "filters") return "/fountain-filters";
  if (product.category === "mealtime" && product.slug !== "puzzle-feeder") return "/bowls";
  if (product.category === "play" || product.slug === "puzzle-feeder") return "/enrichment-toys";
  return `/shop?cat=${product.category}`;
}

export function categoryLabelFor(product: Product): string {
  if (product.category === "hydration") return "Fountains";
  if (product.category === "filters") return "Filters";
  if (product.category === "mealtime" && product.slug !== "puzzle-feeder") return "Bowls";
  if (product.category === "play" || product.slug === "puzzle-feeder") return "Toys";
  return product.category[0].toUpperCase() + product.category.slice(1);
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE}${path.startsWith("/") ? path : `/${path}`}`;
}

export function productSpec(product: Product): string {
  const bits = [product.capacity, product.material].filter(Boolean).join(" ");
  const raw = bits || product.tagline.split(/[.|—–-]/)[0]?.trim() || "for dogs and cats";
  return raw.length > 48 ? `${raw.slice(0, 45).trim()}…` : raw;
}

export function productTitle(product: Product): string {
  return `${product.name} – ${productSpec(product)} | ${BRAND}`;
}

export function productMetaDescription(product: Product): string {
  const spec = productSpec(product);
  const tail =
    "A practical piece for dogs and cats that rinses clean and ships inside the United States from Happy Bowl Pets Co.";
  let text = `${product.name}. ${spec}. ${tail}`.replace(/\s+/g, " ").trim();
  if (text.length > 155) {
    text = text.slice(0, 152).replace(/\s+\S*$/, "").trim();
    if (!/[.!?]$/.test(text)) text += ".";
  }
  if (text.length < 140) text = `${text} Secure checkout.`.replace(/\s+/g, " ").trim();
  if (text.length > 155) text = text.slice(0, 152).replace(/\s+\S*$/, "").trim() + ".";
  return text;
}

export function availabilityUrl(stock: Product["stock"]): string {
  if (stock === "out_of_stock") return "https://schema.org/OutOfStock";
  if (stock === "coming_soon") return "https://schema.org/PreOrder";
  return "https://schema.org/InStock";
}

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE,
    logo: absoluteUrl("/favicon.svg"),
    email: "info@happybowlpets.com",
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE,
  };
}

export function productLd(product: Product) {
  const path = `/product/${product.slug}`;
  const description = productMetaDescription(product);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteUrl(product.image),
    description,
    sku: product.sku,
    brand: { "@type": "Brand", name: BRAND },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: availabilityUrl(product.stock),
      url: absoluteUrl(path),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "6.95", currency: "USD" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 2, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 5, maxValue: 8, unitCode: "DAY" },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
      },
    },
  };
}

type HeadInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "product";
  jsonLd?: unknown[];
};

export function pageHead({ title, description, path, image = "/og.jpg", type = "website", jsonLd = [] }: HeadInput) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: absoluteUrl(image) },
      { property: "og:type", content: type },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function sitemapPaths(): string[] {
  const staticPaths = ["/", "/shop", "/about", "/shipping", "/returns", "/contact", ...SEO_CATEGORIES.map((category) => category.path)];
  const products = previewCatalog().map((product) => `/product/${product.slug}`);
  return [...staticPaths, ...products];
}
