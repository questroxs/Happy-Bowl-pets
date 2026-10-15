import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import { PRODUCTS, getProduct } from "@/lib/catalog";
import { canPurchase, previewOne } from "@/lib/catalog-preview";
import { createCheckoutSession } from "@/lib/create-checkout";
import { isSupplierHost } from "@/lib/public-host";
import { stockSnapshot } from "@/lib/stock-overrides";
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
  size?: string;
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
  addToCart: (slug: string, size?: string) => void;
  setQuantity: (slug: string, quantity: number, size?: string) => void;
  removeFromCart: (slug: string, size?: string) => void;
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
      addToCart: (slug, size) => {
        const preview = typeof window !== "undefined" && isSupplierHost(window.location.host);
        const product = preview ? previewOne(slug, stockSnapshot()) : getProduct(slug);
        if (!product || (preview && !canPurchase(product))) {
          toast.error("That piece is not available to purchase.");
          return;
        }
        const picked = size?.trim().toUpperCase();
        if (product.sizes?.length && (!picked || !product.sizes.includes(picked))) {
          toast.error(`Choose a size for ${product.name}.`);
          return;
        }
        const cart = get().cart;
        const existing = cart.find((line) => line.slug === slug && line.size === picked);
        const next = existing
          ? cart.map((line) =>
              line.slug === slug && line.size === picked
                ? { ...line, quantity: Math.min(9, line.quantity + 1) }
                : line,
            )
          : [...cart, { slug, quantity: 1, ...(picked ? { size: picked } : {}) }];
        set({ cart: next, cartOpen: true });
        toast.success(picked ? `${product.name} (${picked}) added` : `${product.name} added`);
      },
      setQuantity: (slug, quantity, size) => {
        const picked = size?.trim().toUpperCase();
        const same = (line: CartLine) => line.slug === slug && line.size === picked;
        if (quantity < 1) {
          set({ cart: get().cart.filter((line) => !same(line)) });
          return;
        }
        set({
          cart: get().cart.map((line) =>
            same(line) ? { ...line, quantity: Math.min(9, quantity) } : line,
          ),
        });
      },
      removeFromCart: (slug, size) => {
        const picked = size?.trim().toUpperCase();
        set({ cart: get().cart.filter((line) => !(line.slug === slug && line.size === picked)) });
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
          const { url } = await createCheckoutSession({
            data: {
              lines,
              stock:
                typeof window !== "undefined" && isSupplierHost(window.location.host)
                  ? stockSnapshot()
                  : undefined,
            },
          });
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
