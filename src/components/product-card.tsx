import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/catalog";
import { speciesLabel } from "@/lib/catalog";
import { useShopifyStore } from "@/lib/shopify-store";
import { formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const addToCart = useShopifyStore((state) => state.addToCart);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="flex h-full flex-col text-inherit no-underline"
      >
        <div className="aspect-4/3 overflow-hidden bg-sand-deep">
          <img
            src={product.image}
            alt={product.name}
            className="product-photo h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            width={640}
            height={480}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <Badge tone={featured ? "sage" : "muted"}>
            {featured ? "Featured" : speciesLabel(product.species)}
          </Badge>
          <h3 className="font-display text-lg leading-snug font-medium tracking-tight">
            {product.name}
          </h3>
          <p className="text-sm text-muted">{product.tagline}</p>
          <div className="mt-auto flex items-end justify-between pt-3">
            <p className="font-medium text-sage-dark">{formatPrice(product.price)}</p>
            <span className="text-sm font-medium text-sage-dark">View details</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button className="w-full" variant="secondary" onClick={() => addToCart(product.slug)}>
          Add to cart
        </Button>
      </div>
    </article>
  );
}
