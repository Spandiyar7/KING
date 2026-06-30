import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CallbackForm } from "@/components/CallbackForm";
import { CollectionRail } from "@/components/CollectionRail";
import { HeroMedia } from "@/components/HeroMedia";
import { RoundLink } from "@/components/RoundLink";
import { assetPath } from "@/config/paths";
import { homeContent, siteConfig } from "@/config/site";
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
            <h1 className="hero-atelier text-[clamp(2.8rem,8vw,8rem)] leading-[1.04]">{homeContent.heroTitle}</h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-8 text-white/85">{homeContent.heroSubtitle}</p>
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
      <section id="intro" className="bg-[#f8f8f7] py-24 text-[#4b4b4b] md:py-32 lg:py-40">
        <div className="giorgio-container grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:items-start">
          <p className="text-sm uppercase tracking-[0.18em] text-black/36" data-luxury-reveal>
            {homeContent.introTitle}
          </p>
          <div className="max-w-4xl space-y-7" data-luxury-reveal>
            {introParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-[clamp(1.6rem,2.6vw,2.6rem)] font-light leading-[1.4] text-black/80"
                    : "text-lg font-light leading-9 text-black/56"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОДУКЦИЯ — карточки категорий */}
      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-28">
        <div className="giorgio-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end" data-luxury-reveal>
            <h2 className="thin-title text-[clamp(3rem,5.6vw,7rem)] leading-none">Продукция</h2>
            <p className="max-w-2xl text-lg font-light leading-9 text-black/54">
              Производим мягкую и корпусную мебель полного цикла — от мягких форм до корпусных систем под архитектуру дома.
            </p>
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
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/65">{category.titleEn}</p>
                      <h3 className="thin-title mt-2 text-[clamp(2.2rem,3vw,3.2rem)] leading-none text-white">{category.title}</h3>
                      <p className="mt-3 max-w-xs text-sm font-light leading-6 text-white/72">{category.subtitle}</p>
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
      <section className="relative bg-[#f8f8f7] px-5 py-16 text-white md:py-28">
        <div className="relative mx-auto flex min-h-[64vh] max-w-[1420px] items-center justify-center overflow-hidden bg-black text-center">
          <Image src={assetPath(homeContent.workshopImage)} alt="Мастерская KING ATELIER" fill sizes="100vw" className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center px-6" data-luxury-reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">Производство KING ATELIER</p>
            <h2 className="thin-title text-[clamp(3rem,6vw,7rem)] leading-none">Мастерская</h2>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-white/76">
              Производство премиальной мягкой и корпусной мебели под индивидуальные проекты — от эскиза до установки.
            </p>
            <div className="mt-9">
              <RoundLink href="/workshop">Подробнее</RoundLink>
            </div>
          </div>
        </div>
      </section>

      {/* ЗАЯВКА НА ЗВОНОК */}
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
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
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
