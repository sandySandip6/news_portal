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
      className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-6 text-foreground shadow-lg"
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
      <p className="text-sm text-muted-foreground">
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
          className="min-h-11 flex-1 rounded-xl border border-border bg-muted/50 px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-primary/40 focus:ring-2"
        />
        <button
          type="submit"
          className="min-h-11 shrink-0 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
        >
          {sent ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
      <p className="mt-3 text-xs text-muted-foreground">
        We respect your inbox. Unsubscribe anytime. This demo only simulates signup.
      </p>
    </section>
  );
}
