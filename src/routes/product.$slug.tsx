import { createFileRoute, Link, Navigate, redirect } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, ExternalLink, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { speciesLabel } from "@/lib/catalog";
import { canPurchase, isPreviewRemoved, previewOne, TRAVEL_BOWL_SLUG } from "@/lib/catalog-preview";
import { presentProduct } from "@/lib/customer-copy";
import { useShopifyStore } from "@/lib/shopify-store";
import { useShopStore } from "@/lib/store";
import { useStockOverrides } from "@/lib/stock-overrides";
import { useSupplierNotes } from "@/lib/supplier-notes";
import { formatMoney } from "@/lib/utils";
import {
  breadcrumbLd,
  categoryLabelFor,
  categoryPathFor,
  pageHead,
  productLd,
  productMetaDescription,
  productTitle,
} from "@/lib/seo";

export const Route = createFileRoute("/product/$slug")({
  beforeLoad: ({ params }) => {
    if (params.slug === "slow-meal-mat") {
      throw redirect({
        to: "/product/$slug",
        params: { slug: TRAVEL_BOWL_SLUG },
        statusCode: 301,
      });
    }
  },
  loader: ({ params }) => {
    const product = isPreviewRemoved(params.slug) ? null : previewOne(params.slug);
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) {
      return pageHead({
        title: "Product | Happy Bowl Pets Co.",
        description: "This piece is not in the Happy Bowl Pets Co. catalog.",
        path: "/shop",
      });
    }
    const shown = presentProduct(product, false);
    return pageHead({
      title: productTitle(shown),
      description: productMetaDescription(shown),
      path: `/product/${shown.slug}`,
      image: shown.image,
      type: "product",
      jsonLd: [
        productLd(shown),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: categoryLabelFor(shown), path: categoryPathFor(shown) },
          { name: shown.name, path: `/product/${shown.slug}` },
        ]),
      ],
    });
  },
  component: ProductPage,
});

function CategoryCrumb({ product }: { product: NonNullable<ReturnType<typeof previewOne>> }) {
  const className = "text-sage-dark no-underline";
  const label = categoryLabelFor(product);
  if (product.category === "hydration") return <Link to="/fountains" className={className}>{label}</Link>;
  if (product.category === "filters") return <Link to="/fountain-filters" className={className}>{label}</Link>;
  if (product.category === "play" || product.slug === "puzzle-feeder") {
    return <Link to="/enrichment-toys" className={className}>{label}</Link>;
  }
  if (product.category === "mealtime") return <Link to="/bowls" className={className}>{label}</Link>;
  return (
    <Link to="/shop" search={{ cat: product.category }} className={className}>
      {label}
    </Link>
  );
}

function ProductPage() {
  const { slug } = Route.useParams();
  const supplierNotes = useSupplierNotes();
  const overrides = useStockOverrides();
  const savedSlugs = useShopStore((s) => s.saved);
  const toggleSaved = useShopStore((s) => s.toggleSaved);
  const addToCart = useShopifyStore((s) => s.addToCart);
  const [size, setSize] = useState("M");
  if (isPreviewRemoved(slug)) {
    return <Navigate to="/shop" search={{}} />;
  }
  const raw = previewOne(slug, supplierNotes ? overrides : {});
  const product = raw ? presentProduct(raw, supplierNotes) : undefined;

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
  const related = product.related
    .map((item) => previewOne(item, supplierNotes ? overrides : {}))
    .filter((item) => item != null);
  const buyable = canPurchase(product);

  return (
    <main className="mx-auto w-[min(100%-2rem,70rem)] py-10">
      <p className="text-sm text-muted">
        <Link to="/" className="text-sage-dark no-underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <CategoryCrumb product={product} />
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
            {product.stock === "coming_soon" ? <Badge>Coming soon</Badge> : null}
            {product.stock === "out_of_stock" ? <Badge>Out of stock</Badge> : null}
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight font-medium tracking-tight">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{product.tagline}</p>
          {buyable ? (
            <p className="mt-5 text-2xl font-medium text-sage-dark">
              {formatMoney(product.price)}
            </p>
          ) : (
            <p className="mt-5 text-lg text-muted">
              {product.stock === "coming_soon" ? "Coming soon" : "Out of stock"}
            </p>
          )}
          {supplierNotes ? (
            <p className="mt-1 text-sm text-muted">
              Price before tax. US shipping from $6.95 (free at $75). State sales tax is calculated
              from your shipping address on Stripe, before you pay.
            </p>
          ) : null}
          <p className="mt-5 text-base">{product.description}</p>
          {supplierNotes ? (
            <p className="mt-3 rounded-lg bg-sage-soft px-3 py-2 text-sm text-ink">
              The photo is the warehouse item. What you see is what we send.
            </p>
          ) : null}
          {supplierNotes && product.warehouseUrl ? (
            <a
              href={product.warehouseUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sage-dark"
            >
              Doba warehouse
              <ExternalLink className="size-3.5" />
            </a>
          ) : null}
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
          <div className="mt-8 flex flex-wrap items-end gap-3">
            {product.sizes?.length ? (
              <label className="block min-w-40 text-sm font-medium text-ink">
                Size
                <select
                  value={product.sizes.includes(size) ? size : product.sizes[0]}
                  onChange={(event) => setSize(event.target.value)}
                  className="mt-2 block w-full rounded-lg border border-line bg-paper px-3 py-3 text-base text-ink"
                >
                  {product.sizes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
            {buyable ? (
              <Button
                size="lg"
                onClick={() =>
                  addToCart(product.slug, product.sizes?.includes(size) ? size : product.sizes?.[0])
                }
              >
                <ShoppingBag className="size-4" />
                Add to cart
              </Button>
            ) : null}
            <Button size="lg" variant="outline" onClick={() => toggleSaved(product.slug)}>
              {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
              {saved ? "Saved" : "Save for later"}
            </Button>
          </div>
          {supplierNotes ? <p className="mt-4 font-mono text-xs text-muted">{product.sku}</p> : null}
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
