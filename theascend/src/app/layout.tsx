import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Ascend | Your Partner for People Transformation",
    template: "%s | The Ascend",
  },
  description:
    "Shape your organization's future. The Ascend aligns your talent with tomorrow's success through strategic talent management, leadership assessments, employee insights, and innovative learning solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // No h-full on <html>: a fixed-height root stops Lenis's resize observer
  // from seeing the page grow, which caps smooth scrolling partway down.
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-svh flex-col antialiased">
        <PageLoader />
        <SmoothScroll />
        <ScrollProgress />
        <div className="grain-overlay" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[800] focus:rounded-md focus:bg-summit-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
