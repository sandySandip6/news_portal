import Link from "next/link";
import type { OpinionPiece } from "./data";
import { SectionHeader } from "./section-header";

type OpinionSectionProps = {
  items: OpinionPiece[];
};

export function OpinionSection({ items }: OpinionSectionProps) {
  return (
    <section aria-labelledby="opinion-heading">
      <SectionHeader title="Opinion & analysis" eyebrow="Perspectives" href="/opinion" />
      <h2 id="opinion-heading" className="sr-only">
        Opinion
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((piece) => (
          <Link
            key={piece.id}
            href={`/opinion/${piece.id}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 p-6 transition hover:border-red-600/35 hover:shadow-md"
          >
            <span
              className="font-heading text-5xl font-black leading-none text-red-600/20 transition group-hover:text-red-600/30"
              aria-hidden
            >
              “
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold leading-snug group-hover:text-red-600">
              {piece.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{piece.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                {piece.author
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{piece.author}</p>
                <p className="truncate text-xs text-muted-foreground">{piece.role}</p>
              </div>
              <p className="ml-auto shrink-0 text-xs text-muted-foreground">{piece.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
