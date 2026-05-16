import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import KarnaliUpdatesNavbar from "@/components/layout/navbar";
import KarnaliUpdatesFooter from "@/components/layout/footer";
import { Providers } from "@/components/layout/theme";
import { ThemeScript } from "@/components/layout/theme-script";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karnali Updates",
  description: "Truth · Fast · Reliable — news from Karnali Province and across Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={cn(
          "flex min-h-full flex-col bg-background font-sans text-foreground antialiased",
          geistSans.variable,
          geistMono.variable,
          geist.variable
        )}
      >
        <Providers>
          <KarnaliUpdatesNavbar />
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
          <KarnaliUpdatesFooter />
        </Providers>
      </body>
    </html>
  );
}
