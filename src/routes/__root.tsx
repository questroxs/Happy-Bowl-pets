import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistSheet } from "@/components/waitlist-sheet";
import { NotifyDialog } from "@/components/notify-dialog";
import { CartSheet } from "@/components/cart-sheet";
import { ShopifyBridge } from "@/components/shopify-bridge";
import { isSupplierHost } from "@/lib/public-host";
import { SupplierNotesProvider } from "@/lib/supplier-notes";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Happy Bowl Pets Co.";

async function requestHost(): Promise<string> {
  if (import.meta.env.SSR) {
    const { getRequest } = await import("@tanstack/react-start/server");
    const request = getRequest();
    return (
      request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
      request.headers.get("host")?.split(",")[0]?.trim() ||
      ""
    );
  }
  return window.location.host;
}

export const Route = createRootRoute({
  loader: async () => ({ supplierNotes: isSupplierHost(await requestHost()) }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Happy Bowl Pets Co. — quiet stainless fountains, calmer mealtimes, and thoughtful extras for dogs and cats.",
      },
      { name: "theme-color", content: "#f4efe6" },
      {
        name: "google-site-verification",
        content: "J73VMfA6x35pelVjjbTdacfV5RXxL8jPZOgldZ5bq_o",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "192x192" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  const { supplierNotes } = Route.useLoaderData();

  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-sand text-ink">
        <PreviewHostBridge />
        <SupplierNotesProvider value={supplierNotes}>
          <AuthProvider>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
            <WaitlistSheet />
            <CartSheet />
            <NotifyDialog />
            <ShopifyBridge />
            <Toaster
              position="bottom-center"
              toastOptions={{
                className: "font-sans",
              }}
            />
          </AuthProvider>
        </SupplierNotesProvider>
        <Scripts />
      </body>
    </html>
  );
}
