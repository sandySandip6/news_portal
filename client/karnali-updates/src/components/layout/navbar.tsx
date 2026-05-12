'use client'


export default function KarnaliUpdatesNavbar() {
    const categories = [
      "Politics",
      "World",
      "Technology",
      "Sports",
      "Business",
      "Entertainment",
      "Health",
      "Education",
    ];
  
    return (
      <header className="w-full border-b border-zinc-800 bg-black text-white sticky top-0 z-50 backdrop-blur-xl">
        {/* Top Breaking News Bar */}
        <div className="bg-red-600 text-white text-sm overflow-hidden">
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
                <p className="text-xs text-zinc-400 tracking-wider uppercase">
                  Truth • Fast • Reliable
                </p>
              </div>
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-7 font-medium">
              <a
                href="#"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Home
              </a>
  
              {categories.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
  
            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="hidden md:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-xl transition-all duration-300 border border-zinc-800">
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
  
                <span className="text-sm text-zinc-300">Search</span>
              </button>
  
              {/* Live News */}
              <button className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-600/30">
                Live News
              </button>
  
              {/* Mobile Menu */}
              <button className="lg:hidden p-2 rounded-lg border border-zinc-800 hover:bg-zinc-900">
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
        <div className="border-t border-zinc-900 bg-zinc-950">
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
                  className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-red-600 transition-all duration-300 text-sm border border-zinc-800"
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
  