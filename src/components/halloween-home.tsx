import { Link } from "@tanstack/react-router";
import { VisitorGate } from "@/components/visitor-gate";
import { Button } from "@/components/ui/button";
import { getProduct, type Product } from "@/lib/catalog";
import { agedOut, canPurchase, projectPreview } from "@/lib/catalog-preview";
import { presentProduct } from "@/lib/customer-copy";
import { useShopifyStore } from "@/lib/shopify-store";
import { formatMoney } from "@/lib/utils";

const COSTUMES = ["creepy-webs", "rodeo-bones", "snowman-hoodie", "inmate-stripes", "santa-coat"];
const HOUSE = ["quiet-stainless-2l", "elevated-mesh", "pig-ears-25"];

function listed(slugs: string[]): Product[] {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => item != null)
    .map((item) => projectPreview(item, {}))
    .filter((item): item is Product => item != null && !agedOut(item) && canPurchase(item))
    .map((item) => presentProduct(item, false));
}

function Moon() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-8 right-3 size-28 rounded-full md:top-6 md:right-16 md:size-52"
      style={{
        background:
          "radial-gradient(circle at 38% 36%, #fff8e8 0%, #f3ddb0 42%, #e7c98a 70%, transparent 72%)",
        boxShadow: "0 0 70px 12px rgba(243, 221, 176, 0.28)",
      }}
    />
  );
}

function Bat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 28" aria-hidden className={className} fill="currentColor">
      <path d="M4 16c7-1 9-11 15-12 2 5 7 8 13 8h16c6 0 11-3 13-8 6 1 8 11 15 12-7 2-9-1-14-3-2 7-8 10-14 10H32c-6 0-12-3-14-10-5 2-7 5-14 3z" />
    </svg>
  );
}

function Pumpkin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="none">
      <path d="M16 6c.4-2 1.6-3.2 3.4-3.6" stroke="#3d5c3a" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M8.5 16c0-4.2 2.2-8 5-8 1.4 2.2 2.2 5 2.5 8-.3 3-1.1 5.8-2.5 8-2.8 0-5-3.8-5-8zm7.5-8c1.4 2.2 2.2 5 2.5 8-.3 3-1.1 5.8-2.5 8 1.4-2.2 2.2-5 2.5-8-.3-3-1.1-5.8-2.5-8zM18 8c2.8 0 5 3.8 5 8s-2.2 8-5 8c-1.4-2.2-2.2-5-2.5-8 .3-3 1.1-5.8 2.5-8z"
        fill="#e07a3d"
      />
    </svg>
  );
}

function ThemeCard({ product }: { product: Product }) {
  const addToCart = useShopifyStore((state) => state.addToCart);
  const price = formatMoney(product.price);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-paper text-ink shadow-[var(--shadow-card)]">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="flex h-full flex-col text-inherit no-underline"
      >
        <div className="flex aspect-4/3 items-center justify-center bg-cream">
          <img
            src={product.image}
            alt={product.name}
            className="product-photo h-full w-full object-contain p-3"
            width={640}
            height={480}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="font-display text-lg leading-snug font-medium tracking-tight">{product.name}</h3>
          <p className="text-sm text-muted">{product.tagline}</p>
          <div className="mt-auto flex items-end justify-between pt-3">
            <p className="font-medium text-sage-dark">{price}</p>
            <span className="text-sm font-medium text-sage-dark">View details</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        {product.sizes?.length ? (
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
    </article>
  );
}

/** Seasonal homepage for the Vercel preview only. Customer copy, real photos, real prices. */
export function HalloweenHome() {
  const costumes = listed(COSTUMES);
  const house = listed(HOUSE);

  return (
    <main className="overflow-x-hidden bg-[#1c1612] text-[#f7f1e8]">
      <section className="relative overflow-hidden">
        <Moon />
        <Bat className="pointer-events-none absolute top-24 left-[8%] hidden h-5 w-14 text-[#f7f1e8]/45 md:block" />
        <Bat className="pointer-events-none absolute top-40 left-[22%] hidden h-4 w-11 -scale-x-100 text-[#f7f1e8]/30 md:block" />
        <div className="relative mx-auto grid w-[min(100%-2rem,70rem)] items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-[#f0c79a] uppercase">
              <Pumpkin className="size-7" />
              October at Happy Bowl Pets Co.
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
              Dress-up for the doorstep.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#f7f1e8]/80">
              Spider, cowboy, snowman, stripes, and a Santa coat. The fountain, the bed, and the
              chew bag stay on the shelf after the porch light goes out.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#e07a3d] text-[#1c1612] hover:bg-[#f0a36a]">
                <Link to="/shop" search={{ cat: "costumes" }}>
                  Shop costumes
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#f7f1e8]/70 bg-transparent text-[#f7f1e8] hover:bg-[#f7f1e8]/10"
              >
                <Link to="/shop" search={{}}>
                  Full catalog
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-cream shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/products/creepy-webs-plain.jpg"
                alt="Creepy Webs spider costume for dogs"
                className="aspect-4/3 w-full object-contain p-4"
                width={960}
                height={720}
              />
            </div>
            <p className="mt-3 text-sm text-[#f7f1e8]/70">Creepy Webs, the hooded spider costume.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,70rem)] pb-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">The costume rack</h2>
            <p className="mt-1 text-sm text-[#f7f1e8]/70">Sizes run from the product page. Dogs, and the Santa coat for cats too.</p>
          </div>
          <Button asChild variant="ghost" className="text-[#f0c79a] hover:bg-[#f7f1e8]/10">
            <Link to="/shop" search={{ cat: "costumes" }}>
              See all
            </Link>
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costumes.map((product) => (
            <ThemeCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-[#f7f1e8]/10 bg-[#261e19] py-14">
        <div className="mx-auto w-[min(100%-2rem,70rem)]">
          <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">After the doorbell</h2>
          <p className="mt-1 mb-6 max-w-lg text-sm text-[#f7f1e8]/70">
            A costume is the October piece. Water, a raised bed, and a chew are the rest of the house.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {house.map((product) => (
              <ThemeCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline" className="border-[#f7f1e8]/70 bg-transparent text-[#f7f1e8] hover:bg-[#f7f1e8]/10">
              <Link to="/about">Our story</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-sand text-ink">
        <div className="mx-auto flex w-[min(100%-2rem,70rem)] justify-end py-8">
          <VisitorGate />
        </div>
      </div>
    </main>
  );
}
