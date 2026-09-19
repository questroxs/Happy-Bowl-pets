import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/catalog";
import { useShopStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export function WaitlistSheet() {
  const open = useShopStore((s) => s.sheetOpen);
  const setSheetOpen = useShopStore((s) => s.setSheetOpen);
  const saved = useShopStore((s) => s.saved);
  const notified = useShopStore((s) => s.notified);
  const toggleSaved = useShopStore((s) => s.toggleSaved);
  const openNotify = useShopStore((s) => s.openNotify);
  const items = PRODUCTS.filter((product) => saved.includes(product.slug));

  return (
    <Sheet open={open} onOpenChange={setSheetOpen}>
      <SheetContent className="px-5 pt-6 pb-8">
        <SheetTitle>Saved for later</SheetTitle>
        <SheetDescription className="mt-1">
          Pieces you want first. If Shopify is connected, add in-stock items to the cart instead.
        </SheetDescription>
        <div className="mt-6 flex flex-1 flex-col gap-3 overflow-y-auto pr-1">
          {items.length === 0 ? (
            <p className="rounded-lg bg-sand px-4 py-6 text-sm text-muted">
              Nothing saved yet. Browse the catalog and tap the bookmark on anything you want first.
            </p>
          ) : (
            items.map((product) => (
              <div key={product.slug} className="flex gap-3 rounded-lg bg-sand p-2">
                <img
                  src={product.image}
                  alt=""
                  className="product-photo size-16 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    className="font-medium text-ink no-underline"
                    onClick={() => setSheetOpen(false)}
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-sage-dark">{formatPrice(product.price)}</p>
                  <div className="mt-1 flex gap-2">
                    {notified.includes(product.slug) ? (
                      <span className="text-xs font-medium text-sage-dark">On the list</span>
                    ) : (
                      <button
                        type="button"
                        className="text-xs font-medium text-sage-dark underline-offset-2 hover:underline"
                        onClick={() => {
                          setSheetOpen(false);
                          openNotify(product.slug);
                        }}
                      >
                        Notify me
                      </button>
                    )}
                    <button
                      type="button"
                      className="text-xs font-medium text-muted underline-offset-2 hover:underline"
                      onClick={() => toggleSaved(product.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Button asChild className="mt-4" variant="outline">
          <Link to="/shop" search={{}} onClick={() => setSheetOpen(false)}>
            Browse catalog
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
