import type { Metadata } from "next";
import Image from "next/image";
import { CallbackForm } from "@/components/CallbackForm";
import { assetPath } from "@/config/paths";
import { homeContent } from "@/config/site";

export const metadata: Metadata = {
  title: "Мастерская",
  description: "Мастерская KING ATELIER в Алматы: производство премиальной мягкой и корпусной мебели под заказ."
};

const capabilities = [
  "Профессиональное оборудование",
  "ЧПУ-фрезеровка",
  "Точный раскрой",
  "Сборочный участок",
  "Зона работы с материалами",
  "Сложные формы и детали",
  "Фасады, панели, декор",
  "Индивидуальные конструкции"
];

const equipmentPhotos = [
  { src: "/images/workshop/equipment-1.jpg", alt: "Форматно-раскроечный станок Altendorf" },
  { src: "/images/workshop/equipment-2.jpg", alt: "ЧПУ-станок с числовым управлением" }
];

export default function WorkshopPage() {
  return (
    <main>
      {/* HERO — фото на весь экран */}
      <section className="relative min-h-[92vh] bg-black text-white">
        <Image
          src={assetPath("/images/workshop/masterskaya.jpg")}
          alt="Мастерская KING ATELIER"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/55" />
        <div className="giorgio-container relative z-10 flex min-h-[92vh] flex-col justify-end pb-16 pt-36 md:pb-24">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/70" data-luxury-reveal>
            KING ATELIER
          </p>
          <h1 className="thin-title text-[clamp(4rem,11vw,12rem)] leading-[0.9]" data-luxury-reveal>
            Мастерская
          </h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-white/82" data-luxury-reveal>
            Наша мастерская находится в Алматы по адресу: {homeContent.workshopAddress}. Здесь мы производим премиальную
            мягкую и корпусную мебель под заказ: от разработки конструкции и подбора материалов до сборки, контроля
            качества и подготовки изделия к установке.
          </p>
        </div>
      </section>

      {/* ОБОРУДОВАНИЕ И ПРОЦЕСС */}
      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">Оборудование и процесс</p>
            <h2 className="thin-title mt-5 max-w-3xl text-[clamp(3rem,6vw,6.6rem)] leading-[0.98]">
              Производство полного цикла
            </h2>
          </div>
          <div className="space-y-7 text-base font-light leading-8 text-black/60 lg:pt-3" data-luxury-reveal>
            <p>
              В мастерской есть всё необходимое для производства мягкой и корпусной мебели премиум-сегмента:
              профессиональное оборудование, ЧПУ-фрезеровка, раскрой, сборочный участок и зона работы с материалами.
            </p>
            <p>
              Мы изготавливаем мебель по индивидуальным размерам, эскизам и дизайн-проектам: от диванов, кресел и кроватей
              до шкафов, гардеробных, кухонь и систем хранения.
            </p>
            <p>
              Оборудование позволяет нам выполнять точный раскрой, сложные формы, нестандартные детали, декоративные
              элементы, фасады, панели и индивидуальные конструкции под интерьер.
            </p>
          </div>
        </div>

        <div className="giorgio-container mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-6">
          {equipmentPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/5] overflow-hidden bg-black" data-luxury-reveal>
              <Image
                src={assetPath(photo.src)}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 48vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-luxury hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <div className="giorgio-container mt-14 grid gap-4 border-t border-black/14 pt-10 sm:grid-cols-2 lg:grid-cols-4" data-luxury-reveal>
          {capabilities.map((item) => (
            <p key={item} className="border-b border-black/12 pb-5 text-xs uppercase tracking-[0.16em] text-black/48">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* ЗАЯВКА НА ЗВОНОК */}
      <section id="zayavka" className="scroll-mt-28 bg-black py-24 text-white md:py-32">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div data-luxury-reveal>
            <h2 className="thin-title text-[clamp(3rem,6vw,6.6rem)] leading-[0.96]">Оставить заявку</h2>
          </div>
          <div className="lg:pt-3" data-luxury-reveal>
            <CallbackForm />
          </div>
        </div>
      </section>
    </main>
  );
}
