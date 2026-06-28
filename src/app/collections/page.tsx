import type { Metadata } from "next";
import { CollectionRail } from "@/components/CollectionRail";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Коллекции",
  description: "Коллекции дизайнерских диванов KING COLLECTION: Radius, Cloud, Soft Line и Modulo."
};

export default function CollectionsPage() {
  return (
    <main className="bg-[#f8f8f7]">
      <PageHero
        eyebrow="Коллекции"
        title="Наши коллекции"
        description="Дизайнерские коллекции мягкой мебели KING: Radius, Cloud, Soft Line и Modulo."
        image="/images/hero/king-hero.png"
      />
      <CollectionRail title="Наши коллекции" />
    </main>
  );
}
