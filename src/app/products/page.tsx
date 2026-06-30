import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = {
  title: "Продукция",
  description: "Каталог мебели KING ATELIER: диваны, кресла и кровати с ценами, а также шкафы, гардеробные и кухни под размеры проекта."
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Каталог"
        title="Продукция"
        description="Диваны, кресла и кровати — с ценами. Шкафы, гардеробные и кухни — под размеры проекта, цена по запросу."
        image="/images/catalog/sofas/kings2-1.jpg"
      />
      <Suspense fallback={<div className="bg-[#f8f8f7] py-24 text-center text-sm uppercase tracking-[0.18em] text-black/42">Загрузка каталога</div>}>
        <ProductCatalogue />
      </Suspense>
    </main>
  );
}
