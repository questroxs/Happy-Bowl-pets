import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { customerCopy } from "./customer-copy.ts";
import { isSupplierHost } from "./public-host.ts";

describe("public host", () => {
  it("keeps supplier notes only on the Vercel reference host", () => {
    assert.equal(isSupplierHost("happybowlpets.vercel.app"), true);
    assert.equal(isSupplierHost("HappyBowlPets.vercel.app:443"), true);
    assert.equal(isSupplierHost("www.happybowlpets.com"), false);
    assert.equal(isSupplierHost("happybowlpets.com"), false);
    assert.equal(isSupplierHost("happybowlpets-git-main.vercel.app"), false);
    assert.equal(isSupplierHost(null), false);
  });
});

describe("customer copy", () => {
  it("turns warehouse sentences into shop sentences", () => {
    assert.equal(
      customerCopy("The warehouse ships the VEVOR elevated cot in XL gray."),
      "We ship the VEVOR elevated cot in XL gray.",
    );
    assert.equal(customerCopy("Egg-crate foam sofa bed (Doba D01027HYFBG)"), "Egg-crate foam sofa bed");
    assert.equal(customerCopy("Large dogs; US warehouse"), "Large dogs; ships from the US");
    assert.equal(
      customerCopy("US warehouse. Doba example: up to $28.13 per sale (35% margin)"),
      "Ships from the US.",
    );
    assert.equal(
      customerCopy(
        "The photo still shows a white cord. Doba example: up to $72.36 per sale (37% margin).",
      ),
      "The photo still shows a white cord.",
    );
    assert.equal(
      customerCopy("Memory-foam dog bed. The photo is the warehouse listing."),
      "Memory-foam dog bed.",
    );
  });
});
