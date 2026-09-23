import { Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-cream">
      <div className="mx-auto grid w-[min(100%-2rem,70rem)] gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-9" />
            <p className="font-display text-lg font-medium">Happy Bowl Co.</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Wellness shop for dogs and cats. Fountains, beds, treats, toys, and care — warehouse
            pieces, photographed on cream. Pay on Stripe.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-ink uppercase">Catalog</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/shop" search={{ cat: "beds" }} className="text-sage-dark no-underline">
                Beds
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ cat: "treats" }} className="text-sage-dark no-underline">
                Treats
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ cat: "wellness" }} className="text-sage-dark no-underline">
                Wellness
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ cat: "care" }} className="text-sage-dark no-underline">
                Care
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{}} className="text-sage-dark no-underline">
                Full catalog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-ink uppercase">House notes</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>US shipping from $6.95 — free standard at $75</li>
            <li>State tax calculated at Stripe checkout</li>
            <li>
              <Link to="/about" className="text-sage-dark no-underline">
                How we choose pieces
              </Link>
            </li>
            <li>
              <Link to="/compare" className="text-sage-dark no-underline">
                Warehouse vs our prices
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-sm text-muted">
        Checkout on Stripe. You and Happy Bowl Co. both receive the receipt.
      </p>
    </footer>
  );
}
