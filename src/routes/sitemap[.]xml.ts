import { createFileRoute } from "@tanstack/react-router";
import { previewCatalog } from "@/lib/catalog-preview";

const SITE = "https://happybowlpets.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [
          "/",
          "/shop",
          "/about",
          ...previewCatalog().map((product) => `/product/${product.slug}`),
        ];
        const urls = paths
          .map(
            (path) =>
              `  <url><loc>${SITE}${path}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
