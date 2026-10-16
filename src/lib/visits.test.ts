import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { nextTotal } from "./visits.ts";

describe("visit counter", () => {
  it("starts at 50 and adds one per visit", () => {
    assert.equal(nextTotal(null, false), 50);
    assert.equal(nextTotal(null, true), 51);
    assert.equal(nextTotal(50, true), 51);
    assert.equal(nextTotal(51, false), 51);
    assert.equal(nextTotal(3, true), 51);
  });
});
