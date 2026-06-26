import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = {
  title: "Продукты",
  description: "Каталог KING COLLECTION: мягкая мебель, шкафы, гардеробные и кухни под индивидуальные интерьеры."
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="Продукты"
        description="Мягкая и корпусная мебель, собранная как журнальный каталог: диваны, кресла, кровати, шкафы, гардеробные и кухни под проект."
        image="/images/products/cloud-arc/cloud-arc-01.png"
      />
      <Suspense fallback={<div className="bg-[#f8f8f7] py-24 text-center text-sm uppercase tracking-[0.18em] text-black/42">Загрузка каталога</div>}>
        <ProductCatalogue />
      </Suspense>
    </main>
  );
}
