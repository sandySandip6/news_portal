import Image from "next/image";
import { BreakingHeroSlider } from "@/components/home/breaking-hero-slider";
import {
  BREAKING_SLIDES,
  EDITOR_PICKS,
  ENTERTAINMENT,
  INTERNATIONAL,
  LATEST,
  OPINION,
  POLITICS,
  POPULAR_TAGS,
  RECOMMENDED,
  SHORT_NEWS,
  SPORTS,
  TECHNOLOGY,
  TRENDING,
} from "@/components/home/data";
import { CategoryRail } from "@/components/home/category-rail";
import { EditorPicks } from "@/components/home/editor-picks";
import { LatestNews } from "@/components/home/latest-news";
import { LiveUpdatesTicker } from "@/components/home/live-updates-ticker";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { OpinionSection } from "@/components/home/opinion-section";
import { PopularTags } from "@/components/home/popular-tags";
import { RecommendedArticles } from "@/components/home/recommended-articles";
import { ShortNewsStrip } from "@/components/home/short-news-strip";
import { TrendingNews } from "@/components/home/trending-news";

const FEATURED = {
  badge: "Breaking News",
  title: "Nepal launches new technology innovation program",
  excerpt:
    "Government announces major digital transformation initiative.",
  imageSrc: "/news.jpg",
  imageAlt: "Featured news story",
} as const;

const SIDE_STORIES: { category: string; title: string }[] = [
  {
    category: "Technology",
    title: "AI startups are growing rapidly in South Asia",
  },
  {
    category: "Politics",
    title: "Provincial assembly debates new infrastructure bill",
  },
  {
    category: "Sports",
    title: "National football league announces expanded schedule",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-background text-foreground">
      {/* <LiveUpdatesTicker /> */}

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 lg:space-y-16 lg:px-6 lg:py-10">
        <BreakingHeroSlider slides={BREAKING_SLIDES} />

        <section
          aria-labelledby="featured-heading"
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          <article className="group relative h-[min(500px,70vh)] cursor-pointer overflow-hidden rounded-3xl border border-border">
            <Image
              src={FEATURED.imageSrc}
              alt={FEATURED.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/55 p-6 text-white sm:p-8">
              <span className="w-fit rounded-full bg-red-600 px-3 py-1 text-sm">
                {FEATURED.badge}
              </span>
              <h1
                id="featured-heading"
                className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl"
              >
                {FEATURED.title}
              </h1>
              <p className="mt-3 text-zinc-200">{FEATURED.excerpt}</p>
            </div>
          </article>

          <aside className="flex flex-col gap-4" aria-label="More headlines">
            {SIDE_STORIES.map((story) => (
              <article
                key={story.title}
                className="rounded-2xl border border-border bg-card p-5 text-card-foreground transition hover:bg-muted"
              >
                <span className="text-sm font-semibold text-red-600">{story.category}</span>
                <h2 className="mt-2 font-heading text-xl font-semibold">{story.title}</h2>
              </article>
            ))}
          </aside>
        </section>

        <TrendingNews items={TRENDING} />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-12 lg:col-span-8 lg:space-y-16">
            <LatestNews items={LATEST} />

            <CategoryRail
              title="Politics"
              eyebrow="Capitol & policy"
              href="/politics"
              items={POLITICS}
            />

            <CategoryRail title="Sports" eyebrow="Leagues & athletes" href="/sports" items={SPORTS} />

            <ShortNewsStrip items={SHORT_NEWS} />

            <div>
              {/* <CategoryRail
              title="Entertainment"
              eyebrow="Culture & screens"
              href="/entertainment"
              items={ENTERTAINMENT}
            />

            <CategoryRail
              title="Technology"
              eyebrow="Innovation & digital life"
              href="/technology"
              items={TECHNOLOGY}
            />

            <CategoryRail
              title="International"
              eyebrow="World desk"
              href="/world"
              items={INTERNATIONAL}
            /> */}
            </div>

            {/* <OpinionSection items={OPINION} /> */}
          </div>

          <aside className="space-y-10 lg:col-span-4 lg:space-y-12">
            <RecommendedArticles items={RECOMMENDED} />
            <NewsletterSection />
            <EditorPicks items={EDITOR_PICKS} />
            <PopularTags tags={POPULAR_TAGS} />
          </aside>
        </div>
      </div>
    </main>
  );
}
