import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistSheet } from "@/components/waitlist-sheet";
import { NotifyDialog } from "@/components/notify-dialog";
import { CartSheet } from "@/components/cart-sheet";
import { ShopifyBridge } from "@/components/shopify-bridge";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Happy Bowl Co.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Happy Bowl Co. — quiet stainless fountains, calmer mealtimes, and thoughtful extras for dogs and cats.",
      },
      { name: "theme-color", content: "#f4efe6" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-sand text-ink">
        <PreviewHostBridge />
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
        <Scripts />
      </body>
    </html>
  ),
});
