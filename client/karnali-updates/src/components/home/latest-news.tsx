import Image from "next/image";
import Link from "next/link";
import type { HomeArticle } from "./data";
import { SectionHeader } from "./section-header";

type LatestNewsProps = {
  items: HomeArticle[]; 
};

export function LatestNews({ items }: LatestNewsProps) {
  return (
    <section aria-labelledby="latest-heading">
      <SectionHeader title="Latest news" eyebrow="Updated throughout the day" href="/latest" />
      <h2 id="latest-heading" className="sr-only">
        Latest news
      </h2>
      <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
        {items.map((article) => (
          <li key={article.id}>
            <Link
              href={`/article/${article.id}`}
              className="flex gap-4 p-4 transition hover:bg-muted/60 sm:gap-5 sm:p-5"
            >
              <div className="relative hidden shrink-0 overflow-hidden rounded-xl sm:block sm:size-28">
                <Image
                  src={article.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-red-600">{article.category}</span>
                  <span aria-hidden>·</span>
                  <time>{article.time}</time>
                </div>
                <h3 className="mt-1 font-heading text-lg font-bold leading-snug sm:text-xl">
                  {article.title}
                </h3>
                {article.excerpt ? (
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
