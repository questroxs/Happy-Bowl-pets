import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  assertStorefrontToken,
  isAdminApiToken,
  matchCatalogToShopify,
  normalizeShopDomain,
  shopifyImportCsv,
} from "./shopify.ts";
import { PRODUCTS } from "./catalog.ts";

describe("normalizeShopDomain", () => {
  it("accepts a bare handle", () => {
    assert.equal(normalizeShopDomain("HappyBowlPets"), "happybowlpets.myshopify.com");
  });

  it("strips protocol and paths", () => {
    assert.equal(
      normalizeShopDomain("https://happybowlpets.myshopify.com/admin"),
      "happybowlpets.myshopify.com",
    );
  });

  it("rejects a custom domain", () => {
    assert.throws(() => normalizeShopDomain("happybowlpets.com"), /myshopify.com/);
  });
});

describe("storefront token guard", () => {
  it("rejects Admin API tokens", () => {
    assert.equal(isAdminApiToken("shpat_abc"), true);
    assert.throws(() => assertStorefrontToken("shpat_abc"), /Admin API/);
  });

  it("accepts a storefront token", () => {
    assert.equal(assertStorefrontToken("  abcdef0123456789  "), "abcdef0123456789");
  });
});

describe("catalog matching", () => {
  it("matches by SKU first, then handle", () => {
    const matches = matchCatalogToShopify(
      [
        { slug: "quiet-stainless-2l", sku: "HB-FNT-01" },
        { slug: "slow-meal-mat", sku: "HB-LIC-AUTUMN" },
        { slug: "missing-piece", sku: "HB-NONE" },
      ],
      [
        {
          handle: "other-name",
          title: "Fountain",
          variants: [
            {
              id: "gid://shopify/ProductVariant/1",
              sku: "HB-FNT-01",
              availableForSale: true,
              price: { amount: "36.00", currencyCode: "USD" },
            },
          ],
        },
        {
          handle: "slow-meal-mat",
          title: "Mat",
          variants: [
            {
              id: "gid://shopify/ProductVariant/2",
              sku: "",
              availableForSale: false,
              price: { amount: "22.00", currencyCode: "USD" },
            },
          ],
        },
      ],
    );

    assert.equal(matches["quiet-stainless-2l"]?.variantId, "gid://shopify/ProductVariant/1");
    assert.equal(matches["quiet-stainless-2l"]?.available, true);
    assert.equal(matches["slow-meal-mat"]?.available, false);
    assert.equal(matches["missing-piece"], undefined);
  });
});

describe("shopify CSV", () => {
  it("includes every catalog SKU as a handle row", () => {
    const csv = shopifyImportCsv(PRODUCTS);
    for (const product of PRODUCTS) {
      assert.match(csv, new RegExp(`^${product.slug},`, "m"));
      assert.match(csv, new RegExp(`,${product.sku},`));
    }
    assert.match(csv, /Variant SKU/);
  });
});
