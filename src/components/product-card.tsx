import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/catalog";
import { speciesLabel } from "@/lib/catalog";
import { canPurchase, projectPreview } from "@/lib/catalog-preview";
import { presentProduct } from "@/lib/customer-copy";
import { useShopifyStore } from "@/lib/shopify-store";
import { useStockOverrides } from "@/lib/stock-overrides";
import { useSupplierNotes } from "@/lib/supplier-notes";
import { formatMoney, formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const addToCart = useShopifyStore((state) => state.addToCart);
  const supplierNotes = useSupplierNotes();
  const overrides = useStockOverrides();
  const projected = supplierNotes ? projectPreview(product, overrides) : product;
  if (!projected) return null;
  const shown = presentProduct(projected, supplierNotes);
  const buyable = !supplierNotes || canPurchase(projected);
  const price = supplierNotes ? formatMoney(projected.price) : formatPrice(projected.price);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="flex h-full flex-col text-inherit no-underline"
      >
        <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-cream">
          <img
            src={projected.image}
            alt={shown.name}
            className="product-photo h-full w-full object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            width={640}
            height={480}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <Badge tone={featured && buyable ? "sage" : "muted"}>
            {projected.stock === "coming_soon"
              ? "Coming soon"
              : projected.stock === "out_of_stock"
                ? "Out of stock"
                : featured
                  ? "Featured"
                  : speciesLabel(product.species)}
          </Badge>
          <h3 className="font-display text-lg leading-snug font-medium tracking-tight">
            {shown.name}
          </h3>
          <p className="text-sm text-muted">{shown.tagline}</p>
          <div className="mt-auto flex items-end justify-between pt-3">
            {buyable ? (
              <p className="font-medium text-sage-dark">{price}</p>
            ) : (
              <p className="text-sm text-muted">
                {projected.stock === "coming_soon" ? "Coming soon" : "Out of stock"}
              </p>
            )}
            <span className="text-sm font-medium text-sage-dark">View details</span>
          </div>
        </div>
      </Link>
      {supplierNotes && projected.warehouseUrl ? (
        <a
          href={projected.warehouseUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 pt-1 text-xs font-medium text-sage-dark"
        >
          Doba warehouse
        </a>
      ) : null}
      {buyable ? (
        <div className="px-4 pb-4">
          {projected.sizes?.length ? (
            <Button asChild className="w-full" variant="secondary">
              <Link to="/product/$slug" params={{ slug: product.slug }}>
                Choose a size
              </Link>
            </Button>
          ) : (
            <Button className="w-full" variant="secondary" onClick={() => addToCart(product.slug)}>
              Add to cart
            </Button>
          )}
        </div>
      ) : null}
    </article>
  );
}