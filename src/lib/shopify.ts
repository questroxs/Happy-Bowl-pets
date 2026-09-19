import type { Product } from "./catalog";

export const SHOPIFY_API_VERSION = "2025-10";

export type ShopifyConfig = {
  shop: string;
  token: string;
};

export type ShopifyVariantMatch = {
  variantId: string;
  available: boolean;
  handle: string;
  sku: string;
  price: number | null;
};

export type ShopifyProductNode = {
  handle: string;
  title: string;
  variants: {
    id: string;
    sku: string;
    availableForSale: boolean;
    price: { amount: string; currencyCode: string } | null;
  }[];
};

export class ShopifyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ShopifyError";
  }
}

export function normalizeShopDomain(input: string): string {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) {
    throw new ShopifyError("Enter your store domain, like happybowlpets.myshopify.com.");
  }

  const withoutProtocol = trimmed.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  const host = withoutProtocol.replace(/^www\./, "");

  if (host.endsWith(".myshopify.com")) {
    const handle = host.slice(0, -".myshopify.com".length);
    if (!/^[a-z0-9][a-z0-9-]*$/.test(handle)) {
      throw new ShopifyError("That Shopify domain doesn’t look right.");
    }
    return `${handle}.myshopify.com`;
  }

  if (host.includes(".")) {
    throw new ShopifyError("Use the myshopify.com domain from Admin → Settings, not a custom .com yet.");
  }

  if (!/^[a-z0-9][a-z0-9-]*$/.test(host)) {
    throw new ShopifyError("That store name doesn’t look right.");
  }

  return `${host}.myshopify.com`;
}

export function isAdminApiToken(token: string): boolean {
  const value = token.trim().toLowerCase();
  return value.startsWith("shpat_") || value.startsWith("shpca_") || value.startsWith("shpss_");
}

export function assertStorefrontToken(token: string): string {
  const value = token.trim();
  if (!value) {
    throw new ShopifyError("Paste the Storefront API access token from your custom app.");
  }
  if (isAdminApiToken(value)) {
    throw new ShopifyError(
      "That is an Admin API token. It must never go in the shop. Create a Storefront API token instead.",
    );
  }
  return value;
}

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

export async function storefrontRequest<T>(
  config: ShopifyConfig,
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(`https://${config.shop}/api/${SHOPIFY_API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.token,
    },
    body: JSON.stringify({ query, variables }),
  });

  let payload: GraphQLResponse<T> = {};
  try {
    payload = (await response.json()) as GraphQLResponse<T>;
  } catch {
    throw new ShopifyError("Shopify sent a response this shop could not read.");
  }

  if (payload.errors?.length) {
    throw new ShopifyError(payload.errors[0]?.message ?? "Shopify returned an error.");
  }

  if (!response.ok || !payload.data) {
    if (response.status === 401 || response.status === 403) {
      throw new ShopifyError("Shopify rejected the token. Check it is a Storefront token and the app is installed.");
    }
    throw new ShopifyError(`Could not reach ${config.shop} (${response.status}).`);
  }

  return payload.data;
}

const CATALOG_QUERY = `#graphql
  query HappyBowlCatalog {
    shop {
      name
    }
    products(first: 80) {
      edges {
        node {
          handle
          title
          variants(first: 10) {
            edges {
              node {
                id
                sku
                availableForSale
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

type CatalogQueryData = {
  shop: { name: string };
  products: {
    edges: {
      node: {
        handle: string;
        title: string;
        variants: {
          edges: {
            node: {
              id: string;
              sku: string | null;
              availableForSale: boolean;
              price: { amount: string; currencyCode: string } | null;
            };
          }[];
        };
      };
    }[];
  };
};

export async function fetchShopifyCatalog(config: ShopifyConfig): Promise<{
  shopName: string;
  products: ShopifyProductNode[];
}> {
  const data = await storefrontRequest<CatalogQueryData>(config, CATALOG_QUERY);
  return {
    shopName: data.shop.name,
    products: data.products.edges.map(({ node }) => ({
      handle: node.handle,
      title: node.title,
      variants: node.variants.edges.map(({ node: variant }) => ({
        id: variant.id,
        sku: variant.sku ?? "",
        availableForSale: variant.availableForSale,
        price: variant.price,
      })),
    })),
  };
}

export function matchCatalogToShopify(
  catalog: Pick<Product, "slug" | "sku">[],
  shopifyProducts: ShopifyProductNode[],
): Record<string, ShopifyVariantMatch> {
  const bySku = new Map<string, ShopifyVariantMatch>();
  const byHandle = new Map<string, ShopifyVariantMatch>();

  for (const product of shopifyProducts) {
    const variants = product.variants.filter((variant) => variant.id);
    if (variants.length === 0) continue;
    const preferred = variants.find((variant) => variant.availableForSale) ?? variants[0];
    const match: ShopifyVariantMatch = {
      variantId: preferred.id,
      available: preferred.availableForSale,
      handle: product.handle,
      sku: preferred.sku,
      price: preferred.price ? Number.parseFloat(preferred.price.amount) : null,
    };
    byHandle.set(product.handle.toLowerCase(), match);
    for (const variant of variants) {
      if (!variant.sku.trim()) continue;
      bySku.set(variant.sku.trim().toUpperCase(), {
        variantId: variant.id,
        available: variant.availableForSale,
        handle: product.handle,
        sku: variant.sku,
        price: variant.price ? Number.parseFloat(variant.price.amount) : null,
      });
    }
  }

  const matches: Record<string, ShopifyVariantMatch> = {};
  for (const item of catalog) {
    const hit = bySku.get(item.sku.toUpperCase()) ?? byHandle.get(item.slug.toLowerCase());
    if (hit) matches[item.slug] = hit;
  }
  return matches;
}

const CART_CREATE_MUTATION = `#graphql
  mutation HappyBowlCartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type CartCreateData = {
  cartCreate: {
    cart: { checkoutUrl: string } | null;
    userErrors: { field: string[] | null; message: string }[];
  };
};

export async function createShopifyCheckout(
  config: ShopifyConfig,
  lines: { variantId: string; quantity: number }[],
): Promise<string> {
  const merchandise = lines.filter((line) => line.quantity > 0);
  if (merchandise.length === 0) {
    throw new ShopifyError("Your cart is empty.");
  }

  const data = await storefrontRequest<CartCreateData>(config, CART_CREATE_MUTATION, {
    lines: merchandise.map((line) => ({
      merchandiseId: line.variantId,
      quantity: line.quantity,
    })),
  });

  const error = data.cartCreate.userErrors[0];
  if (error) {
    throw new ShopifyError(error.message);
  }

  const url = data.cartCreate.cart?.checkoutUrl;
  if (!url) {
    throw new ShopifyError("Shopify did not return a checkout link.");
  }
  return url;
}

function csvCell(value: string | number): string {
  const text = String(value);
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

export function shopifyImportCsv(products: Product[]): string {
  const header = [
    "Handle",
    "Title",
    "Body (HTML)",
    "Vendor",
    "Type",
    "Tags",
    "Published",
    "Option1 Name",
    "Option1 Value",
    "Variant SKU",
    "Variant Grams",
    "Variant Inventory Tracker",
    "Variant Inventory Qty",
    "Variant Inventory Policy",
    "Variant Fulfillment Service",
    "Variant Price",
    "Variant Requires Shipping",
    "Variant Taxable",
    "Gift Card",
    "SEO Title",
    "SEO Description",
    "Status",
  ];

  const rows = products.map((product) => {
    const speciesTag = product.species === "both" ? "dogs, cats" : product.species;
    const body = `<p>${escapeHtml(product.description)}</p><ul>${product.details
      .map((detail) => `<li>${escapeHtml(detail)}</li>`)
      .join("")}</ul>`;
    return [
      product.slug,
      product.name,
      body,
      "Happy Bowl Co.",
      product.category,
      `${speciesTag}, ${product.category}`,
      "TRUE",
      "Title",
      "Default Title",
      product.sku,
      "0",
      "shopify",
      "10",
      "continue",
      "manual",
      product.price.toFixed(2),
      "TRUE",
      "TRUE",
      "FALSE",
      product.name,
      product.tagline,
      "active",
    ]
      .map(csvCell)
      .join(",");
  });

  return [header.join(","), ...rows].join("\n");
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"]/g, (char) => {
    if (char === "&") return "&" + "amp;";
    if (char === "<") return "&" + "lt;";
    if (char === ">") return "&" + "gt;";
    return "&" + "quot;";
  });
}

export function envShopifyConfig(): ShopifyConfig | null {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
  const shop = env?.VITE_SHOPIFY_STORE_DOMAIN;
  const token = env?.VITE_SHOPIFY_STOREFRONT_TOKEN;
  if (!shop?.trim() || !token?.trim()) return null;
  try {
    return {
      shop: normalizeShopDomain(shop),
      token: assertStorefrontToken(token),
    };
  } catch {
    return null;
  }
}
