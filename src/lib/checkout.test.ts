import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseCheckoutLines } from "./checkout.ts";

describe("parseCheckoutLines", () => {
  it("reads nested { lines } payloads from checkout", () => {
    const lines = parseCheckoutLines({
      lines: [
        { slug: "quiet-stainless-2l", quantity: 2 },
        { slug: "filter-8pack", quantity: 1 },
      ],
    });
    assert.equal(lines.length, 2);
    assert.equal(lines[0]?.quantity, 2);
  });

  it("caps quantity and drops junk rows", () => {
    const lines = parseCheckoutLines([
      { slug: "slow-meal-mat", quantity: 40 },
      { slug: "", quantity: 1 },
      { slug: "frog-dispenser", quantity: 0 },
    ]);
    assert.deepEqual(lines, [{ slug: "slow-meal-mat", quantity: 9 }]);
  });

  it("rejects an empty cart", () => {
    assert.throws(() => parseCheckoutLines({ lines: [] }), /empty/);
  });
});
