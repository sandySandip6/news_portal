import Link from "next/link";
import type { ShortBullet } from "./data";
import { SectionHeader } from "./section-header";

type ShortNewsStripProps = {
  items: ShortBullet[];
};

export function ShortNewsStrip({ items }: ShortNewsStripProps) {
  return (
    <section aria-labelledby="short-news-heading">
      <SectionHeader title="In brief" eyebrow="Short headlines" href="/briefs" />
      <h2 id="short-news-heading" className="sr-only">
        Short news
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((n) => (
          <Link
            key={n.id}
            href={`/brief/${n.id}`}
            className="flex gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/35 hover:bg-muted/40"
          >
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-primary">{n.category}</p>
              <p className="mt-1 font-medium leading-snug">{n.title}</p>
              <p className="mt-2 text-xs text-muted-foreground">{n.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
