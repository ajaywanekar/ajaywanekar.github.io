import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/home/Sections";
import { Nav } from "@/components/Nav";
import { Starfield } from "@/components/Starfield";
import { site } from "@/data/profile";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | AI/ML · Computer Vision · VLMs`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen font-sans text-fg">
        {/* Fixed space backdrop: stars, nebula haze and film grain. */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <Starfield />
          <div className="nebula absolute inset-0" />
          <div className="grain absolute inset-0" />
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
