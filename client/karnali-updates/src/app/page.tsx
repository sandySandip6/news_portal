import Image from "next/image";

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
    <main className="flex-1 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <section
          aria-labelledby="featured-heading"
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          <article className="group relative h-[min(500px,70vh)] cursor-pointer overflow-hidden rounded-3xl">
            <Image
              src={FEATURED.imageSrc}
              alt={FEATURED.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-6 sm:p-8">
              <span className="w-fit rounded-full bg-red-600 px-3 py-1 text-sm">
                {FEATURED.badge}
              </span>
              <h1
                id="featured-heading"
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl"
              >
                {FEATURED.title}
              </h1>
              <p className="mt-3 text-gray-300">{FEATURED.excerpt}</p>
            </div>
          </article>

          <aside className="flex flex-col gap-4" aria-label="More headlines">
            {SIDE_STORIES.map((story) => (
              <article
                key={story.title}
                className="rounded-2xl bg-slate-900 p-5 transition hover:bg-slate-800"
              >
                <span className="text-sm text-red-500">{story.category}</span>
                <h2 className="mt-2 text-xl font-semibold">{story.title}</h2>
              </article>
            ))}
          </aside>
        </section>
      </div>
    </main>
  );
}
