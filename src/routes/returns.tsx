import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/returns")({
  head: () =>
    pageHead({
      title: "Returns | Happy Bowl Pets Co.",
      description:
        "Unused Happy Bowl Pets Co. items can be returned within 30 days. Email info@happybowlpets.com and we will send return instructions. Buyer pays return shipping.",
      path: "/returns",
    }),
  component: ReturnsPage,
});

function ReturnsPage() {
  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">House notes</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">Returns</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>You can return an unused item in its original condition within 30 days of delivery.</p>
        <p>
          Email{" "}
          <a href="mailto:info@happybowlpets.com" className="font-medium text-sage-dark">
            info@happybowlpets.com
          </a>{" "}
          with your order number and the item name. We reply with the return address.
        </p>
        <p>The buyer pays return shipping. Once the unused item arrives, we refund the purchase price to the original payment method. Outbound shipping is refunded only when we sent the wrong item.</p>
        <p>Opened consumable chews, drops, and powders cannot be returned. A damaged shipment is replaced — write us with a photo within 7 days of delivery.</p>
        <p>
          Shipping times are on the <Link to="/shipping" className="text-sage-dark">shipping page</Link>.
        </p>
      </div>
    </main>
  );
}
