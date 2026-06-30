import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "@/components/CursorFollower";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { ScrollEffects } from "@/components/ScrollEffects";
import { assetPath } from "@/config/paths";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600"],
  display: "swap"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "KING ATELIER — премиальная мебель на заказ",
    template: "%s — KING ATELIER"
  },
  description:
    "KING ATELIER — мебельная мастерская в Алматы: премиальная мягкая и корпусная мебель любой сложности под заказ — диваны, кресла, кровати, шкафы, гардеробные и кухни.",
  openGraph: {
    title: "KING ATELIER",
    description: "Мебельная мастерская в Алматы. Премиальная мягкая и корпусная мебель под заказ.",
    url: siteConfig.url,
    siteName: "KING ATELIER",
    images: [
      {
        url: "/images/hero/king-hero.png",
        width: 1672,
        height: 941,
        alt: "KING ATELIER interior"
      }
    ],
    locale: "ru_KZ",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: assetPath("/icon.svg"),
    shortcut: assetPath("/icon.svg")
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${cinzel.variable}`}>
      <body>
        <ScrollEffects />
        <CursorFollower />
        <PageTransition />
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
