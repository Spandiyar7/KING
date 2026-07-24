import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { assetPath } from "@/config/paths";
import { styleGroups } from "@/data/styles";

export const metadata: Metadata = {
  title: "Стили",
  description:
    "Стили интерьера KING ATELIER: современный стиль, тёплый минимализм, скандинавский стиль, модерн кантри и другие направления."
};

export default function StylesPage() {
  const groups = styleGroups.filter((group) => group.styles.length > 0);

  return (
    <main className="bg-[#f8f8f7] text-[#3f3f3f]">
      <PageHero
        eyebrow="Стили"
        title="Стили интерьера"
        description="Каждый проект начинается со стиля. Мы собрали направления, с которыми работаем, — от тёплого минимализма до характерных авторских решений. Внутри каждого стиля — интерьеры, которые помогут почувствовать его настроение."
        image="/images/styles/modern/modern-main.jpg"
      />

      {groups.map((group) => (
        <section key={group.id} className="bg-[#f8f8f7] py-12 md:py-16">
          <div className="giorgio-container">
            <div className="mb-10" data-luxury-reveal>
              <h2 className="thin-title text-[clamp(2.4rem,4.2vw,5rem)] leading-none">{group.title}</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-luxury-reveal>
              {group.styles.map((style) => (
                <Link
                  key={style.slug}
                  href={`/styles/${style.slug}`}
                  className="group relative block overflow-hidden border border-black/10 bg-black"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={assetPath(style.image)}
                      alt={style.title}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                      className="object-cover opacity-90 transition-transform duration-[1400ms] ease-luxury group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                      <div>
                        <h3 className="text-[clamp(1.6rem,2.2vw,2.4rem)] font-semibold leading-tight tracking-[0.02em] text-white">
                          {style.title}
                        </h3>
                        <p className="mt-2 text-sm font-light text-white/64">{style.subtitle}</p>
                      </div>
                      <ArrowRight
                        className="mb-1 h-6 w-6 shrink-0 text-white/80 transition-transform duration-500 ease-luxury group-hover:translate-x-1.5"
                        strokeWidth={1.3}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
