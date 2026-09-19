import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "sage",
  children,
}: {
  className?: string;
  tone?: "sage" | "terra" | "muted";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
        tone === "sage" && "bg-sage-soft text-sage-dark",
        tone === "terra" && "bg-terra-soft text-destructive",
        tone === "muted" && "bg-sand-deep text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
