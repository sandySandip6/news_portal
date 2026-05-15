"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LiveUpdatesTicker } from "../home/live-updates-ticker";

const NavbarAuth = dynamic(
  () => import("./navbar-auth").then((m) => m.NavbarAuth),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-10 shrink-0 items-center gap-2">
        <div className="h-10 w-16 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-10 w-20 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
      </div>
    ),
  }
);

const mainNavLinks = [
  { label: "Home", href: "#" },
  { label: "Latest", href: "#" },
  { label: "Nepal", href: "#" },
  { label: "World", href: "#" },
] as const;

const moreCategories = [
  "Politics",
  "Technology",
  "Sports",
  "Business",
  "Entertainment",
  "Health",
  "Education",
];

export default function KarnaliUpdatesNavbar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;

    function onPointerDown(e: PointerEvent) {
      if (
        moreWrapRef.current &&
        !moreWrapRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMoreOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  return (
    <header className="relative z-10 w-full shrink-0 border-b border-zinc-200 bg-white text-zinc-900 dark:border-zinc-800 dark:bg-black dark:text-white">
      {/* Top Breaking News Bar */}
      {/* <div className="bg-red-600 text-white text-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 whitespace-nowrap">
            <span className="font-bold uppercase tracking-wide">
              Breaking
            </span>
  
            <div className="animate-marquee inline-block">
              Nepal Government Announces New Digital Media Policy • Karnali
              Province Expands Internet Access • AI Is Reshaping News Industry
              Worldwide
            </div>
          </div>
        </div> */}
      <div className="p-4" >
        <LiveUpdatesTicker />
      </div>
      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center font-black text-xl shadow-lg shadow-red-600/30">
              K
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                Karnali Updates
              </h1>
              <p className="text-xs tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                Truth • Fast • Reliable
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7 font-medium">
            {mainNavLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-red-500 transition-colors duration-300"
              >
                {label}
              </a>
            ))}

            <div className="relative" ref={moreWrapRef}>
              <button
                type="button"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-controls="nav-more-menu"
                onClick={() => setMoreOpen((o) => !o)}
                className="flex items-center gap-1 hover:text-red-500 transition-colors duration-300"
              >
                More
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""
                    }`}
                  aria-hidden
                />
              </button>

              {moreOpen ? (
                <div
                  id="nav-more-menu"
                  role="menu"
                  aria-orientation="vertical"
                  className="absolute right-0 top-full z-50 mt-2 min-w-[13rem] rounded-xl border border-zinc-200 bg-white py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  {moreCategories.map((item) => (
                    <a
                      key={item}
                      href="#"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 hover:text-red-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
                      onClick={() => setMoreOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Live News */}
            <button className="bg-red-600 text-white hover:bg-red-700 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-600/30">
              Live News
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Search */}
            <button className="hidden items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-2 transition-all duration-300 hover:bg-zinc-200 md:flex dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15Z"
                />
              </svg>

              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                Search
              </span>
            </button>

            <NavbarAuth key={pathname} />

            {/* Mobile Menu */}
            <button className="rounded-lg border border-zinc-200 p-2 hover:bg-zinc-100 lg:hidden dark:border-zinc-800 dark:hover:bg-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Category Scroll */}
      <div className="border-t border-zinc-200 bg-zinc-100 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-3 min-w-max">
            {[
              "Trending",
              "Election",
              "Climate",
              "Startups",
              "Crypto",
              "AI",
              "Global Conflict",
              "Football",
              "Cinema",
              "Nepal",
            ].map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-zinc-300 bg-zinc-200 px-4 py-2 text-sm transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-red-600"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
  
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
  
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
    </header>
  );
}
