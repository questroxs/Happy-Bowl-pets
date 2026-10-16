import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { productsInCategory, type SeoCategory } from "@/lib/seo";

export function SeoCategoryPage({ category }: { category: SeoCategory }) {
  const products = productsInCategory(category.id);
  return (
    <main className="mx-auto w-[min(100%-2rem,70rem)] py-10">
      <p className="text-sm text-muted">
        <Link to="/" className="text-sage-dark no-underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        {category.nav}
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">{category.h1}</h1>
      <div className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-ink/90">
        {category.copy.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
