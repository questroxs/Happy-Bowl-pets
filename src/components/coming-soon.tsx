import { LogoMark } from "@/components/logo";

const NOTES = [
  {
    title: "Hydration",
    copy: "Quiet stainless fountains, sized for a real kitchen.",
  },
  {
    title: "Mealtime",
    copy: "Bowls and feeders that slow the rush.",
  },
  {
    title: "Care",
    copy: "Beds, treats, and the small things we keep for our own.",
  },
];

export function ComingSoon() {
  return (
    <main className="mx-auto flex min-h-screen w-[min(100%-2rem,72rem)] flex-col">
      <header className="flex items-center justify-between gap-4 border-b border-line py-5">
        <div className="flex items-center gap-3">
          <LogoMark className="size-9" />
          <div className="leading-tight">
            <p className="font-display text-lg font-medium tracking-tight">Happy Bowl Co.</p>
            <p className="text-xs font-medium tracking-widest text-muted uppercase">Miami</p>
          </div>
        </div>
        <p className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold tracking-widest text-sage-dark uppercase">
          Opening soon
        </p>
      </header>

      <section className="grid items-center gap-12 py-12 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:gap-16 md:py-20">
        <div>
          <p className="text-sm font-semibold tracking-widest text-terra uppercase">For dogs and cats</p>
          <h1 className="mt-4 max-w-xl font-display text-5xl leading-tight font-medium tracking-tight md:text-7xl">
            Fresher water.
            <span className="mt-1 block text-sage-dark">Calmer days.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            A small shop of quiet fountains, slower meals, and everyday care. We are setting the
            floor. The doors open shortly.
          </p>

          <ol className="mt-10 max-w-lg border-y border-line">
            {NOTES.map((note, index) => (
              <li key={note.title} className="flex gap-4 border-b border-line py-4 last:border-b-0">
                <span className="w-8 shrink-0 font-display text-sm text-sage">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-xl font-medium">{note.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{note.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure>
          <div className="overflow-hidden rounded-xl bg-paper p-3 shadow-[var(--shadow-card)]">
            <img
              src="/products/hero.jpg"
              alt="An orange cat drinking from the quiet stainless fountain"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm text-muted">
            <span>Quiet stainless fountain</span>
            <span className="text-xs font-medium tracking-widest uppercase">First collection</span>
          </figcaption>
        </figure>
      </section>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-sm text-muted">
        <p>Dogs and cats only.</p>
        <p>happybowlpets.com</p>
      </footer>
    </main>
  );
}
