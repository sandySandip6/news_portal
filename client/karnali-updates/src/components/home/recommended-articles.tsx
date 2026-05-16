import Image from "next/image";
import Link from "next/link";
import type { HomeArticle } from "./data";
import { SectionHeader } from "./section-header";

type RecommendedArticlesProps = {
  items: HomeArticle[];
};

export function RecommendedArticles({ items }: RecommendedArticlesProps) {
  return (
    <section aria-labelledby="recommended-heading">
      <SectionHeader title="Recommended" eyebrow="For you" href="/recommended" />
      <h2 id="recommended-heading" className="sr-only">
        Recommended articles
      </h2>
      <ul className="space-y-4">
        {items.map((article) => (
          <li key={article.id}>
            <Link
              href={`/article/${article.id}`}
              className="group flex gap-4 rounded-xl border border-border bg-card p-3 transition hover:border-primary/30 hover:bg-muted/50"
            >
              <div className="relative size-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={article.imageSrc}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-primary">{article.category}</p>
                <h3 className="mt-1 line-clamp-2 font-heading text-sm font-bold leading-snug group-hover:text-primary sm:text-base">
                  {article.title}
                </h3>
                {article.excerpt ? (
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{article.excerpt}</p>
                ) : null}
                <p className="mt-2 text-xs text-muted-foreground">{article.time}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
