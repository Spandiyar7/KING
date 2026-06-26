import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "KING COLLECTION - премиальная мягкая мебель",
    template: "%s - KING COLLECTION"
  },
  description:
    "KING COLLECTION создает премиальную мягкую и корпусную мебель: диваны, кресла, кровати, шкафы, гардеробные и кухни для современных интерьеров.",
  openGraph: {
    title: "KING COLLECTION",
    description: "Luxury furniture catalogue from Almaty, Kazakhstan.",
    url: siteConfig.url,
    siteName: "KING COLLECTION",
    images: [
      {
        url: "/images/hero/king-hero.png",
        width: 1672,
        height: 941,
        alt: "KING COLLECTION interior"
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
    <html lang="ru" className={montserrat.variable}>
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
