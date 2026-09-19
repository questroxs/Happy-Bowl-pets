import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PRODUCTS } from "@/lib/catalog";
import { shopifyImportCsv } from "@/lib/shopify";
import { isShopifyLive, useShopifyStore } from "@/lib/shopify-store";

export const Route = createFileRoute("/shopify")({ component: ShopifyPage });

function ShopifyPage() {
  const status = useShopifyStore((state) => state.status);
  const shopName = useShopifyStore((state) => state.shopName);
  const config = useShopifyStore((state) => state.config);
  const matches = useShopifyStore((state) => state.matches);
  const error = useShopifyStore((state) => state.error);
  const connect = useShopifyStore((state) => state.connect);
  const disconnect = useShopifyStore((state) => state.disconnect);
  const refresh = useShopifyStore((state) => state.refresh);
  const [shop, setShop] = useState(config?.shop ?? "");
  const [token, setToken] = useState("");
  const live = isShopifyLive({ status, matches });
  const matched = Object.keys(matches).length;

  const onConnect = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await connect(shop, token);
      toast.success("Shopify connected");
      setToken("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not connect.");
    }
  };

  const downloadCsv = () => {
    const blob = new Blob([shopifyImportCsv(PRODUCTS)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "happy-bowl-shopify-import.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">Store owner</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">Connect Shopify</h1>
      <p className="mt-4 text-lg text-muted">
        This catalog stays here. Shopify takes payment and tax. Doba (or you) fulfills. Shopify is
        not free — it bills its own monthly plan. Connecting on this page tests checkout in your
        browser. To open checkout for every visitor, send the store domain and Storefront token in
        this chat after it works.
      </p>

      <section className="mt-8 rounded-xl bg-paper px-5 py-5 shadow-[var(--shadow-card)]">
        <p className="text-sm font-semibold text-ink">Status</p>
        {status === "connected" ? (
          <p className="mt-2 text-sm">
            Connected to <span className="font-medium">{shopName ?? config?.shop}</span>. {matched} of{" "}
            {PRODUCTS.length} catalog SKUs matched.
          </p>
        ) : status === "connecting" ? (
          <p className="mt-2 text-sm text-muted">Checking the storefront…</p>
        ) : (
          <p className="mt-2 text-sm text-muted">Not connected. Checkout stays on the waitlist.</p>
        )}
        {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
        {live ? (
          <p className="mt-2 text-sm text-sage-dark">
            Add to cart is on. Pay opens Shopify checkout in a new tab.
          </p>
        ) : null}
      </section>

      <ol className="mt-10 list-decimal space-y-4 pl-5 text-base">
        <li>
          Create a Shopify store at{" "}
          <a href="https://www.shopify.com/free-trial" className="text-sage-dark" target="_blank" rel="noreferrer">
            shopify.com/free-trial
          </a>
          . Use a store handle such as <span className="font-medium">happybowlpets</span>.
        </li>
        <li>
          In Shopify Admin: Settings → Apps and sales channels → Develop apps → Allow custom
          development → Create an app named Happy Bowl Storefront.
        </li>
        <li>
          Configure Storefront API scopes:{" "}
          <span className="font-medium">unauthenticated_read_product_listings</span>,{" "}
          <span className="font-medium">unauthenticated_read_product_inventory</span>,{" "}
          <span className="font-medium">unauthenticated_write_carts</span>,{" "}
          <span className="font-medium">unauthenticated_read_checkouts</span>. Install the app.
        </li>
        <li>
          Copy the <span className="font-medium">Storefront API access token</span> — never an Admin
          token (those start with shpat_).
        </li>
        <li>
          Download the catalog CSV and import it under Products → Import so SKUs match this shop
          ({PRODUCTS.map((product) => product.sku).slice(0, 3).join(", ")}, …).
        </li>
        <li>
          Optional: install the Doba app on that Shopify store so dropship SKUs can fulfill after
          checkout.
        </li>
      </ol>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button" variant="outline" onClick={downloadCsv}>
          Download Shopify CSV
        </Button>
        <Button asChild variant="outline">
          <a href="https://admin.shopify.com/" target="_blank" rel="noreferrer">
            Open Shopify Admin
          </a>
        </Button>
      </div>

      <form className="mt-10 space-y-4" onSubmit={(event) => void onConnect(event)}>
        <div className="space-y-2">
          <Label htmlFor="shop-domain">Store domain</Label>
          <Input
            id="shop-domain"
            value={shop}
            autoComplete="off"
            placeholder="happybowlpets.myshopify.com"
            onChange={(event) => setShop(event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="storefront-token">Storefront API token</Label>
          <Input
            id="storefront-token"
            type="password"
            value={token}
            autoComplete="off"
            placeholder="Paste storefront token"
            onChange={(event) => setToken(event.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="submit" disabled={status === "connecting"}>
            {status === "connecting" ? "Connecting…" : "Connect store"}
          </Button>
          {status === "connected" ? (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  void refresh();
                }}
              >
                Refresh products
              </Button>
              <Button type="button" variant="ghost" onClick={disconnect}>
                Disconnect
              </Button>
            </>
          ) : null}
        </div>
      </form>

      {matched > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">Matched SKUs</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCTS.filter((product) => matches[product.slug]).map((product) => (
              <li key={product.slug} className="flex justify-between gap-3 rounded-lg bg-paper px-3 py-2">
                <span>
                  {product.name}{" "}
                  <span className="font-mono text-xs text-muted">{product.sku}</span>
                </span>
                <span className={matches[product.slug]?.available ? "text-sage-dark" : "text-muted"}>
                  {matches[product.slug]?.available ? "In stock" : "Out of stock"}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-10 text-sm text-muted">
        Customers never see this page unless you send them here.{" "}
        <Link to="/shop" search={{}} className="text-sage-dark">
          Back to catalog
        </Link>
        .
      </p>
    </main>
  );
}
