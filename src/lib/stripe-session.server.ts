import { getRequest } from "@tanstack/react-start/server";
import { getProduct } from "./catalog";
import type { CheckoutLine } from "./checkout";
import { env } from "./env.server";
import { dollarsToCents, shippingOptions } from "./shipping";
import { flattenStripeParams } from "./stripe-form";

type StripeSession = {
  id?: string;
  url?: string | null;
  livemode?: boolean;
  error?: { message?: string };
};

function requestOrigin(): string {
  const request = getRequest();
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || request.headers.get("host")?.split(",")[0]?.trim() || "127.0.0.1:8080";
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto =
    forwardedProto || (host.startsWith("127.") || host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

function stripeSecret(): string {
  const secret = env("STRIPE_SECRET_KEY");
  if (!secret) {
    throw new Error(
      "Stripe secret is not on this server yet. In Stripe Dashboard open Developers → API keys, copy the Secret key (sk_test_… for now), and send it in this chat so checkout can run. Do not paste a publishable pk_ key.",
    );
  }
  return secret;
}

async function postCheckout(payload: Record<string, unknown>): Promise<StripeSession> {
  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecret()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: flattenStripeParams(payload),
  });
  return (await response.json()) as StripeSession;
}

function checkoutPayload(lines: CheckoutLine[], origin: string, withTax: boolean) {
  const items = lines
    .map((line) => {
      const product = getProduct(line.slug);
      if (!product || line.quantity < 1) return null;
      return { product, quantity: Math.min(9, Math.floor(line.quantity)) };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (items.length === 0) {
    throw new Error("Cart is empty.");
  }

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const skus = items.map((item) => `${item.product.sku}×${item.quantity}`).join(", ");

  return {
    mode: "payment",
    submit_type: "pay",
    success_url: `${origin}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/shop`,
    customer_creation: "always",
    billing_address_collection: "required",
    phone_number_collection: { enabled: true },
    name_collection: { individual: { enabled: true } },
    shipping_address_collection: { allowed_countries: ["US"] },
    invoice_creation: {
      enabled: true,
      invoice_data: {
        description: `Happy Bowl Co. — ${skus}`,
        footer:
          "A copy of this invoice is emailed to you. Happy Bowl Co. also receives the paid order, tax, and shipping in Stripe.",
      },
    },
    payment_intent_data: {
      description: `Happy Bowl Co. — ${skus}`,
      metadata: { skus },
    },
    custom_text: {
      shipping_address: {
        message:
          "We ship inside the US. Standard is 5–8 business days; expedited is 2–3. State sales tax is calculated from this address and shown before you pay.",
      },
    },
    metadata: { skus },
    automatic_tax: withTax ? { enabled: true } : undefined,
    shipping_options: shippingOptions(subtotal).map((option) => ({
      shipping_rate_data: {
        type: "fixed_amount",
        display_name: option.name,
        tax_behavior: "exclusive",
        fixed_amount: { amount: dollarsToCents(option.amount), currency: "usd" },
        delivery_estimate: {
          minimum: { unit: "business_day", value: option.minDays },
          maximum: { unit: "business_day", value: option.maxDays },
        },
      },
    })),
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: dollarsToCents(item.product.price),
        tax_behavior: "exclusive",
        product_data: {
          name: item.product.name,
          description: `${item.product.sku} — ${item.product.tagline}`,
          images: [`${origin}${item.product.image}`],
          metadata: { sku: item.product.sku, slug: item.product.slug },
        },
      },
    })),
  };
}

export async function createStripeCheckoutUrl(
  lines: CheckoutLine[],
): Promise<{ url: string; livemode: boolean }> {
  const origin = requestOrigin();
  let session = await postCheckout(checkoutPayload(lines, origin, true));
  const taxBlocked =
    session.error?.message?.toLowerCase().includes("automatic tax") ||
    session.error?.message?.toLowerCase().includes("head office");
  if (taxBlocked) {
    session = await postCheckout(checkoutPayload(lines, origin, false));
  }
  if (!session.url) {
    throw new Error(session.error?.message || "Stripe did not return a checkout URL.");
  }
  return { url: session.url, livemode: Boolean(session.livemode) };
}
