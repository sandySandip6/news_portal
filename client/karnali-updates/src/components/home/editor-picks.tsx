import Image from "next/image";
import Link from "next/link";
import type { HomeArticle } from "./data";
import { SectionHeader } from "./section-header";

type EditorPicksProps = {
  items: HomeArticle[];
};

export function EditorPicks({ items }: EditorPicksProps) {
  return (
    <section aria-labelledby="editor-picks-heading">
      <SectionHeader title="Editor’s picks" eyebrow="Staff favorites" href="/editors-picks" />
      <h2 id="editor-picks-heading" className="sr-only">
        Editor picks
      </h2>
      <ol className="space-y-0 overflow-hidden rounded-2xl border border-border bg-card">
        {items.map((article, i) => (
          <li key={article.id} className="border-b border-border last:border-b-0">
            <Link
              href={`/article/${article.id}`}
              className="flex gap-4 p-4 transition hover:bg-muted/60 sm:p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-black text-primary-foreground">
                {i + 1}
              </span>
              <div className="relative hidden size-20 shrink-0 overflow-hidden rounded-lg sm:block">
                <Image src={article.imageSrc} alt="" fill className="object-cover" sizes="80px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-primary">{article.category}</p>
                <h3 className="mt-1 font-heading text-base font-bold leading-snug hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
                <p className="mt-2 text-xs text-muted-foreground">{article.time}</p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
