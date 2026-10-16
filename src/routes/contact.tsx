import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact | Happy Bowl Pets Co.",
      description:
        "Email Happy Bowl Pets Co. at info@happybowlpets.com for an order, a return, or a question about a fountain, filter, bowl, or toy.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto w-[min(100%-2rem,42rem)] py-12">
      <p className="text-sm font-semibold tracking-widest text-terra uppercase">House notes</p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">Contact</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>Happy Bowl Pets Co. is a shop for dogs and cats, based in Miami, Florida.</p>
        <p>
          Email{" "}
          <a href="mailto:info@happybowlpets.com" className="font-medium text-sage-dark">
            info@happybowlpets.com
          </a>{" "}
          for orders, shipping, and returns. We read every note.
        </p>
      </div>
    </main>
  );
}
