import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Leaf, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { exploringProducts, featuredProducts } from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

const COLLECTIONS = [
  {
    title: "Beds",
    copy: "Mesh cots, lounge beds, and the Travel-Nest — the beds the warehouse can ship today.",
    cat: "beds" as const,
    image: "/products/elevated-mesh.jpg",
  },
  {
    title: "Treats",
    copy: "Calming chews the US warehouse still has in stock. Nothing discontinued.",
    cat: "treats" as const,
    image: "/products/calming-chews.jpg",
  },
  {
    title: "Wellness",
    copy: "Joint oil, joint chews, and skin-and-coat chews. No medical claims.",
    cat: "wellness" as const,
    image: "/products/joint-liquid.jpg",
  },
  {
    title: "Care",
    copy: "BeNat oat shampoo bar, the 3-pack, paw cream, and the steam brush.",
    cat: "care" as const,
    image: "/products/oat-shampoo.jpg",
  },
];

function Home() {
  const featured = featuredProducts();
  const exploring = exploringProducts();

  return (
    <main>
      <p className="border-b border-sage/40 bg-cream px-4 py-3 text-center text-sm text-ink">
        Checkout is open. US shipping from $6.95 (free at $75). State tax is calculated on Stripe
        from your address — you and we both get the receipt.{" "}
        <Link to="/compare" className="font-medium text-sage-dark">
          Warehouse vs our prices
        </Link>
      </p>

      <section className="relative isolate min-h-[28rem] overflow-hidden md:min-h-[36rem]">
        <img
          src="/products/hero.jpg"
          alt="An orange cat drinking from the quiet stainless fountain"
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
            Quiet stainless fountains, raised beds, treats, toys, and everyday care. The photo is the warehouse item — the one that is actually in stock.
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
              Stainless, quiet, and sized for real kitchens. The fountain in the photo is the one we ship.
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
              Treats, shampoo, and beds chosen the same way as the fountain: the warehouse
              item, photographed as it ships, priced with our margin in.
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

      <section className="relative isolate pb-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src="/products/our-story-pets.jpg"
            alt="Our two dogs together — a dachshund at home and a small companion in the grass"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-sand to-transparent md:h-24" />
        </div>
        <div className="relative mx-auto -mt-4 w-[min(100%-2rem,40rem)] rounded-xl bg-paper px-6 py-8 shadow-[var(--shadow-card)] md:-mt-10 md:px-9 md:py-10">
          <p className="text-sm font-semibold tracking-widest text-terra uppercase">Miami, Florida</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">Our Story</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/90 md:text-base">
            <p>
              Happy Bowl Co started right here in Miami, Florida — born from something simple: a
              love for our pets and a belief that they deserve better.
            </p>
            <p>
              We're Michael and Elaine, and like a lot of pet parents, we got tired of sifting
              through shelves of products packed with fillers, artificial junk, and empty promises.
              We wanted something different — for our own dogs and cats, and for yours.
            </p>
            <p>
              So we built Happy Bowl Co around one idea: wellness shouldn't be complicated.
              From clean, filtered water to thoughtfully chosen treats, toys, and holistic care
              essentials, every product we offer is picked with the same question in mind — would we
              give this to our own pets?
            </p>
            <p>
              We're a small business, but we've got big love for the animals who make our
              homes feel whole. Thanks for being part of our journey — and theirs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,70rem)] py-14">
        <h2 className="font-display text-2xl font-medium tracking-tight">Shop by ritual</h2>
        <p className="mt-1 mb-6 text-muted">Beds, treats, wellness, and care — plus the fountain aisle in Shop.</p>
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
                className="absolute inset-0 h-full w-full object-contain bg-cream p-6 transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-ink/50" />
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
          New beds, the oat bar, hemp joint 120, and a few play extras.
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
