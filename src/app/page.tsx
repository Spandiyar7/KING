import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CallbackForm } from "@/components/CallbackForm";
import { CollectionRail } from "@/components/CollectionRail";
import { HeroMedia } from "@/components/HeroMedia";
import { RoundLink } from "@/components/RoundLink";
import { assetPath } from "@/config/paths";
import { homeContent } from "@/config/site";
import { categories } from "@/data/products";

export default function HomePage() {
  const introParagraphs = homeContent.introText.split("\n\n").filter(Boolean);

  return (
    <main className="bg-[#f8f8f7] text-[#3f3f3f]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <Image
          src={assetPath("/images/hero/hero-poster.jpg")}
          alt="KING ATELIER"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <HeroMedia />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-y-0 left-0 w-[62vw] bg-gradient-to-r from-black/45 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="giorgio-container relative z-10 flex min-h-screen items-end pb-16 pt-36 md:pb-24">
          <div className="max-w-[46rem]" data-luxury-reveal>
            <h1 className="hero-atelier whitespace-nowrap text-[clamp(2.2rem,6.2vw,6.4rem)] leading-[1.04]">
              {homeContent.heroTitle}
            </h1>
            <a
              href="#zayavka"
              className="pill-link focus-ring mt-10 border-white/72 text-white hover:bg-white hover:text-black"
            >
              Оставить заявку <ArrowRight className="ml-3 h-5 w-5" strokeWidth={1.35} />
            </a>
          </div>
        </div>

        <a
          href="#intro"
          aria-label="Прокрутить вниз"
          className="focus-ring absolute bottom-8 left-1/2 z-20 grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full border border-[#bbb398] text-[#bbb398]"
        >
          <ArrowDown className="h-5 w-5" strokeWidth={1.2} />
        </a>
      </section>

      {/* О МАСТЕРСКОЙ */}
      <section id="intro" className="bg-[#f8f8f7] py-14 text-[#4b4b4b] md:py-20 lg:py-24">
        <div className="giorgio-container grid gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-start">
          <h2 className="thin-title text-[clamp(3rem,5.6vw,7rem)] leading-none" data-luxury-reveal>
            О мастерской
          </h2>
          <div className="max-w-4xl space-y-7" data-luxury-reveal>
            {introParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-[clamp(2rem,3.4vw,3.4rem)] font-light leading-[1.3] text-black/85"
                    : "text-base font-light leading-8 text-black/55"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОДУКЦИЯ — карточки категорий */}
      <section className="bg-[#f8f8f7] py-12 text-[#3f3f3f] md:py-16">
        <div className="giorgio-container">
          <div className="mb-10" data-luxury-reveal>
            <h2 className="thin-title text-[clamp(3rem,5.6vw,7rem)] leading-none">Каталог</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-luxury-reveal>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative block overflow-hidden border border-black/10 bg-black"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={assetPath(category.image)}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover opacity-90 transition-transform duration-[1400ms] ease-luxury group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                    <div>
                      <h3 className="text-[clamp(2rem,2.8vw,3rem)] font-semibold leading-none tracking-[0.02em] text-white">
                        {category.title}
                      </h3>
                    </div>
                    <ArrowRight className="mb-1 h-6 w-6 shrink-0 text-white/80 transition-transform duration-500 ease-luxury group-hover:translate-x-1.5" strokeWidth={1.3} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* КОЛЛЕКЦИИ */}
      <CollectionRail title="Коллекции" />

      {/* МАСТЕРСКАЯ */}
      <section className="relative bg-[#f8f8f7] px-5 py-10 text-white md:py-14">
        <div className="relative mx-auto flex min-h-[58vh] max-w-[1480px] items-center justify-center overflow-hidden bg-black text-center">
          <Image src={assetPath(homeContent.workshopImage)} alt="Мастерская KING ATELIER" fill sizes="100vw" className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex flex-col items-center px-6" data-luxury-reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">KING ATELIER</p>
            <h2 className="thin-title text-[clamp(3.2rem,7vw,8.4rem)] uppercase leading-none">Мастерская</h2>
            <div className="mt-10">
              <RoundLink href="/workshop">Подробнее</RoundLink>
            </div>
          </div>
        </div>
      </section>

      {/* ЗАЯВКА НА ЗВОНОК */}
      <section id="zayavka" className="scroll-mt-28 bg-black py-16 text-white md:py-20">
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
