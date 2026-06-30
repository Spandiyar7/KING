import type { Metadata } from "next";
import { CallbackForm } from "@/components/CallbackForm";
import { PageHero } from "@/components/PageHero";
import { homeContent, siteConfig } from "@/config/site";

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

export default function WorkshopPage() {
  return (
    <main>
      <PageHero
        eyebrow="KING ATELIER"
        title="Мастерская"
        description={`Наша мастерская находится в Алматы по адресу: ${homeContent.workshopAddress}. Здесь мы производим премиальную мягкую и корпусную мебель под заказ: от разработки конструкции и подбора материалов до сборки, контроля качества и подготовки изделия к установке.`}
        image="/images/workshop/masterskaya.jpg"
      />

      {/* Оборудование и процесс */}
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

        <div className="giorgio-container mt-16 grid gap-4 border-t border-black/14 pt-10 sm:grid-cols-2 lg:grid-cols-4" data-luxury-reveal>
          {capabilities.map((item) => (
            <p key={item} className="border-b border-black/12 pb-5 text-xs uppercase tracking-[0.16em] text-black/48">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Заявка на звонок */}
      <section id="zayavka" className="scroll-mt-28 bg-black py-24 text-white md:py-32">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">Заявка</p>
            <h2 className="thin-title mt-5 text-[clamp(3rem,6vw,6.6rem)] leading-[0.96]">Оставить заявку на звонок</h2>
            <p className="mt-8 max-w-md text-base font-light leading-8 text-white/65">
              Оставьте имя и телефон — перезвоним, обсудим проект, размеры, материалы и сроки.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                {siteConfig.phone}
              </a>
              <a href={siteConfig.whatsappHref} className="transition-colors hover:text-white">
                WhatsApp
              </a>
              <a href={siteConfig.instagramHref} className="transition-colors hover:text-white">
                Instagram {siteConfig.instagram}
              </a>
            </div>
          </div>
          <div className="lg:pt-3" data-luxury-reveal>
            <CallbackForm />
          </div>
        </div>
      </section>
    </main>
  );
}
