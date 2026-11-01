function Pumpkin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <path d="M32 8c2-5 9-7 11-4" fill="none" stroke="#5c3b16" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 12c4-3 9-2 12 1" fill="none" stroke="#6f8f4e" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M16 36c0-11 6-20 12-20 2 6 4 12 4 20s-2 14-4 20c-6 0-12-9-12-20zm16-20c2 6 4 12 4 20s-2 14-4 20c2-6 4-12 4-20s-2-14-4-20zm4 0c6 0 12 9 12 20s-6 20-12 20c-2-6-4-12-4-20s2-14 4-20z"
        fill="#e07a3d"
      />
      <path d="M20 36h24M25 28c4 2 9 2 14 0M25 45c4-2 9-2 14 0" stroke="#b85a28" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Leaf({ className, fill = "#c4652f" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <path
        d="M24 4c8 8 16 10 18 18-6 2-10 8-10 16-6-2-12-2-18 0 0-8-4-14-10-16 2-8 10-10 20-18z"
        fill={fill}
      />
      <path d="M24 10c0 10-1 18-2 26" stroke="#5c3b16" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function Acorn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" aria-hidden className={className}>
      <path d="M6 14c0-6 5-10 10-10s10 4 10 10H6z" fill="#6b3a1f" />
      <path d="M8 14h16c-1 12-4 20-8 22-4-2-7-10-8-22z" fill="#c4893a" />
    </svg>
  );
}

/** A pumpkin and a leaf beside a heading. They stay in the line so they never cover the words. */
export function FallMark() {
  return (
    <span className="ml-1 inline-flex items-center gap-0.5 align-middle" aria-hidden>
      <Pumpkin className="size-8" />
      <Leaf className="size-7 -rotate-12" fill="#a33b24" />
    </span>
  );
}

/** Leaves and pumpkins hugging the edges, on every page. Clicks pass through. */
export function FallFrame() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 border-[8px] border-[#9a3f22] shadow-[inset_0_0_0_3px_#e2b15a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(122,62,24,0.12)_100%)]" />
      <Leaf className="absolute top-[6.6rem] left-1 size-8 -rotate-45" fill="#d9782d" />
      <Leaf className="absolute top-[7.4rem] left-8 hidden size-6 rotate-12 sm:block" fill="#a33b24" />
      <Pumpkin className="absolute top-28 -left-1 size-14 md:top-32 md:size-16" />
      <Leaf className="absolute top-48 left-1 size-9 rotate-[30deg]" fill="#b4532a" />
      <Acorn className="absolute top-1/2 left-1 h-8 w-6" />
      <Leaf className="absolute bottom-24 left-0 size-10 -rotate-12" fill="#c47a2c" />
      <Pumpkin className="absolute top-28 -right-1 size-14 md:size-16" />
      <Leaf className="absolute top-48 right-0 size-9 -rotate-[18deg]" fill="#8c3a22" />
      <Leaf className="absolute top-1/3 -right-1 size-11 -rotate-[20deg]" fill="#d9782d" />
      <Acorn className="absolute top-[58%] right-1 h-7 w-5 rotate-12" />
      <Pumpkin className="absolute right-0 bottom-12 size-16 md:bottom-8 md:size-20" />
      <Leaf className="absolute right-1 bottom-32 size-9 rotate-45" fill="#9a3f22" />
      <Pumpkin className="absolute bottom-1 left-2 size-12 md:left-6 md:size-14" />
      <Leaf className="absolute bottom-2 left-16 size-7 rotate-6" fill="#6f8f4e" />
      <Leaf className="absolute bottom-1 left-1/3 size-6 -rotate-6" fill="#c4652f" />
      <Leaf className="absolute bottom-2 right-1/3 hidden size-7 rotate-12 sm:block" fill="#a33b24" />
      <Leaf className="absolute right-20 bottom-1 size-8 -rotate-[24deg]" fill="#e2b15a" />
    </div>
  );
}
