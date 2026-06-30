"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { assetPath } from "@/config/paths";
import {
  categories,
  collections,
  colorFilters,
  priceLabel,
  products,
  type CategoryId,
  type CollectionId
} from "@/data/products";

export function ProductCatalogue() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategoryId | null;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">(initialCategory ?? "all");
  const [collection, setCollection] = useState<CollectionId | "all">("all");
  const [color, setColor] = useState("all");
  const selectedCategory = categories.find((item) => item.id === category);
  const isCustomDirection = category === "cabinets" || category === "wardrobes" || category === "kitchens";

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesQuery =
        !normalized ||
        [product.name, product.subtitle, product.description, product.collectionName, product.tone]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      const matchesCategory = category === "all" || product.category === category;
      const matchesCollection = collection === "all" || product.collection === collection;
      const matchesColor = color === "all" || product.color === color;

      return matchesQuery && matchesCategory && matchesCollection && matchesColor;
    });
  }, [category, collection, color, query]);

  return (
    <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-32">
      <div className="giorgio-container">
        <div className="mb-12" data-luxury-reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.18em] text-black/36">Подобрать модель</p>
          <div className="grid gap-6 border-t border-black/14 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/36">Поиск</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Модель"
                className="focus-ring w-full border-0 border-b border-black/18 bg-transparent py-4 text-base font-light outline-none placeholder:text-black/26"
              />
            </label>
            <SelectFilter label="Категория" value={category} onChange={(value) => setCategory(value as CategoryId | "all")}>
              <option value="all">Все категории</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </SelectFilter>
            <SelectFilter label="Коллекция" value={collection} onChange={(value) => setCollection(value as CollectionId | "all")}>
              <option value="all">Все коллекции</option>
              {collections.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </SelectFilter>
            <SelectFilter label="Цвет" value={color} onChange={setColor}>
              {colorFilters.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </SelectFilter>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-black/36" data-luxury-reveal>
              {filteredProducts.length} {pluralModels(filteredProducts.length)}
            </p>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const dimensions = [product.width, product.depth, product.height].every(Boolean)
                  ? `${product.width} × ${product.depth} × ${product.height} см`
                  : null;
                return (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="group block" data-luxury-reveal>
                    <div className="relative aspect-[4/5] overflow-hidden bg-black">
                      <Image
                        src={assetPath(product.heroImage)}
                        alt={product.subtitle || product.name}
                        fill
                        sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-luxury group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-base font-medium leading-snug">{product.subtitle || product.name}</h3>
                        <p className="shrink-0 text-base font-medium text-black/80">{priceLabel(product)}</p>
                      </div>
                      <div className="mt-3 space-y-1 text-xs uppercase tracking-[0.16em] text-black/45">
                        {product.material ? <p>{product.material}</p> : null}
                        {dimensions ? <p>{dimensions}</p> : null}
                        <p className="text-black/35">Артикул: {product.name}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        ) : null}

        {filteredProducts.length === 0 && isCustomDirection && selectedCategory ? (
          <div className="grid border-l border-t border-black/14 md:grid-cols-[0.92fr_1.08fr]" data-luxury-reveal>
            <div className="relative min-h-[26rem] border-b border-r border-black/14 bg-black md:min-h-[38rem]">
              <Image src={assetPath(selectedCategory.image)} alt={selectedCategory.title} fill sizes="(min-width: 768px) 44vw, 100vw" className="object-cover" />
            </div>
            <div className="flex min-h-[30rem] flex-col justify-between border-b border-r border-black/14 p-8 md:p-12 lg:p-16">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-black/36">{selectedCategory.titleEn}</p>
                <h3 className="thin-title mt-6 text-[clamp(3.2rem,7vw,8rem)] leading-[0.9]">{selectedCategory.title}</h3>
              </div>
              <div className="pt-14">
                <p className="text-xl font-light text-black/66">{selectedCategory.subtitle}</p>
                <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-black/54">
                  Индивидуальное направление KING: изготавливаем по размерам вашего проекта. Цена зависит от
                  конфигурации и материалов. Отправьте размеры, план помещения или референсы — подготовим расчёт.
                </p>
                <Link href="/contacts" className="luxury-link focus-ring mt-8">
                  Обсудить заказ
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {filteredProducts.length === 0 && !isCustomDirection ? (
          <p className="border-t border-black/14 py-16 text-sm uppercase tracking-[0.2em] text-black/42">
            По выбранным параметрам модели не найдены.
          </p>
        ) : null}
      </div>
    </section>
  );
}

function pluralModels(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "модель";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "модели";
  return "моделей";
}

function SelectFilter({
  label,
  value,
  onChange,
  children
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/36">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring w-full appearance-none border-0 border-b border-black/18 bg-transparent py-4 text-base font-light outline-none"
      >
        {children}
      </select>
    </label>
  );
}
