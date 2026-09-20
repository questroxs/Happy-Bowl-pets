export const FREE_SHIPPING_AT = 75;
export const STANDARD_SHIPPING = 6.95;
export const EXPEDITED_SHIPPING = 14.95;

export type ShippingOption = {
  id: "standard" | "expedited";
  name: string;
  amount: number;
  minDays: number;
  maxDays: number;
};

export function dollarsToCents(amount: number) {
  return Math.round(amount * 100);
}

export function remainingToFreeShipping(subtotal: number) {
  return Math.max(0, Math.round((FREE_SHIPPING_AT - subtotal) * 100) / 100);
}

export function shippingOptions(subtotal: number): ShippingOption[] {
  const standardAmount = subtotal >= FREE_SHIPPING_AT ? 0 : STANDARD_SHIPPING;
  return [
    {
      id: "standard",
      name:
        standardAmount === 0
          ? "Standard — free (5–8 business days)"
          : "Standard (5–8 business days)",
      amount: standardAmount,
      minDays: 5,
      maxDays: 8,
    },
    {
      id: "expedited",
      name: "Expedited (2–3 business days)",
      amount: EXPEDITED_SHIPPING,
      minDays: 2,
      maxDays: 3,
    },
  ];
}
