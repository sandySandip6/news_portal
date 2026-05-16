import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
  /** Use on dark panels (e.g. newsletter card) */
  inverted?: boolean;
};

export function SectionHeader({
  title,
  eyebrow,
  href,
  linkLabel = "View all",
  className,
  inverted,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4",
        inverted && "border-white/15",
        className,
      )}
    >
      <div>
        {eyebrow ? (
          <p
            className={cn(
              "text-xs font-semibold tracking-widest uppercase",
              inverted ? "text-accent" : "text-primary",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "mt-1 font-heading text-2xl font-black tracking-tight sm:text-3xl",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
      </div>
      {href ? (
        <Link
          href={href}
          className={cn(
            "text-sm font-semibold transition",
            inverted
              ? "text-accent hover:text-foreground"
              : "text-primary hover:text-primary/80",
          )}
        >
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}
