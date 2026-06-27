import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LuxuryLink } from "@/components/LuxuryLink";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Мастерская",
  description: "Мастерская KING COLLECTION: производство премиальной мягкой и корпусной мебели под индивидуальные проекты."
};

const workshopDirections = [
  "Мягкая мебель: диваны, кресла, кровати и пуфы",
  "Корпусная мебель: шкафы, ТВ-зоны и системы хранения",
  "Гардеробные комнаты и встроенные модули",
  "Кухни по размерам проекта",
  "Материалы, фасады, подсветка и фурнитура под интерьер",
  "Индивидуальные размеры и конфигурации под проект"
];

export default function WorkshopPage() {
  return (
    <main>
      <PageHero
        eyebrow="Мастерская"
        title="Мастерская"
        description="Здесь создаются мягкая и корпусная мебель KING: от эскиза и подбора материалов до производства, сборки и установки в интерьере."
        image="/images/hero/king-hero.png"
      />

      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container grid gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">Производство KING</p>
            <h1 className="thin-title mt-5 max-w-4xl text-[clamp(3.6rem,8vw,8.6rem)] leading-[0.96]">
              Мебель под архитектуру вашего пространства
            </h1>
          </div>
          <div className="space-y-8 text-sm font-light leading-7 text-black/58" data-luxury-reveal>
            <p>
              Мастерская KING работает с мягкой мебелью и корпусными решениями: шкафами, гардеробными, кухнями и
              индивидуальными системами хранения. Изготавливаем мебель под размеры и архитектуру вашего пространства.
            </p>
            <div className="grid gap-4 border-t border-black/14 pt-8 sm:grid-cols-2">
              {workshopDirections.map((item) => (
                <p key={item} className="border-b border-black/14 pb-4 text-xs uppercase tracking-[0.16em] text-black/46">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-7">
              <LuxuryLink href="/contacts">Обсудить заказ</LuxuryLink>
              <LuxuryLink href={siteConfig.whatsappHref}>WhatsApp</LuxuryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeec] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container">
          <ContactForm compact />
        </div>
      </section>
    </main>
  );
}
