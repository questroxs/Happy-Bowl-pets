import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, Menu, Search, ShoppingBag } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useShopStore } from "@/lib/store";
import { cartCount, useShopifyStore } from "@/lib/shopify-store";

export function SiteHeader() {
  const navigate = useNavigate();
  const saved = useShopStore((s) => s.saved);
  const setSheetOpen = useShopStore((s) => s.setSheetOpen);
  const cart = useShopifyStore((s) => s.cart);
  const setCartOpen = useShopifyStore((s) => s.setCartOpen);
  const bagCount = cartCount(cart);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goSearch = () => {
    const q = query.trim();
    setMenuOpen(false);
    setSearchOpen(false);
    void navigate({ to: "/shop", search: { q: q || undefined } });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-sand/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-[min(100%-2rem,70rem)] items-center gap-3">
        <Link to="/" className="flex items-center gap-2.5 text-ink no-underline">
          <LogoMark className="size-9" />
          <span className="font-display text-lg font-medium tracking-tight">Happy Bowl Co.</span>
        </Link>
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          <Link
            to="/shop"
            search={{}}
            className="rounded-full px-3 py-2 text-sm font-medium text-sage-dark no-underline hover:bg-sage-soft"
          >
            Shop
          </Link>
          <Link
            to="/shop"
            search={{ cat: "beds" }}
            className="rounded-full px-3 py-2 text-sm font-medium text-sage-dark no-underline hover:bg-sage-soft"
          >
            Beds
          </Link>
          <Link
            to="/shop"
            search={{ cat: "treats" }}
            className="rounded-full px-3 py-2 text-sm font-medium text-sage-dark no-underline hover:bg-sage-soft"
          >
            Treats
          </Link>
          <Link
            to="/shop"
            search={{ cat: "wellness" }}
            className="rounded-full px-3 py-2 text-sm font-medium text-sage-dark no-underline hover:bg-sage-soft"
          >
            Wellness
          </Link>
          <Link
            to="/shop"
            search={{ cat: "care" }}
            className="rounded-full px-3 py-2 text-sm font-medium text-sage-dark no-underline hover:bg-sage-soft"
          >
            Care
          </Link>
          <Link
            to="/about"
            className="rounded-full px-3 py-2 text-sm font-medium text-sage-dark no-underline hover:bg-sage-soft"
          >
            About
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          {searchOpen ? (
            <form
              className="hidden sm:block"
              onSubmit={(event) => {
                event.preventDefault();
                goSearch();
              }}
            >
              <Input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the catalog"
                className="h-10 w-52"
                aria-label="Search the catalog"
              />
            </form>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className="relative"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="size-4" />
            {mounted && bagCount > 0 ? (
              <span className="absolute top-1.5 right-1.5 grid size-4 place-items-center rounded-full bg-terra text-xs font-semibold text-paper">
                {bagCount}
              </span>
            ) : null}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Saved items"
            className="relative"
            onClick={() => setSheetOpen(true)}
          >
            <Bookmark className="size-4" />
            {mounted && saved.length > 0 ? (
              <span className="absolute top-1.5 right-1.5 grid size-4 place-items-center rounded-full bg-terra text-xs font-semibold text-paper">
                {saved.length}
              </span>
            ) : null}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="px-5 pt-6">
          <SheetTitle>Menu</SheetTitle>
          <nav className="mt-6 flex flex-col gap-1">
            <Link
              to="/shop"
              search={{}}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-sand"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              search={{ cat: "beds" }}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-sand"
              onClick={() => setMenuOpen(false)}
            >
              Beds
            </Link>
            <Link
              to="/shop"
              search={{ cat: "treats" }}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-sand"
              onClick={() => setMenuOpen(false)}
            >
              Treats
            </Link>
            <Link
              to="/shop"
              search={{ cat: "wellness" }}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-sand"
              onClick={() => setMenuOpen(false)}
            >
              Wellness
            </Link>
            <Link
              to="/shop"
              search={{ cat: "care" }}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-sand"
              onClick={() => setMenuOpen(false)}
            >
              Care
            </Link>
            <Link
              to="/about"
              className="rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-sand"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </nav>
          <form
            className="mt-6"
            onSubmit={(event) => {
              event.preventDefault();
              goSearch();
            }}
          >
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the catalog"
              aria-label="Search the catalog"
            />
          </form>
        </SheetContent>
      </Sheet>
    </header>
  );
}
