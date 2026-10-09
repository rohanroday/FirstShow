import type { Metadata, Viewport } from "next";
import { Anton, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });
const body = Instrument_Sans({ variable: "--font-body", weight: ["400", "500", "600"], subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-plex-mono", weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIRSTSHOW · First Day. First Show. From Home.",
  description:
    "Buy a digital cinema ticket and watch new releases on release day, at a real showtime, on your own screen.",
  // DEPLOY STEP: add metadataBase with the live URL so og:image and og:url become absolute.
  openGraph: {
    title: "FIRSTSHOW · First Day. First Show. From Home.",
    description: "Digital cinema tickets for new releases.",
    images: ["/hero/hero-ending.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#120e0c" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${body.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <div className="env" aria-hidden="true" />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
