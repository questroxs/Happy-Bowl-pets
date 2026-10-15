import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getProduct } from "./catalog.ts";
import { canPurchase, isPreviewRemoved, previewOne } from "./catalog-preview.ts";

describe("vercel preview catalog", () => {
  it("reprices without changing the public product", () => {
    const publicProduct = getProduct("lounge-cot-beige");
    const preview = previewOne("lounge-cot-beige");
    assert.equal(publicProduct?.price, 109);
    assert.equal(preview?.price, 138.99);
  });

  it("removes the thin items and blocks ingestibles", () => {
    assert.equal(isPreviewRemoved("frog-dispenser"), true);
    assert.equal(previewOne("frog-dispenser"), null);
    const chew = previewOne("joint-muscle-chew");
    assert.equal(chew?.stock, "coming_soon");
    assert.equal(canPurchase(chew!), false);
    assert.equal(chew?.name.includes("Joint"), false);
  });

  it("replaces the lick mat and keeps it featured", () => {
    const bowl = previewOne("slow-meal-mat");
    assert.equal(bowl?.name, "3-in-1 Travel Bowl");
    assert.equal(bowl?.price, 18.99);
    assert.equal(bowl?.featured, true);
    assert.equal(bowl?.image, "/products/preview/slow-meal-mat.jpg");
  });

  it("renames the snowman listing to the hoodie that ships", () => {
    const hoodie = previewOne("snowman-hoodie");
    assert.equal(hoodie?.name, "LED Halloween Hoodie");
    assert.equal(hoodie?.price, 38.99);
  });
});
