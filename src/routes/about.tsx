import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">The house</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">A quieter bowl.</h1>
      <p className="mt-4 text-lg text-muted">
        Happy Bowl Co. is a hydration-led shop for dogs and cats. We start with water that actually
        gets drunk, then add the mealtime and play pieces that make a day calmer — not a warehouse
        of everything a pet might chew.
      </p>

      <img
        src="/products/hero.jpg"
        alt="Cat and dog sharing a fountain in a kitchen"
        className="product-photo mt-8 w-full rounded-xl object-cover"
      />

      <section className="mt-10 space-y-4 text-base">
        <h2 className="font-display text-2xl font-medium">What we put on the floor</h2>
        <p>
          Stainless fountains as the hero. Filters as the restock. Lick mats and a puzzle feeder
          for slower meals. A short play aisle for dogs who need a job. A walk bottle so water
          doesn’t stop at the door.
        </p>
        <p>
          We do not sell food, treats meant to be eaten as meals, CBD, or shampoo. Those belong to
          specialists. If a listing photo doesn’t match the box the warehouse will send, it does
          not go on the floor. The turkey chew, antler chew, and XL filter pack are gone — replaced
          by the Cheerble Elfin fountain, the PawHut oak feeding station, and the Pet Life Tri-Chew,
          each with a live Doba listing.
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
          <li>Quiet stainless is the fountain path.</li>
          <li>The 2 L filter pack does not fit the 7 L tank.</li>
          <li>Dispensers are enrichment. Supervise them.</li>
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
