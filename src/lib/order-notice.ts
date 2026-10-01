type Address = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

export type PaidOrder = {
  sessionId: string;
  livemode: boolean;
  amountCents: number;
  currency: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  addressLines: string[];
  items: string[];
  shippingLabel?: string;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : null;
}

function text(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const cleaned = value.replace(/[\r\n]+/g, " ").trim();
  return cleaned || undefined;
}

function addressLines(address: Address | null, name?: string): string[] {
  if (!address && !name) return [];
  const cityLine = [address?.city, address?.state, address?.postal_code]
    .map((part) => text(part))
    .filter(Boolean)
    .join(", ");
  return [name, text(address?.line1), text(address?.line2), cityLine || undefined, text(address?.country)].filter(
    (line): line is string => Boolean(line),
  );
}

export function money(cents: number, currency: string): string {
  const code = currency.toUpperCase();
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: code }).format(cents / 100);
  } catch {
    return `${(cents / 100).toFixed(2)} ${code}`;
  }
}

export function paidOrderFromSession(
  session: Record<string, unknown>,
  lineItems: string[] = [],
): PaidOrder | null {
  if (session.payment_status !== "paid") return null;
  const sessionId = text(session.id);
  if (!sessionId) return null;
  const customer = asRecord(session.customer_details);
  const shipping = asRecord(session.shipping_details);
  const shippingAddress = asRecord(shipping?.address) as Address | null;
  const customerAddress = asRecord(customer?.address) as Address | null;
  const metadata = asRecord(session.metadata);
  const skuLine = text(metadata?.skus);
  const items = lineItems.length > 0 ? lineItems : skuLine ? [skuLine] : [];
  const shippingCost = asRecord(session.shipping_cost);
  const shippingAmount =
    typeof shippingCost?.amount_total === "number" ? money(shippingCost.amount_total, text(session.currency) || "usd") : undefined;

  return {
    sessionId,
    livemode: session.livemode === true,
    amountCents: typeof session.amount_total === "number" ? session.amount_total : 0,
    currency: text(session.currency) || "usd",
    customerName: text(customer?.name) || text(shipping?.name),
    customerEmail: text(customer?.email) || text(session.customer_email),
    customerPhone: text(customer?.phone),
    addressLines: addressLines(shippingAddress ?? customerAddress, text(shipping?.name)),
    items,
    shippingLabel: shippingAmount ? `Shipping ${shippingAmount}` : undefined,
  };
}

export function lineItemsFromStripe(payload: unknown): string[] {
  const record = asRecord(payload);
  const data = Array.isArray(record?.data) ? record.data : [];
  return data
    .map((item) => {
      const row = asRecord(item);
      if (!row) return "";
      const description = text(row.description);
      const quantity = typeof row.quantity === "number" ? row.quantity : 1;
      const currency = text(row.currency) || "usd";
      const amount = typeof row.amount_total === "number" ? money(row.amount_total, currency) : undefined;
      if (!description) return "";
      return amount ? `${description} × ${quantity} (${amount})` : `${description} × ${quantity}`;
    })
    .filter(Boolean);
}

export function formatPaidOrder(order: PaidOrder): { subject: string; text: string } {
  const amount = money(order.amountCents, order.currency);
  const who = order.customerName || order.customerEmail || "customer";
  const subject = `Paid order ${amount} - ${who}`;
  const lines = [
    "Happy Bowl Co. received a paid checkout.",
    "",
    `Mode: ${order.livemode ? "live" : "test"}`,
    `Amount: ${amount}`,
    `Stripe session: ${order.sessionId}`,
    order.customerName ? `Customer: ${order.customerName}` : "",
    order.customerEmail ? `Email: ${order.customerEmail}` : "",
    order.customerPhone ? `Phone: ${order.customerPhone}` : "",
    order.addressLines.length ? `Ship to:\n${order.addressLines.join("\n")}` : "",
    order.items.length ? `Items:\n${order.items.map((item) => `- ${item}`).join("\n")}` : "",
    order.shippingLabel || "",
    "",
    "Reply from info@happybowlpets.com if the customer wrote with a question.",
  ].filter((line) => line !== "");
  return { subject, text: lines.join("\n") };
}
