import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = {
  title: "Продукция",
  description: "Каталог мебели KING ATELIER: диваны, кресла и кровати с ценами, а также шкафы, гардеробные и кухни под размеры проекта."
};

export default function ProductsPage() {
  return (
    <main className="pt-[6.9rem] lg:pt-[7.75rem]">
      <Suspense fallback={<div className="bg-[#f8f8f7] py-24 text-center text-sm uppercase tracking-[0.18em] text-black/42">Загрузка каталога</div>}>
        <ProductCatalogue />
      </Suspense>
    </main>
  );
}
