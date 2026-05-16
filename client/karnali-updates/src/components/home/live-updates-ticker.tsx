import { LIVE_TICKER_ITEMS } from "./data";

export function LiveUpdatesTicker() {
  const line = LIVE_TICKER_ITEMS.join("  •  ");

  return (
    <div
      className="border-b border-primary/30 bg-primary text-primary-foreground"
      role="region"
      aria-label="Live updates"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 lg:px-6">
        <span className="hidden shrink-0 items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase sm:inline-flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Live
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="live-ticker-track flex gap-12 whitespace-nowrap text-sm font-medium">
            <span>{line}</span>
            <span aria-hidden>{line}</span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes live-ticker-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .live-ticker-track {
          width: max-content;
          animation: live-ticker-marquee 45s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .live-ticker-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
