import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, ExternalLink, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { getProduct, relatedProducts, speciesLabel } from "@/lib/catalog";
import { useShopifyStore } from "@/lib/shopify-store";
import { useShopStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const savedSlugs = useShopStore((s) => s.saved);
  const toggleSaved = useShopStore((s) => s.toggleSaved);
  const addToCart = useShopifyStore((s) => s.addToCart);

  if (!product) {
    return (
      <main className="mx-auto w-[min(100%-2rem,42rem)] py-20 text-center">
        <h1 className="font-display text-3xl font-medium">That piece isn’t in the catalog</h1>
        <p className="mt-2 text-muted">It may have been a staging SKU we didn’t bring forward.</p>
        <Button asChild className="mt-6">
          <Link to="/shop" search={{}}>
            Back to catalog
          </Link>
        </Button>
      </main>
    );
  }

  const saved = savedSlugs.includes(product.slug);
  const related = relatedProducts(product);

  return (
    <main className="mx-auto w-[min(100%-2rem,70rem)] py-10">
      <p className="text-sm text-muted">
        <Link to="/shop" search={{ cat: product.category }} className="text-sage-dark no-underline">
          {product.category[0].toUpperCase() + product.category.slice(1)}
        </Link>
        <span className="mx-2">/</span>
        {product.name}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-xl bg-cream">
          <img
            src={product.image}
            alt={product.name}
            className="product-photo w-full object-contain"
            width={960}
            height={720}
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>{speciesLabel(product.species)}</Badge>
            <Badge tone="sage">Warehouse photo</Badge>
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight font-medium tracking-tight">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{product.tagline}</p>
          <p className="mt-5 text-2xl font-medium text-sage-dark">{formatPrice(product.price)}</p>
          <p className="mt-1 text-sm text-muted">
            Price before tax. US shipping from $6.95 (free at $75). State sales tax is calculated
            from your shipping address on Stripe, before you pay.
          </p>
          <p className="mt-5 text-base">{product.description}</p>
          <p className="mt-3 rounded-lg bg-sage-soft px-3 py-2 text-sm text-ink">
            The photo is the warehouse item. What you see is what we send.
          </p>
          {product.category === "wellness" ||
          /cbd|hemp|calming/.test(product.slug) ? (
            <p className="mt-3 rounded-lg bg-sand px-3 py-2 text-sm text-muted">
              Not a substitute for veterinary care. These statements have not been evaluated by the
              FDA.
            </p>
          ) : null}
          <a
            href={product.warehouseUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sage-dark"
          >
            Warehouse listing
            <ExternalLink className="size-3.5" />
          </a>
          <ul className="mt-5 space-y-2 text-sm text-ink">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          {(product.capacity || product.material) && (
            <dl className="mt-6 grid grid-cols-2 gap-3 rounded-lg bg-paper px-4 py-3 text-sm">
              {product.capacity ? (
                <div>
                  <dt className="text-muted">Capacity</dt>
                  <dd className="font-medium">{product.capacity}</dd>
                </div>
              ) : null}
              {product.material ? (
                <div>
                  <dt className="text-muted">Material</dt>
                  <dd className="font-medium">{product.material}</dd>
                </div>
              ) : null}
            </dl>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => addToCart(product.slug)}>
              <ShoppingBag className="size-4" />
              Add to cart
            </Button>
            <Button size="lg" variant="outline" onClick={() => toggleSaved(product.slug)}>
              {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
              {saved ? "Saved" : "Save for later"}
            </Button>
          </div>
          <p className="mt-4 font-mono text-xs text-muted">{product.sku}</p>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-medium tracking-tight">Goes with</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
