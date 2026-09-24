import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistSheet } from "@/components/waitlist-sheet";
import { NotifyDialog } from "@/components/notify-dialog";
import { CartSheet } from "@/components/cart-sheet";
import { ShopifyBridge } from "@/components/shopify-bridge";
import { ComingSoon } from "@/components/coming-soon";
import { isComingSoonHost } from "@/lib/public-host";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Happy Bowl Co.";

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
  loader: async () => ({ comingSoon: isComingSoonHost(await requestHost()) }),
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: loaderData?.comingSoon ? "Opening soon — Happy Bowl Co." : APP_NAME },
      {
        name: "description",
        content: loaderData?.comingSoon
          ? "Happy Bowl Co. is opening soon. Quiet stainless fountains, calmer mealtimes, and everyday care for dogs and cats."
          : "Happy Bowl Co. — quiet stainless fountains, calmer mealtimes, and thoughtful extras for dogs and cats.",
      },
      { name: "theme-color", content: "#f4efe6" },
      ...(loaderData?.comingSoon ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  const { comingSoon } = Route.useLoaderData();

  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-sand text-ink">
        <PreviewHostBridge />
        {comingSoon ? (
          <ComingSoon />
        ) : (
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
        )}
        <Scripts />
      </body>
    </html>
  );
}
