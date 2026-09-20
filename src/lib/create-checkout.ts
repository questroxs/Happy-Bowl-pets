import { createServerFn } from "@tanstack/react-start";
import { parseCheckoutLines, type CheckoutLine } from "./checkout";

export const createCheckoutSession = createServerFn({ method: "POST" })
  .validator((data: { lines: CheckoutLine[] }) => ({ lines: parseCheckoutLines(data) }))
  .handler(async ({ data }): Promise<{ url: string; livemode: boolean }> => {
    const { createStripeCheckoutUrl } = await import("./stripe-session.server.ts");
    return createStripeCheckoutUrl(data.lines);
  });
