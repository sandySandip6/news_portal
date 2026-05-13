"use client";

import { type FormEvent, useState } from "react";
import { SectionHeader } from "./section-header";

export function NewsletterSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2500);
  }

  return (
    <section
      className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-white shadow-lg dark:from-zinc-950 dark:to-black"
      aria-labelledby="newsletter-heading"
    >
      <SectionHeader
        className="mb-4"
        title="Morning briefing"
        eyebrow="Newsletter"
        href="/newsletter"
        linkLabel="Archive"
        inverted
      />
      <h2 id="newsletter-heading" className="sr-only">
        Newsletter signup
      </h2>
      <p className="text-sm text-zinc-300">
        Start your day with Karnali Updates: top stories, explainers, and data-driven briefings—free in your inbox.
      </p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          className="min-h-11 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-zinc-500 outline-none ring-red-500/40 focus:ring-2"
        />
        <button
          type="submit"
          className="min-h-11 shrink-0 rounded-xl bg-red-600 px-5 text-sm font-bold transition hover:bg-red-700"
        >
          {sent ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
      <p className="mt-3 text-xs text-zinc-500">
        We respect your inbox. Unsubscribe anytime. This demo only simulates signup.
      </p>
    </section>
  );
}
