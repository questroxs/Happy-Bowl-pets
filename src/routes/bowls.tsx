import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/seo-category";
import { breadcrumbLd, pageHead, seoCategory } from "@/lib/seo";

const category = seoCategory("bowls");

export const Route = createFileRoute("/bowls")({
  head: () =>
    pageHead({
      title: category.title,
      description: category.description,
      path: category.path,
      image: "/products/preview/slow-meal-mat.jpg",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: category.nav, path: category.path },
        ]),
      ],
    }),
  component: function BowlsPage() {
    return <SeoCategoryPage category={category} />;
  },
});
