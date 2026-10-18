function Pumpkin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <path d="M32 10c2-6 8-8 10-6" fill="none" stroke="#5c7a64" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M18 34c0-10 5-18 10-18 2 5 4 11 4 18s-2 13-4 18c-5 0-10-8-10-18zm14-18c2 5 4 11 4 18s-2 13-4 18c2-5 4-11 4-18s-2-13-4-18zm4 0c5 0 10 8 10 18s-5 18-10 18c-2-5-4-11-4-18s2-13 4-18z"
        fill="#e07a3d"
      />
      <path d="M22 34h20M26 26c4 2 8 2 12 0M26 42c4-2 8-2 12 0" stroke="#c4652f" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Bat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 36" aria-hidden className={className} fill="#2f322f">
      <path d="M6 20c8-2 10-12 16-14 2 6 8 10 14 10h8c6 0 12-4 14-10 6 2 8 12 16 14-8 2-10-2-16-4-2 8-8 12-14 12h-8c-6 0-12-4-14-12-6 2-8 6-16 4z" />
      <circle cx="34" cy="18" r="1.3" fill="#f4efe6" />
      <circle cx="46" cy="18" r="1.3" fill="#f4efe6" />
    </svg>
  );
}

function Ghost({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" aria-hidden className={className}>
      <path
        d="M10 24c0-10 6-18 14-18s14 8 14 18v20l-5-4-4 4-5-4-5 4-4-4-5 4V24z"
        fill="#fffcf8"
        stroke="#2f322f"
        strokeWidth="2"
      />
      <circle cx="19" cy="24" r="2" fill="#2f322f" />
      <circle cx="29" cy="24" r="2" fill="#2f322f" />
      <path d="M20 31c2 2 6 2 8 0" fill="none" stroke="#e07a3d" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Candy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 48" aria-hidden className={className}>
      <path d="M18 4 30 18H6z" fill="#f4efe6" stroke="#2f322f" strokeWidth="1.4" />
      <path d="M6 18h24L18 34z" fill="#e07a3d" />
      <path d="M10 34h16L18 46z" fill="#f0c79a" />
    </svg>
  );
}

/** Stickers only. They sit on top of the existing homepage and do not move the layout. */
export function HeroTreats() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
      <Bat className="absolute top-3 left-[6%] w-14 md:top-5 md:w-20" />
      <Bat className="absolute top-10 left-[18%] w-9 -scale-x-100 md:top-14 md:w-12" />
      <Pumpkin className="absolute top-2 right-[4%] size-12 md:top-4 md:right-[7%] md:size-20" />
      <Ghost className="absolute top-1 left-1/2 size-8 -translate-x-1/2 md:top-3 md:size-11" />
      <Candy className="absolute top-3 right-[22%] hidden h-9 w-7 md:block" />
    </div>
  );
}

/** A pumpkin and a bat that sit beside a heading, in the flow, so they never cover the words. */
export function InlineTreats() {
  return (
    <span className="ml-1 inline-flex items-center gap-0.5 align-middle" aria-hidden>
      <Pumpkin className="size-8" />
      <Bat className="w-10" />
    </span>
  );
}
