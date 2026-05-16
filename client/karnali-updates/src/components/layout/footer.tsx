import type { ReactNode } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebook, FaYoutube} from "react-icons/fa"; 



const SECTIONS = [
  { label: "Politics", href: "/politics" },
  { label: "World", href: "/world" },
  { label: "Technology", href: "/technology" },
  { label: "Sports", href: "/sports" },
  { label: "Business", href: "/business" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Health", href: "/health" },
  { label: "Education", href: "/education" },
] as const;

const COMPANY = [
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Advertise", href: "/advertise" },
  { label: "Corrections", href: "/corrections" },
] as const;

const LEGAL = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
  { label: "Cookie settings", href: "/cookies" },
  { label: "Code of ethics", href: "/ethics" },
] as const;

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebook },
  // { label: "YouTube", href: "https://www.youtube.com", icon: FaYoutube },
  { label: "Newsroom email", href: "mailto:news@karnaliupdates.com", icon: Mail },
] as const;

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition hover:text-primary"
    >
      {children}
    </Link>
  );
}

export default function KarnaliUpdatesFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto shrink-0 border-t border-border bg-secondary text-foreground/90">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-xl font-black text-primary-foreground shadow-lg shadow-primary/25">
                K
              </span>
              <span>
                <span className="block font-heading text-xl font-black tracking-tight text-foreground">
                  Karnali Updates
                </span>
                <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Truth · Fast · Reliable
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Independent reporting from Karnali Province and across Nepal—verified
              sources, clear context, and updates you can trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Sections
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SECTIONS.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + newsletter CTA */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="font-heading text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Legal &amp; standards
            </h2>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-border bg-muted/80 p-5">
              <p className="font-heading text-sm font-bold text-foreground">Morning briefing</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Top stories in your inbox. Free, unsubscribe anytime.
              </p>
              <Link
                href="/newsletter"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/80 bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-muted-foreground sm:flex-row lg:px-6">
          <p>
            © {year} Karnali Updates. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Surkhet, Karnali Province, Nepal · Serving readers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
