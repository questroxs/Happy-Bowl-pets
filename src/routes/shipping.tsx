import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/shipping")({
  head: () =>
    pageHead({
      title: "Shipping | Happy Bowl Pets Co.",
      description:
        "We ship pet fountains, filters, bowls, and toys inside the United States. Standard arrives in 5–8 business days. Free standard shipping at $75.",
      path: "/shipping",
    }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">House notes</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">Shipping</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>Happy Bowl Pets Co. ships to addresses in the United States. We do not ship outside the US.</p>
        <p>Standard shipping is $6.95 and arrives in 5–8 business days. Standard shipping is free on orders of $75 or more.</p>
        <p>Expedited shipping is $14.95 and arrives in 2–3 business days.</p>
        <p>State sales tax is calculated at Stripe checkout from the shipping address and shown before you pay.</p>
        <p>
          Questions about an order:{" "}
          <a href="mailto:info@happybowlpets.com" className="font-medium text-sage-dark">
            info@happybowlpets.com
          </a>
          . See also <Link to="/returns" className="text-sage-dark">returns</Link>.
        </p>
      </div>
    </main>
  );
}
