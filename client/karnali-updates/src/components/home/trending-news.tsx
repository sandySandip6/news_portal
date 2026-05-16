import Image from "next/image";
import Link from "next/link";
import type { HomeArticle } from "./data";
import { SectionHeader } from "./section-header";

type TrendingNewsProps = {
  items: HomeArticle[];
};

export function TrendingNews({ items }: TrendingNewsProps) {
  return (
    <section aria-labelledby="trending-heading">
      <SectionHeader title="Trending now" eyebrow="Most read" href="/trending" />
      <h2 id="trending-heading" className="sr-only">
        Trending news
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((article, i) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40 hover:shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={article.imageSrc}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground shadow-lg">
                {i + 1}
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {article.category}
              </p>
              <h3 className="mt-2 line-clamp-2 font-heading text-base font-bold leading-snug group-hover:text-primary">
                {article.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
              <p className="mt-3 text-xs text-muted-foreground">{article.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
