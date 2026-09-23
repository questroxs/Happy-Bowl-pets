import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { flagLabel, pricingRows, type PriceFlag } from "@/lib/doba-pricing";
import { formatMoney, formatPrice } from "@/lib/utils";

export const Route = createFileRoute("/compare")({ component: ComparePage });

function ComparePage() {
  const rows = pricingRows();
  const known = rows.filter((row) => row.dobaCost != null);
  const thin = known.filter((row) => row.flag === "thin" || row.flag === "at-cost");
  const high = known.filter((row) => row.flag === "high");

  return (
    <main className="mx-auto w-[min(100%-2rem,70rem)] py-10">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">Internal</p>
      <h1 className="mt-1 font-display text-4xl font-medium tracking-tight">
        Doba cost vs Happy Bowl price
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Same warehouse SKU on both sides. Doba hides the wholesale dollar behind a login. Where a
        listing publishes “up to $X per sale (Y% margin)” we back out their example retail and
        implied cost. Everything else: open the warehouse link while signed in to Doba.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Catalog" value={`${rows.length}`} />
        <Stat label="Cost backed out from Doba" value={`${known.length}`} />
        <Stat label="Thin or at-cost" value={`${thin.length}`} />
      </div>

      {thin.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl font-medium">Look at these first</h2>
          <p className="mt-1 text-sm text-muted">
            Our shelf price is close to the implied warehouse cost, or the margin is under 30%.
          </p>
          <div className="mt-4 space-y-3">
            {thin.map((row) => (
              <CompareCard key={row.product.slug} row={row} />
            ))}
          </div>
        </section>
      ) : null}

      {high.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">High vs Doba’s example retail</h2>
          <p className="mt-1 text-sm text-muted">
            We charge more than 40% above Doba’s example selling price. Margin may be fine — check
            what shoppers see on Amazon.
          </p>
          <div className="mt-4 space-y-3">
            {high.map((row) => (
              <CompareCard key={row.product.slug} row={row} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-display text-2xl font-medium">Full catalog</h2>
        <p className="mt-1 mb-4 text-sm text-muted">
          {known.length} with a backed-out Doba cost. {rows.length - known.length} need a signed-in
          Doba check.
        </p>
        <div className="space-y-3">
          {rows.map((row) => (
            <CompareCard key={row.product.slug} row={row} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-paper px-5 py-4 shadow-[var(--shadow-card)]">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 font-display text-2xl font-medium">{value}</p>
    </div>
  );
}

function CompareCard({ row }: { row: ReturnType<typeof pricingRows>[number] }) {
  const { product, dobaCost, dobaSuggested, ourProfit, ourMargin, flag, hint } = row;
  return (
    <article className="grid gap-4 rounded-xl bg-paper p-4 shadow-[var(--shadow-card)] sm:grid-cols-[7rem_1fr]">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="overflow-hidden rounded-lg bg-cream"
      >
        <img
          src={product.image}
          alt=""
          className="product-photo aspect-square w-full object-contain p-2"
          width={160}
          height={160}
        />
      </Link>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-lg font-medium tracking-tight">{product.name}</h3>
          <FlagBadge flag={flag} />
        </div>
        <p className="mt-0.5 text-sm text-muted">
          {product.sku} · {product.category} · {product.tagline}
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:grid-cols-4">
          <Pair label="Our price" value={formatPrice(product.price)} />
          <Pair
            label="Doba cost"
            value={dobaCost != null ? formatMoney(dobaCost) : "Login on Doba"}
          />
          <Pair
            label="Doba example retail"
            value={dobaSuggested != null ? formatMoney(dobaSuggested) : "—"}
          />
          <Pair
            label="Our $ / %"
            value={
              ourProfit != null && ourMargin != null
                ? `${formatMoney(ourProfit)} · ${Math.round(ourMargin * 100)}%`
                : hint?.marginPct
                  ? `Doba example ~${hint.marginPct}%`
                  : "—"
            }
          />
        </dl>
        {hint?.note ? <p className="mt-2 text-sm text-muted">{hint.note}</p> : null}
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="font-medium text-sage-dark no-underline"
          >
            Happy Bowl listing
          </Link>
          <a
            href={product.warehouseUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-sage-dark no-underline"
          >
            Doba warehouse
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Pair({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function FlagBadge({ flag }: { flag: PriceFlag }) {
  const tone = flag === "healthy" ? "sage" : flag === "unknown" || flag === "ok" ? "muted" : "terra";
  return <Badge tone={tone}>{flagLabel(flag)}</Badge>;
}
