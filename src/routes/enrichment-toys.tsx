import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/seo-category";
import { breadcrumbLd, pageHead, seoCategory } from "@/lib/seo";

const category = seoCategory("enrichment-toys");

export const Route = createFileRoute("/enrichment-toys")({
  head: () =>
    pageHead({
      title: category.title,
      description: category.description,
      path: category.path,
      image: "/products/feeder.jpg",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: category.nav, path: category.path },
        ]),
      ],
    }),
  component: function ToysPage() {
    return <SeoCategoryPage category={category} />;
  },
});
