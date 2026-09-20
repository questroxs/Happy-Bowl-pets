import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS, searchProducts, type CategoryId, type Species } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type ShopSearch = {
  cat?: string;
  q?: string;
  species?: string;
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    cat: typeof search.cat === "string" ? search.cat : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
    species: typeof search.species === "string" ? search.species : undefined,
  }),
  component: ShopPage,
});

function isCategory(value: string | undefined): value is CategoryId {
  return CATEGORIES.some((category) => category.id === value);
}

function ShopPage() {
  const { cat, q, species } = Route.useSearch();
  const category = isCategory(cat) ? cat : undefined;
  const speciesFilter: Species | undefined =
    species === "dogs" || species === "cats" ? species : undefined;
  const [query, setQuery] = useState(q ?? "");

  useEffect(() => {
    setQuery(q ?? "");
  }, [q]);

  const results = searchProducts(query, category, speciesFilter);
  const title = category
    ? (CATEGORIES.find((item) => item.id === category)?.label ?? "Shop")
    : "Catalog";

  return (
    <main className="mx-auto w-[min(100%-2rem,70rem)] py-10">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">Shop</p>
      <h1 className="mt-1 font-display text-4xl font-medium tracking-tight">{title}</h1>
      <p className="mt-2 max-w-xl text-muted">
        {PRODUCTS.length} pieces. Add any of them to the cart. Pay on Stripe — US shipping and
        state tax are calculated from your address before you pay.
      </p>

      <div className="mt-6 max-w-md">
        <Input
          value={query}
          name="q"
          placeholder="Search fountains, mats, chews…"
          aria-label="Search products"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Chip to="/shop" search={{ q: query || undefined, species }} active={!category}>
          All
        </Chip>
        {CATEGORIES.map((item) => (
          <Chip
            key={item.id}
            to="/shop"
            search={{ cat: item.id, q: query || undefined, species }}
            active={category === item.id}
          >
            {item.label}
          </Chip>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip to="/shop" search={{ cat, q: query || undefined }} active={!speciesFilter}>
          Dogs & cats
        </Chip>
        <Chip
          to="/shop"
          search={{ cat, q: query || undefined, species: "dogs" }}
          active={speciesFilter === "dogs"}
        >
          Dogs
        </Chip>
        <Chip
          to="/shop"
          search={{ cat, q: query || undefined, species: "cats" }}
          active={speciesFilter === "cats"}
        >
          Cats
        </Chip>
      </div>

      {results.length === 0 ? (
        <p className="mt-12 rounded-xl bg-paper px-5 py-10 text-center text-muted shadow-[var(--shadow-card)]">
          Nothing matches that filter. Try another aisle, or{" "}
          <Link to="/shop" search={{}} className="text-sage-dark">
            clear search
          </Link>
          .
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <ProductCard key={product.slug} product={product} featured={product.featured} />
          ))}
        </div>
      )}
    </main>
  );
}

function Chip({
  children,
  to,
  search,
  active,
}: {
  children: ReactNode;
  to: "/shop";
  search: ShopSearch;
  active: boolean;
}) {
  return (
    <Button asChild size="sm" variant={active ? "default" : "outline"}>
      <Link to={to} search={search} className={cn(!active && "bg-paper")}>
        {children}
      </Link>
    </Button>
  );
}
