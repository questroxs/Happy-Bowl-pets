import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/seo-category";
import { breadcrumbLd, pageHead, seoCategory } from "@/lib/seo";

const category = seoCategory("fountain-filters");

export const Route = createFileRoute("/fountain-filters")({
  head: () =>
    pageHead({
      title: category.title,
      description: category.description,
      path: category.path,
      image: "/products/filters.jpg",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: category.nav, path: category.path },
        ]),
      ],
    }),
  component: function FiltersPage() {
    return <SeoCategoryPage category={category} />;
  },
});
