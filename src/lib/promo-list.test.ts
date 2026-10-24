import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { cleanPromoEmail } from "./promo-list.ts";

describe("cleanPromoEmail", () => {
  it("keeps a normal address", () => {
    assert.equal(cleanPromoEmail("  Jane@Example.com "), "jane@example.com");
  });

  it("drops junk", () => {
    assert.equal(cleanPromoEmail("not-an-email"), null);
    assert.equal(cleanPromoEmail(""), null);
    assert.equal(cleanPromoEmail("a@b.c"), null);
  });
});
