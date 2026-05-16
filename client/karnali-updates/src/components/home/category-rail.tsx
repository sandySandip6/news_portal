import Image from "next/image";
import Link from "next/link";
import type { HomeArticle } from "./data";
import { SectionHeader } from "./section-header";

type CategoryRailProps = {
  title: string;
  eyebrow?: string;
  href: string;
  items: HomeArticle[];
};

export function CategoryRail({ title, eyebrow, href, items }: CategoryRailProps) {
  return (
    <section aria-label={title}>
      <SectionHeader title={title} eyebrow={eyebrow} href={href} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={article.imageSrc}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs font-semibold text-primary">{article.category}</p>
              <h3 className="mt-2 line-clamp-2 flex-1 font-heading text-base font-bold leading-snug group-hover:text-primary">
                {article.title}
              </h3>
              {article.excerpt ? (
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
              ) : null}
              <p className="mt-3 text-xs text-muted-foreground">{article.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
