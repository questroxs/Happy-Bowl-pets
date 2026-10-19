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
      { slug: "dog-water-bottle-food-container", quantity: 40 },
      { slug: "", quantity: 1 },
      { slug: "frog-dispenser", quantity: 0 },
    ]);
    assert.deepEqual(lines, [{ slug: "dog-water-bottle-food-container", quantity: 9 }]);
  });

  it("keeps a costume size and drops a size that is not offered", () => {
    const lines = parseCheckoutLines([
      { slug: "creepy-webs", quantity: 1, size: "xl" },
      { slug: "quiet-stainless-2l", quantity: 1, size: "xxl" },
    ]);
    assert.deepEqual(lines, [
      { slug: "creepy-webs", quantity: 1, size: "XL" },
      { slug: "quiet-stainless-2l", quantity: 1 },
    ]);
  });

  it("rejects an empty cart", () => {
    assert.throws(() => parseCheckoutLines({ lines: [] }), /empty/);
  });
});
