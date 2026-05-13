"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { HomeArticle } from "./data";
import { cn } from "@/lib/utils";

type BreakingHeroSliderProps = {
  slides: HomeArticle[];
};

const INTERVAL_MS = 7000;

export function BreakingHeroSlider({ slides }: BreakingHeroSliderProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const safeCount = Math.max(count, 1);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + safeCount) % safeCount);
    },
    [safeCount],
  );

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const slide = slides[index]!;

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
      aria-roledescription="carousel"
      aria-label="Breaking news"
    >
      <div className="relative aspect-[21/9] min-h-[280px] w-full sm:min-h-[320px]">
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt ?? slide.title}
          fill
          priority={index === 0}
          className="object-cover transition duration-700"
          sizes="(max-width: 1280px) 100vw, 1152px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              Breaking
            </span>
            <span className="text-xs font-medium text-white/80">{slide.time}</span>
            <span className="text-xs font-medium text-red-300">{slide.category}</span>
          </div>
          <h2 className="mt-3 max-w-4xl font-heading text-2xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>
          {slide.excerpt ? (
            <p className="mt-3 max-w-2xl text-sm text-zinc-200 sm:text-base">{slide.excerpt}</p>
          ) : null}
        </div>
      </div>

      {count > 1 ? (
        <>
          <div className="absolute top-4 right-4 flex gap-2 sm:top-6 sm:right-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
          <div
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6"
            role="tablist"
            aria-label="Slide indicators"
          >
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${s.title}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-8 bg-red-500" : "w-2 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
