import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { highestVisit, nextTotal } from "./visits.ts";

describe("visit counter", () => {
  it("starts at 50 and adds one per visit", () => {
    assert.equal(nextTotal(null, false), 50);
    assert.equal(nextTotal(null, true), 51);
    assert.equal(nextTotal(50, true), 51);
    assert.equal(nextTotal(51, false), 51);
    assert.equal(nextTotal(3, true), 51);
  });

  it("never lowers a saved total", () => {
    assert.equal(nextTotal(170, false), 170);
    assert.equal(nextTotal(170, true), 171);
    assert.equal(nextTotal(140, true), 141);
    assert.equal(highestVisit([140, null, 173]), 173);
    assert.equal(highestVisit([50]), 50);
  });
});