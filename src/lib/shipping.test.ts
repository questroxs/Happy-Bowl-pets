import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  dollarsToCents,
  FREE_SHIPPING_AT,
  remainingToFreeShipping,
  shippingOptions,
} from "./shipping.ts";

describe("shippingOptions", () => {
  it("charges standard below the free threshold", () => {
    const [standard] = shippingOptions(52);
    assert.equal(standard.amount, 6.95);
    assert.equal(dollarsToCents(standard.amount), 695);
  });

  it("makes standard free at $75", () => {
    const [standard, expedited] = shippingOptions(FREE_SHIPPING_AT);
    assert.equal(standard.amount, 0);
    assert.equal(expedited.amount, 14.95);
  });

  it("reports how much is left for free shipping", () => {
    assert.equal(remainingToFreeShipping(52), 23);
    assert.equal(remainingToFreeShipping(75), 0);
  });
});
