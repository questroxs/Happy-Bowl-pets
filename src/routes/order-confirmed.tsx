import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useShopifyStore } from "@/lib/shopify-store";

export const Route = createFileRoute("/order-confirmed")({
  validateSearch: (search: Record<string, unknown>) => ({
    session_id: typeof search.session_id === "string" ? search.session_id : undefined,
  }),
  component: OrderConfirmedPage,
});

function OrderConfirmedPage() {
  const { session_id: sessionId } = Route.useSearch();
  const clearCart = useShopifyStore((state) => state.clearCart);

  useEffect(() => {
    if (sessionId) clearCart();
  }, [sessionId, clearCart]);

  const reference = sessionId ? sessionId.slice(-8).toUpperCase() : null;

  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-16 text-center">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">Paid</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">Order received.</h1>
      <p className="mt-4 text-lg text-muted">
        Thank you. Stripe emailed you a receipt with tax and shipping. Happy Bowl Co. received the
        same paid order — address, tax, and shipping method included. Questions:{" "}
        <a href="mailto:info@happybowlpets.com" className="font-medium text-sage-dark">
          info@happybowlpets.com
        </a>
      </p>
      {reference ? (
        <p className="mt-6 rounded-lg bg-paper px-4 py-3 font-mono text-sm text-ink shadow-[var(--shadow-card)]">
          Reference {reference}
        </p>
      ) : (
        <p className="mt-6 text-sm text-muted">
          If you didn’t finish paying, your cart is still waiting in the bag.
        </p>
      )}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/shop" search={{}}>
            Back to catalog
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/">
            Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
