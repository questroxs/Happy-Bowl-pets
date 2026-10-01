import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { stripeSignatureHeader, verifyStripeSignature } from "./stripe-signature.ts";

describe("verifyStripeSignature", () => {
  const payload = '{"id":"evt_test","type":"checkout.session.completed"}';
  const secret = "whsec_test_secret";

  it("accepts a header signed with the webhook secret", () => {
    const now = 1_700_000_000;
    const header = stripeSignatureHeader(payload, secret, now);
    assert.equal(verifyStripeSignature(payload, header, secret, now), true);
  });

  it("rejects a tampered body, a wrong secret, and a stale timestamp", () => {
    const now = 1_700_000_000;
    const header = stripeSignatureHeader(payload, secret, now);
    assert.equal(verifyStripeSignature(`${payload} `, header, secret, now), false);
    assert.equal(verifyStripeSignature(payload, header, "whsec_other", now), false);
    assert.equal(verifyStripeSignature(payload, header, secret, now + 301), false);
    assert.equal(verifyStripeSignature(payload, null, secret, now), false);
  });
});
