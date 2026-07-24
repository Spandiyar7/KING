import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StyleCardCarousel } from "@/components/StyleCardCarousel";
import { styleGroups } from "@/data/styles";

export const metadata: Metadata = {
  title: "Дизайн интерьера",
  description:
    "Дизайн интерьера от KING ATELIER: современный стиль, тёплый минимализм, скандинавский стиль, модерн кантри и другие направления."
};

export default function StylesPage() {
  const groups = styleGroups.filter((group) => group.styles.length > 0);

  return (
    <main className="bg-[#f8f8f7] text-[#3f3f3f]">
      <PageHero
        eyebrow="KING ATELIER"
        title="Дизайн интерьера"
        description="Каждый проект начинается со стиля. Мы собрали направления, с которыми работаем, — от тёплого минимализма до характерных авторских решений. Листайте фото прямо на карточках, а внутри каждого стиля — интерьеры крупным планом."
        image="/images/styles/modern/modern-main.jpg"
      />

      {groups.map((group) => (
        <section key={group.id} className="bg-[#f8f8f7] py-12 md:py-16">
          <div className="giorgio-container">
            <div className="mb-10" data-luxury-reveal>
              <h2 className="thin-title text-[clamp(2.4rem,4.2vw,5rem)] leading-none">{group.title}</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-luxury-reveal>
              {group.styles.map((style) => (
                <div key={style.slug}>
                  <StyleCardCarousel
                    href={`/styles/${style.slug}`}
                    title={style.title}
                    images={style.gallery}
                  />
                  <Link href={`/styles/${style.slug}`} className="group block pt-4">
                    <h3 className="text-lg font-medium tracking-[0.02em] text-black/85 transition-colors duration-300 group-hover:text-black">
                      {style.title}
                    </h3>
                    <p className="mt-1 text-sm font-light leading-6 text-black/50">{style.subtitle}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
