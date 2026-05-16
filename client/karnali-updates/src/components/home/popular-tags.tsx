import Link from "next/link";
import { SectionHeader } from "./section-header";

type PopularTagsProps = {
  tags: string[];
};

export function PopularTags({ tags }: PopularTagsProps) {
  return (
    <section aria-labelledby="tags-heading">
      <SectionHeader title="Popular tags" eyebrow="Topics" href="/topics" />
      <h2 id="tags-heading" className="sr-only">
        Popular tags
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}`}
            className="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </section>
  );
}
