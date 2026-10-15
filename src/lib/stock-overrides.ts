import { useSyncExternalStore } from "react";

export type StockState = "in_stock" | "out_of_stock" | "coming_soon";

export type StockOverride = { stock: StockState; since: string };

const KEY = "hb-preview-stock-v1";

const EMPTY: Record<string, StockOverride> = {};

let cache: Record<string, StockOverride> = EMPTY;
const listeners = new Set<() => void>();

function read(): Record<string, StockOverride> {
  if (typeof window === "undefined") return EMPTY;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) || "{}") as Record<string, StockOverride>;
    return parsed && typeof parsed === "object" ? parsed : EMPTY;
  } catch {
    return EMPTY;
  }
}

if (typeof window !== "undefined") {
  cache = read();
}

function emit(next: Record<string, StockOverride>) {
  cache = next;
  listeners.forEach((listener) => listener());
}

export function stockSnapshot(): Record<string, StockOverride> {
  return cache;
}

export function useStockOverrides(): Record<string, StockOverride> {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => cache,
    () => EMPTY,
  );
}

export function setStockOverride(slug: string, stock: StockState) {
  const next = { ...read(), [slug]: { stock, since: new Date().toISOString() } };
  window.localStorage.setItem(KEY, JSON.stringify(next));
  emit(next);
}

export function sanitizeStockOverrides(input: unknown): Record<string, StockOverride> {
  if (!input || typeof input !== "object") return {};
  const next: Record<string, StockOverride> = {};
  for (const [slug, value] of Object.entries(input as Record<string, unknown>)) {
    if (!value || typeof value !== "object") continue;
    const stock = (value as { stock?: unknown }).stock;
    const since = (value as { since?: unknown }).since;
    if (stock !== "in_stock" && stock !== "out_of_stock" && stock !== "coming_soon") continue;
    next[slug] = {
      stock,
      since: typeof since === "string" ? since : new Date().toISOString(),
    };
  }
  return next;
}
