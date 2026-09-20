import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { flattenStripeParams } from "./stripe-form.ts";

describe("flattenStripeParams", () => {
  it("encodes nested checkout fields the way Stripe expects", () => {
    const body = flattenStripeParams({
      mode: "payment",
      automatic_tax: { enabled: true },
      line_items: [{ quantity: 2, price_data: { currency: "usd", unit_amount: 3600 } }],
    });
    assert.equal(body.get("mode"), "payment");
    assert.equal(body.get("automatic_tax[enabled]"), "true");
    assert.equal(body.get("line_items[0][quantity]"), "2");
    assert.equal(body.get("line_items[0][price_data][unit_amount]"), "3600");
  });
});
