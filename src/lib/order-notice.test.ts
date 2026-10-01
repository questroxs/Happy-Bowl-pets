import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { formatPaidOrder, lineItemsFromStripe, paidOrderFromSession } from "./order-notice.ts";

describe("paid order notice", () => {
  it("ignores a checkout that is not paid", () => {
    assert.equal(paidOrderFromSession({ id: "cs_test_123", payment_status: "unpaid" }), null);
  });

  it("writes the shop email from the paid session", () => {
    const order = paidOrderFromSession(
      {
        id: "cs_test_123",
        payment_status: "paid",
        livemode: false,
        amount_total: 4900,
        currency: "usd",
        customer_details: {
          name: "Jane\nDoe",
          email: "jane@example.com",
          phone: "555-0100",
          address: { line1: "1 Bowl St", city: "Austin", state: "TX", postal_code: "78701", country: "US" },
        },
        metadata: { skus: "FOUNTAIN×1" },
      },
      [],
    );
    assert.ok(order);
    const mail = formatPaidOrder(order);
    assert.equal(mail.subject, "Paid order $49.00 - Jane Doe");
    assert.match(mail.text, /Mode: test/);
    assert.match(mail.text, /jane@example.com/);
    assert.match(mail.text, /1 Bowl St/);
    assert.match(mail.text, /FOUNTAIN×1/);
    assert.doesNotMatch(mail.subject, /\n/);
  });

  it("prefers checkout line items over the sku summary", () => {
    const items = lineItemsFromStripe({
      data: [{ description: "Quiet fountain", quantity: 1, amount_total: 4900, currency: "usd" }],
    });
    const order = paidOrderFromSession(
      {
        id: "cs_test_456",
        payment_status: "paid",
        amount_total: 4900,
        currency: "usd",
        metadata: { skus: "fallback" },
      },
      items,
    );
    assert.equal(order?.items[0], "Quiet fountain × 1 ($49.00)");
  });
});
