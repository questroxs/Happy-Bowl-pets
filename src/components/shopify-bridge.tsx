import { useEffect } from "react";
import { useShopifyStore } from "@/lib/shopify-store";

export function ShopifyBridge() {
  const hydrate = useShopifyStore((state) => state.hydrate);

  useEffect(() => {
    const run = () => {
      void useShopifyStore.getState().hydrate();
    };
    if (useShopifyStore.persist.hasHydrated()) {
      run();
    }
    return useShopifyStore.persist.onFinishHydration(run);
  }, [hydrate]);

  return null;
}
