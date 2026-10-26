import type { Product } from "./catalog";
import { presentProduct } from "./customer-copy";

export const SITE = "https://happybowlpets.com";

const CLAIM =
  /\b(immune|heals?|cures?|veterinary|fda|joint health|detox|anxiety|inflammation|treatment)\b/gi;

export function pageHead(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: unknown;
}) {
  const url = `${SITE}${options.path}`;
  const image = abs(options.image ?? "/og.jpg");
  const description = clip(options.description);
  return {
    meta: [
      { title: options.title },
      { name: "description", content: description },
      { property: "og:title", content: options.title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: options.path.startsWith("/product/") ? "product" : "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: options.jsonLd
      ? [{ type: "application/ld+json", children: JSON.stringify(options.jsonLd) }]
      : [],
  };
}

export function productSeo(product: Product) {
  const shown = presentProduct(product, false);
  const path = `/product/${product.slug}`;
  const availability =
    product.stock === "out_of_stock"
      ? "https://schema.org/OutOfStock"
      : product.stock === "coming_soon"
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock";
  return pageHead({
    title: `${shown.name} | Happy Bowl Pets Co.`,
    description: `${shown.name}. ${shown.tagline} For dogs and cats. Ships in the United States.`,
    path,
    image: product.image,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: shown.name,
      description: clip(shown.tagline || shown.name),
      image: abs(product.image),
      sku: product.sku,
      brand: { "@type": "Brand", name: "Happy Bowl Pets Co." },
      offers: {
        "@type": "Offer",
        url: `${SITE}${path}`,
        priceCurrency: "USD",
        price: product.price.toFixed(2),
        availability,
      },
    },
  });
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Happy Bowl Pets Co.",
        url: SITE,
        logo: {
          "@type": "ImageObject",
          url: "https://www.happybowlpets.com/logo-512.png",
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "WebSite",
        name: "Happy Bowl Pets Co.",
        url: SITE,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE}/shop?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

function abs(path: string) {
  return path.startsWith("http") ? path : `${SITE}${path}`;
}

function clip(text: string) {
  const clean = text.replace(CLAIM, "").replace(/\s+/g, " ").replace(/\s+([,.])/g, "$1").trim();
  if (clean.length <= 155) return clean;
  const cut = clean.slice(0, 154).replace(/\s+\S*$/, "");
  return cut.endsWith(".") ? cut : `${cut}.`;
}
