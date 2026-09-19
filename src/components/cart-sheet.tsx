import { Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { getProduct } from "@/lib/catalog";
import { cartCount, useShopifyStore } from "@/lib/shopify-store";
import { formatPrice } from "@/lib/utils";

export function CartSheet() {
  const open = useShopifyStore((state) => state.cartOpen);
  const setCartOpen = useShopifyStore((state) => state.setCartOpen);
  const cart = useShopifyStore((state) => state.cart);
  const matches = useShopifyStore((state) => state.matches);
  const setQuantity = useShopifyStore((state) => state.setQuantity);
  const removeFromCart = useShopifyStore((state) => state.removeFromCart);
  const checkout = useShopifyStore((state) => state.checkout);
  const checkingOut = useShopifyStore((state) => state.checkingOut);
  const shopName = useShopifyStore((state) => state.shopName);

  const items = cart
    .map((line) => {
      const product = getProduct(line.slug);
      if (!product) return null;
      return { ...line, product, match: matches[line.slug] };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={setCartOpen}>
      <SheetContent className="px-5 pt-6 pb-8">
        <SheetTitle>Cart</SheetTitle>
        <SheetDescription className="mt-1">
          {shopName
            ? `Pay on Shopify — ${shopName}. This site only builds the cart.`
            : "Pay on Shopify when the store is connected."}
        </SheetDescription>
        <div className="mt-6 flex flex-1 flex-col gap-3 overflow-y-auto pr-1">
          {items.length === 0 ? (
            <p className="rounded-lg bg-sand px-4 py-6 text-sm text-muted">
              Cart is empty. Add a piece that is live in Shopify.
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
                  <p className="text-sm text-sage-dark">
                    {formatPrice(item.product.price)}
                    {item.match ? "" : " · not matched"}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="grid size-8 place-items-center rounded-full bg-paper text-ink"
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      type="button"
                      className="grid size-8 place-items-center rounded-full bg-paper text-ink"
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
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-muted">{cartCount(cart)} in cart</span>
            <span className="font-medium">{formatPrice(total)}</span>
          </div>
          <Button
            className="w-full"
            disabled={items.length === 0 || checkingOut}
            onClick={() => {
              void checkout().catch((error: unknown) => {
                toast.error(error instanceof Error ? error.message : "Checkout failed.");
              });
            }}
          >
            {checkingOut ? "Opening Shopify…" : "Checkout on Shopify"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
