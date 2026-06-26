import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EditorialImage } from "@/components/EditorialImage";
import { LuxuryLink } from "@/components/LuxuryLink";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Для дизайнеров",
  description: "Проектные условия KING COLLECTION для дизайнеров, архитекторов, шоурумов и девелоперов."
};

export default function ContractPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contract"
        title="Для дизайнеров"
        description="Материалы по моделям, размеры, фото, 3D-файлы по запросу и сопровождение подбора мебели для частных и коммерческих интерьеров."
        image="/images/lookbook/lookbook-02.png"
      />

      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">For professionals</p>
            <h1 className="thin-title mt-5 max-w-3xl text-[clamp(3.6rem,8vw,8.8rem)] leading-[0.96]">
              For architects, designers and private projects.
            </h1>
          </div>
          <div className="space-y-10" data-luxury-reveal>
            <p className="max-w-xl text-lg font-light leading-9 text-black/56">
              KING работает с проектами, где важны точность размеров, визуальная цельность и спокойная премиальная подача.
              Мы помогаем подобрать модели, ткани и конфигурации под конкретное пространство.
            </p>
            <div className="grid gap-6 border-t border-black/14 pt-8 sm:grid-cols-2">
              {["3D-файлы по запросу", "Подбор тканей", "Фото и размеры", "Проектное сопровождение"].map((item) => (
                <p key={item} className="border-b border-black/14 pb-5 text-xs uppercase tracking-[0.2em] text-black/46">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-7">
              <LuxuryLink href={siteConfig.catalogHref} download>
                Запросить каталог
              </LuxuryLink>
              <LuxuryLink href={siteConfig.whatsappHref}>WhatsApp</LuxuryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-5 text-white md:py-8">
        <EditorialImage src="/images/lookbook/lookbook-01.png" alt="KING project lounge" className="h-[78vh]" />
      </section>

      <section className="bg-[#eeeeec] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
