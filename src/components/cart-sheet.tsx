import { Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { getProduct } from "@/lib/catalog";
import { remainingToFreeShipping, shippingOptions } from "@/lib/shipping";
import { cartCount, cartSubtotal, useShopifyStore } from "@/lib/shopify-store";
import { formatMoney, formatPrice } from "@/lib/utils";

export function CartSheet() {
  const open = useShopifyStore((state) => state.cartOpen);
  const setCartOpen = useShopifyStore((state) => state.setCartOpen);
  const cart = useShopifyStore((state) => state.cart);
  const setQuantity = useShopifyStore((state) => state.setQuantity);
  const removeFromCart = useShopifyStore((state) => state.removeFromCart);
  const checkout = useShopifyStore((state) => state.checkout);
  const checkingOut = useShopifyStore((state) => state.checkingOut);

  const items = cart
    .map((line) => {
      const product = getProduct(line.slug);
      if (!product) return null;
      return { ...line, product };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const subtotal = cartSubtotal(cart);
  const [standard, expedited] = shippingOptions(subtotal);
  const remaining = remainingToFreeShipping(subtotal);

  return (
    <Sheet open={open} onOpenChange={setCartOpen}>
      <SheetContent className="px-5 pt-6 pb-8">
        <SheetTitle>Cart</SheetTitle>
        <SheetDescription className="mt-1">
          Pay on Stripe. US shipping and state tax are calculated from the address you enter — you
          and Happy Bowl Co. both get the receipt by email.
        </SheetDescription>
        <div className="mt-6 flex flex-1 flex-col gap-3 overflow-y-auto pr-1">
          {items.length === 0 ? (
            <p className="rounded-lg bg-sand px-4 py-6 text-sm text-muted">
              Cart is empty. Add a fountain, filter, or extra from the catalog.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.slug} className="flex gap-3 rounded-lg bg-sand p-2">
                <img
                  src={item.product.image}
                  alt=""
                  className="product-photo size-16 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <Link
                    to="/product/$slug"
                    params={{ slug: item.slug }}
                    className="font-medium text-ink no-underline"
                    onClick={() => setCartOpen(false)}
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-sage-dark">{formatPrice(item.product.price)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="grid size-11 place-items-center rounded-full bg-paper text-ink"
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      type="button"
                      className="grid size-11 place-items-center rounded-full bg-paper text-ink"
                      aria-label="Increase quantity"
                      onClick={() => setQuantity(item.slug, item.quantity + 1)}
                    >
                      <Plus className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-xs font-medium text-muted underline-offset-2 hover:underline"
                      onClick={() => removeFromCart(item.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 border-t border-line pt-4">
          <dl className="space-y-1.5 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-muted">{cartCount(cart)} in cart</dt>
              <dd className="font-medium">{formatMoney(subtotal)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">{standard?.name ?? "Standard shipping"}</dt>
              <dd className="font-medium">
                {standard && standard.amount === 0 ? "Free" : formatMoney(standard?.amount ?? 0)}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">{expedited?.name ?? "Expedited shipping"}</dt>
              <dd className="text-muted">{formatMoney(expedited?.amount ?? 0)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">State sales tax</dt>
              <dd className="text-muted">At checkout</dd>
            </div>
          </dl>
          {remaining > 0 ? (
            <p className="mt-3 text-xs text-sage-dark">
              Add {formatMoney(remaining)} more for free standard shipping.
            </p>
          ) : items.length > 0 ? (
            <p className="mt-3 text-xs text-sage-dark">Standard shipping is free on this cart.</p>
          ) : null}
          <p className="mt-2 text-xs text-muted">
            Choose Standard or Expedited on Stripe. Tax is calculated from your US shipping address
            and shown before you pay. We receive the same order, tax, and shipping in Stripe.
          </p>
          <Button
            className="mt-4 w-full"
            disabled={items.length === 0 || checkingOut}
            onClick={() => {
              void checkout().catch((error: unknown) => {
                toast.error(error instanceof Error ? error.message : "Checkout failed.");
              });
            }}
          >
            {checkingOut ? "Opening Stripe…" : "Checkout with Stripe"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
