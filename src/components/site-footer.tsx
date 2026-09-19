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
            Hydration-led shop for dogs and cats. Quiet stainless fountains, calmer mealtimes, and
            a few thoughtful extras. Checkout runs on Shopify when the store is connected.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-ink uppercase">Catalog</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/shop" search={{ cat: "hydration" }} className="text-sage-dark no-underline">
                Hydration
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ cat: "mealtime" }} className="text-sage-dark no-underline">
                Mealtime
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ cat: "play" }} className="text-sage-dark no-underline">
                Play
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
            <li>Dogs and cats only</li>
            <li>No food, CBD, or shampoo on this shop</li>
            <li>
              <Link to="/about" className="text-sage-dark no-underline">
                How we choose pieces
              </Link>
            </li>
            <li>
              <Link to="/shopify" className="text-sage-dark no-underline">
                Connect Shopify
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-sm text-muted">
        Preview catalog. Checkout opens on Shopify once the store is connected.
      </p>
    </footer>
  );
}
