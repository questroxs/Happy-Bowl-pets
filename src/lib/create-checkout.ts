import { createServerFn } from "@tanstack/react-start";
import { parseCheckoutLines, type CheckoutLine } from "./checkout";
import { sanitizeStockOverrides } from "./stock-overrides";

export const createCheckoutSession = createServerFn({ method: "POST" })
  .validator((data: { lines: CheckoutLine[]; stock?: unknown }) => ({
    lines: parseCheckoutLines(data),
    stock: sanitizeStockOverrides(data.stock),
  }))
  .handler(async ({ data }): Promise<{ url: string; livemode: boolean }> => {
    const { createStripeCheckoutUrl } = await import("./stripe-session.server.ts");
    return createStripeCheckoutUrl(data.lines, data.stock);
  });
