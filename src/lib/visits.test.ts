import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { nextTotal, sumNewCounts } from "./visits.ts";

describe("visit counter", () => {
  it("starts at 50 and adds one per visit", () => {
    assert.equal(nextTotal(null, false), 50);
    assert.equal(nextTotal(null, true), 51);
    assert.equal(nextTotal(50, true), 51);
    assert.equal(nextTotal(51, false), 51);
    assert.equal(nextTotal(3, true), 51);
  });

  it("adds every saved total and never lowers one", () => {
    assert.equal(nextTotal(170, false), 170);
    assert.equal(nextTotal(170, true), 171);
    assert.equal(nextTotal(140, true), 141);
    assert.equal(sumNewCounts(173, [140]), 313);
    assert.equal(sumNewCounts(173, [140, 50]), 313);
    assert.equal(sumNewCounts(313, []), 313);
    assert.equal(sumNewCounts(140, []), 140);
  });
});