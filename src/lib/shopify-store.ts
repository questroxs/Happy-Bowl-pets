import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import { PRODUCTS, getProduct } from "@/lib/catalog";
import { createCheckoutSession } from "@/lib/create-checkout";
import {
  assertStorefrontToken,
  envShopifyConfig,
  fetchShopifyCatalog,
  matchCatalogToShopify,
  normalizeShopDomain,
  type ShopifyConfig,
  type ShopifyVariantMatch,
} from "@/lib/shopify";

export type CartLine = {
  slug: string;
  quantity: number;
};

type ShopifyState = {
  config: ShopifyConfig | null;
  shopName: string | null;
  matches: Record<string, ShopifyVariantMatch>;
  status: "idle" | "connecting" | "connected" | "error";
  error: string | null;
  cart: CartLine[];
  cartOpen: boolean;
  checkingOut: boolean;
  hydrate: () => Promise<void>;
  connect: (shop: string, token: string) => Promise<void>;
  disconnect: () => void;
  refresh: () => Promise<void>;
  addToCart: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  checkout: () => Promise<void>;
};

function resolvedConfig(stored: ShopifyConfig | null): ShopifyConfig | null {
  return stored ?? envShopifyConfig();
}

export const useShopifyStore = create<ShopifyState>()(
  persist(
    (set, get) => ({
      config: null,
      shopName: null,
      matches: {},
      status: "idle",
      error: null,
      cart: [],
      cartOpen: false,
      checkingOut: false,
      hydrate: async () => {
        await get().refresh();
      },
      connect: async (shop, token) => {
        const config: ShopifyConfig = {
          shop: normalizeShopDomain(shop),
          token: assertStorefrontToken(token),
        };
        set({ status: "connecting", error: null, config });
        try {
          const catalog = await fetchShopifyCatalog(config);
          const matches = matchCatalogToShopify(PRODUCTS, catalog.products);
          set({
            config,
            shopName: catalog.shopName,
            matches,
            status: "connected",
            error:
              Object.keys(matches).length === 0
                ? "Store is connected, but no catalog SKUs matched yet. Import the CSV, then reconnect."
                : null,
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : "Could not connect to Shopify.";
          set({ status: "error", error: message, shopName: null, matches: {} });
          throw error;
        }
      },
      disconnect: () => {
        set({
          config: null,
          shopName: null,
          matches: {},
          status: "idle",
          error: null,
        });
      },
      refresh: async () => {
        const config = resolvedConfig(get().config);
        if (!config) {
          set({ status: "idle", shopName: null, matches: {}, error: null });
          return;
        }
        set({ status: "connecting", error: null, config });
        try {
          const catalog = await fetchShopifyCatalog(config);
          const matches = matchCatalogToShopify(PRODUCTS, catalog.products);
          set({
            shopName: catalog.shopName,
            matches,
            status: "connected",
            error:
              Object.keys(matches).length === 0
                ? "Store is connected, but no catalog SKUs matched yet. Import the CSV, then reconnect."
                : null,
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : "Could not reach Shopify.";
          set({ status: "error", error: message, matches: {} });
        }
      },
      addToCart: (slug) => {
        if (!getProduct(slug)) {
          toast.error("That piece is not in the catalog.");
          return;
        }
        const cart = get().cart;
        const existing = cart.find((line) => line.slug === slug);
        const next = existing
          ? cart.map((line) =>
              line.slug === slug ? { ...line, quantity: Math.min(9, line.quantity + 1) } : line,
            )
          : [...cart, { slug, quantity: 1 }];
        set({ cart: next, cartOpen: true });
        const product = getProduct(slug);
        toast.success(product ? `${product.name} added` : "Added to cart");
      },
      setQuantity: (slug, quantity) => {
        if (quantity < 1) {
          set({ cart: get().cart.filter((line) => line.slug !== slug) });
          return;
        }
        set({
          cart: get().cart.map((line) =>
            line.slug === slug ? { ...line, quantity: Math.min(9, quantity) } : line,
          ),
        });
      },
      removeFromCart: (slug) => {
        set({ cart: get().cart.filter((line) => line.slug !== slug) });
      },
      clearCart: () => set({ cart: [], cartOpen: false }),
      setCartOpen: (cartOpen) => set({ cartOpen }),
      checkout: async () => {
        const lines = get().cart;
        if (lines.length === 0) {
          throw new Error("Cart is empty.");
        }

        set({ checkingOut: true });
        try {
          const { url } = await createCheckoutSession({ data: { lines } });
          window.location.assign(url);
        } finally {
          set({ checkingOut: false });
        }
      },
    }),
    {
      name: "happy-bowl-shopify",
      partialize: (state) => ({
        config: state.config,
        cart: state.cart,
      }),
    },
  ),
);

export function cartCount(cart: CartLine[]) {
  return cart.reduce((sum, line) => sum + line.quantity, 0);
}

export function cartSubtotal(cart: CartLine[]) {
  return cart.reduce((sum, line) => {
    const product = getProduct(line.slug);
    return product ? sum + product.price * line.quantity : sum;
  }, 0);
}

export function isShopifyLive(state: Pick<ShopifyState, "status" | "matches">) {
  return state.status === "connected" && Object.keys(state.matches).length > 0;
}
