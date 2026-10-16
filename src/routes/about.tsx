import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useSupplierNotes } from "@/lib/supplier-notes";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "Our Story | Happy Bowl Pets Co.",
      description:
        "Happy Bowl Pets Co. started in Miami with a quieter bowl in mind. Stainless fountains, bowls, toys, and everyday care for dogs and cats.",
      path: "/about",
      image: "/products/story-banner.jpg",
    }),
  component: AboutPage,
});

function AboutPage() {
  const supplierNotes = useSupplierNotes();

  return (
    <main>
      <img
        src="/products/story-banner.jpg"
        alt="A cream dog and a dachshund on a rug in a warm living room, Happy Bowl Pets Co."
        className="h-auto w-full object-cover"
      />
      <div className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">Our story</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">A quieter bowl.</h1>
      <p className="mt-4 text-lg text-muted">
        {supplierNotes
          ? "Happy Bowl Pets Co. is a wellness shop for dogs and cats. We still start with water that actually gets drunk — then beds, treats, toys, and shampoo from the same US warehouse, using that warehouse’s own photo so the listing matches the box."
          : "Happy Bowl Pets Co. is a shop for dogs and cats. Quiet fountains, raised beds, treats, toys, costumes, and everyday care."}
      </p>

      <section className="mt-10 space-y-4 text-base">
        <h2 className="font-display text-2xl font-medium">What we put on the floor</h2>
        <p>
          Stainless fountains as the hero. Raised cots and lounge beds that are in stock.
          BeNat oat shampoo, a lick mat, calming chews, toys, and joint oil. A walk bottle so
          water doesn’t stop at the door.
        </p>
        <p>
          {supplierNotes
            ? "If a listing is out of stock, ships from overseas, or the photo isn’t the warehouse item, it does not go on the floor. Joint chews and drops follow the label on the bottle — not a vet visit. Prices already include our margin over warehouse cost."
            : "Chews and drops follow the label printed on the bottle."}
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-2xl font-medium">How you buy</h2>
        <p>
          {supplierNotes
            ? "This catalog is the front of house. Add anything to the cart and pay on Stripe. US shipping starts at $6.95 (free standard at $75). State sales tax is calculated from the address you enter, shown before you pay. You get a receipt by email; we receive the same paid order in Stripe."
            : "Add a piece to your cart. Shipping and tax are confirmed before you pay, and a receipt is emailed to you."}
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-2xl font-medium">A few house rules</h2>
        <ul className="space-y-2 text-base">
          <li>Dogs and cats only.</li>
          <li>Quiet stainless is still the fountain path.</li>
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
      <video
        src="/products/our-story.mp4?v=20261015"
        autoPlay
        loop
        muted
        playsInline
        className="mt-12 w-full rounded-xl"
        aria-label="A cream dog and a dachshund on the sofa"
      />
      </div>
    </main>
  );
}
