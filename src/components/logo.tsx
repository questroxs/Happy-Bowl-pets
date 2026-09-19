import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 place-items-center rounded-full border border-sage-soft bg-sage-soft font-display text-sm font-semibold text-sage-dark",
        className,
      )}
      aria-hidden="true"
    >
      HB
    </span>
  );
}
