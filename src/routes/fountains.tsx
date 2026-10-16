import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/seo-category";
import { breadcrumbLd, pageHead, seoCategory } from "@/lib/seo";

const category = seoCategory("fountains");

export const Route = createFileRoute("/fountains")({
  head: () =>
    pageHead({
      title: category.title,
      description: category.description,
      path: category.path,
      image: "/products/fountain-2l.jpg",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: category.nav, path: category.path },
        ]),
      ],
    }),
  component: function FountainsPage() {
    return <SeoCategoryPage category={category} />;
  },
});
