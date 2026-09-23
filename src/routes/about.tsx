import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">The house</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">A quieter bowl.</h1>
      <p className="mt-4 text-lg text-muted">
        Happy Bowl Co. is a wellness shop for dogs and cats. We still start with water that
        actually gets drunk — then beds, treats, toys, and shampoo from the same
        US warehouse, using that warehouse’s own photo so the listing matches the box.
      </p>

      <img
        src="/products/hero.jpg"
        alt="An orange cat drinking from the quiet stainless fountain"
        className="product-photo mt-8 w-full rounded-xl object-cover"
      />

      <section className="mt-10 space-y-4 text-base">
        <h2 className="font-display text-2xl font-medium">What we put on the floor</h2>
        <p>
          Stainless fountains as the hero. Raised cots and lounge beds that are in stock.
          BeNat oat shampoo, a lick mat, calming chews, toys, and joint oil. A walk bottle so
          water doesn’t stop at the door.
        </p>
        <p>
          If a listing is out of stock, ships from overseas, or the photo isn’t the warehouse
          item, it does not go on the floor. Joint chews and drops follow the label on the
          bottle — not a vet visit. Prices already include our margin over warehouse cost.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-2xl font-medium">How you buy</h2>
        <p>
          This catalog is the front of house. Add anything to the cart and pay on Stripe. US
          shipping starts at $6.95 (free standard at $75). State sales tax is calculated from the
          address you enter, shown before you pay. You get a receipt by email; we receive the same
          paid order in Stripe.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-2xl font-medium">A few house rules</h2>
        <ul className="space-y-2 text-base">
          <li>Dogs and cats only.</li>
          <li>Quiet stainless is still the fountain path.</li>
          <li>Joint chews and drops are warehouse listings — not a vet substitute.</li>
          <li>Dispensers and chews are enrichment. Supervise them.</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/shop" search={{ cat: "hydration" }}>
            Start with hydration
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/shop" search={{}}>
            Browse the catalog
          </Link>
        </Button>
      </div>
    </main>
  );
}
