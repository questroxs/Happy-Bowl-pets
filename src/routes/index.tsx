import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Leaf, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { exploringProducts, featuredProducts } from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

const COLLECTIONS = [
  {
    title: "Hydration",
    copy: "Quiet stainless fountains and the filters that keep them tasting like water.",
    cat: "hydration" as const,
    image: "/products/fountain-2l.jpg",
  },
  {
    title: "Mealtime",
    copy: "Lick mats and puzzle feeders for homes that want dinner to take a minute.",
    cat: "mealtime" as const,
    image: "/products/lick-mat.jpg",
  },
  {
    title: "Play",
    copy: "Chews, dispensers, and a launcher — extras, never the hero of the shop.",
    cat: "play" as const,
    image: "/products/frog.jpg",
  },
  {
    title: "On the go",
    copy: "Collapsible bowls and a bottle that clip onto a walk.",
    cat: "accessories" as const,
    image: "/products/travel.jpg",
  },
];

function Home() {
  const featured = featuredProducts();
  const exploring = exploringProducts();

  return (
    <main>
      <p className="border-b border-sage/40 bg-cream px-4 py-3 text-center text-sm text-ink">
        Checkout is open. US shipping from $6.95 (free at $75). State tax is calculated on Stripe
        from your address — you and we both get the receipt.
      </p>

      <section className="relative isolate min-h-[28rem] overflow-hidden md:min-h-[36rem]">
        <img
          src="/products/hero.jpg"
          alt="A cat and a golden retriever sharing a quiet stainless fountain in a sunlit kitchen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex min-h-[28rem] w-[min(100%-2rem,70rem)] flex-col justify-end pb-10 md:min-h-[36rem] md:pb-14">
          <p className="text-sm font-semibold tracking-widest text-terra-soft uppercase">
            For dogs and cats
          </p>
          <h1 className="mt-2 max-w-xl font-display text-4xl leading-tight font-medium tracking-tight text-paper md:text-5xl">
            Fresher water. Calmer days.
          </h1>
          <p className="mt-3 max-w-lg text-base text-paper/90">
            Quiet stainless fountains, mealtime enrichment, and a few thoughtful extras. Nothing
            edible, no CBD, no shampoo — just the daily kit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/shop" search={{ cat: "hydration" }}>
                Explore hydration
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-paper text-paper hover:bg-paper/15">
              <Link to="/shop" search={{}}>
                Shop catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,70rem)] py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-paper px-5 py-6 shadow-[var(--shadow-card)]">
            <Droplets className="size-5 text-sage-dark" />
            <h2 className="mt-3 font-display text-xl font-medium">Hydration first</h2>
            <p className="mt-1 text-sm text-muted">
              Stainless, quiet, and sized for real kitchens. Filters as a restock, not an afterthought.
            </p>
          </div>
          <div className="rounded-xl bg-paper px-5 py-6 shadow-[var(--shadow-card)]">
            <Leaf className="size-5 text-sage-dark" />
            <h2 className="mt-3 font-display text-xl font-medium">Calmer bowls</h2>
            <p className="mt-1 text-sm text-muted">
              Lick mats and slow feeders for the meal that should not be over in twelve seconds.
            </p>
          </div>
          <div className="rounded-xl bg-paper px-5 py-6 shadow-[var(--shadow-card)]">
            <PawPrint className="size-5 text-sage-dark" />
            <h2 className="mt-3 font-display text-xl font-medium">Dogs and cats only</h2>
            <p className="mt-1 text-sm text-muted">
              No livestock, no exotics, no edible catalog. If it is not for a house pet, it is not here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,70rem)] pb-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight">Featured</h2>
            <p className="mt-1 text-muted">The three pieces we would start a home with.</p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/shop" search={{}}>
              See all
            </Link>
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} featured />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,70rem)] py-14">
        <h2 className="font-display text-2xl font-medium tracking-tight">Shop by ritual</h2>
        <p className="mt-1 mb-6 text-muted">Four short aisles. Treats, food, and care bottles stay off this floor.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.cat}
              to="/shop"
              search={{ cat: collection.cat }}
              className="group relative min-h-52 overflow-hidden rounded-xl no-underline"
            >
              <img
                src={collection.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-ink/45" />
              <div className="relative flex h-full flex-col justify-end p-5 text-paper">
                <h3 className="font-display text-2xl font-medium">{collection.title}</h3>
                <p className="mt-1 max-w-sm text-sm text-paper/90">{collection.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,70rem)] pb-8">
        <h2 className="font-display text-2xl font-medium tracking-tight">Also exploring</h2>
        <p className="mt-1 mb-6 text-muted">
          Play and travel extras. Useful — not the reason the shop exists.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exploring.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
