import { create } from "zustand";
import { persist } from "zustand/middleware";

type ShopState = {
  saved: string[];
  notified: string[];
  email: string;
  name: string;
  sheetOpen: boolean;
  notifySlug: string | null;
  toggleSaved: (slug: string) => void;
  setSheetOpen: (open: boolean) => void;
  openNotify: (slug: string) => void;
  closeNotify: () => void;
  submitNotify: (email: string, name: string, slug: string) => void;
};

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      saved: [],
      notified: [],
      email: "",
      name: "",
      sheetOpen: false,
      notifySlug: null,
      toggleSaved: (slug) => {
        const saved = get().saved.includes(slug)
          ? get().saved.filter((item) => item !== slug)
          : [...get().saved, slug];
        set({ saved });
      },
      setSheetOpen: (sheetOpen) => set({ sheetOpen }),
      openNotify: (slug) => set({ notifySlug: slug }),
      closeNotify: () => set({ notifySlug: null }),
      submitNotify: (email, name, slug) => {
        const notified = get().notified.includes(slug) ? get().notified : [...get().notified, slug];
        const saved = get().saved.includes(slug) ? get().saved : [...get().saved, slug];
        set({ email, name, notified, saved, notifySlug: null, sheetOpen: true });
      },
    }),
    {
      name: "happy-bowl-waitlist",
      partialize: (state) => ({
        saved: state.saved,
        notified: state.notified,
        email: state.email,
        name: state.name,
      }),
    },
  ),
);
