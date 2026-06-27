import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CollectionRail } from "@/components/CollectionRail";
import { HeroMedia } from "@/components/HeroMedia";
import { PillLink } from "@/components/PillLink";
import { RoundLink } from "@/components/RoundLink";
import { assetPath } from "@/config/paths";
import { homeContent } from "@/config/site";
import { categories } from "@/data/products";

export default function HomePage() {
  return (
    <main className="bg-[#f8f8f7] text-[#3f3f3f]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <Image
          src={assetPath("/images/hero/hero-poster.jpg")}
          alt="KING COLLECTION premium interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <HeroMedia />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-y-0 left-0 w-[62vw] bg-gradient-to-r from-black/42 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />

        <div className="giorgio-container relative z-10 flex min-h-screen items-end pb-16 pt-36 md:pb-24">
          <div className="max-w-[40rem]" data-luxury-reveal>
            <h1 className="hero-king text-[clamp(5.5rem,11vw,11rem)] leading-[0.92]">{homeContent.heroTitle}</h1>
            <p className="mt-8 max-w-xl text-base font-light leading-8 text-white/82">{homeContent.heroSubtitle}</p>
            <PillLink href="/products" className="mt-10 border-white/72 text-white hover:bg-white hover:text-black">
              Смотреть продукцию <ArrowRight className="ml-3 h-5 w-5" strokeWidth={1.35} />
            </PillLink>
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

      {/* INTRO */}
      <section id="intro" className="bg-[#f8f8f7] py-24 text-[#4b4b4b] md:py-36 lg:py-44">
        <div className="mx-auto w-[min(100%-32px,1420px)]">
          <div className="ml-auto max-w-[112rem]" data-luxury-reveal>
            <h2 className="thin-title max-w-[94rem] text-[clamp(3.1rem,5.8vw,7.35rem)] leading-[1.12]">
              {homeContent.introTitle}
            </h2>
            <p className="mt-12 max-w-4xl text-lg font-light leading-9 text-black/56">{homeContent.introText}</p>
            <PillLink href="/products" className="mt-12 border-black bg-black text-white hover:bg-transparent hover:text-black">
              Вся продукция
            </PillLink>
          </div>
        </div>
      </section>

      {/* ПРОДУКЦИЯ — список того, что мы производим */}
      <section className="bg-[#f8f8f7] py-24 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end" data-luxury-reveal>
            <h2 className="thin-title text-[clamp(3rem,5.6vw,7rem)] leading-none">Продукция</h2>
            <p className="max-w-2xl text-lg font-light leading-9 text-black/54">
              Производим мягкую и корпусную мебель полного цикла — от мягких форм до корпусных систем под архитектуру дома.
            </p>
          </div>
          <div className="border-t border-black/14" data-luxury-reveal>
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={category.href}
                className="group flex items-center justify-between gap-6 border-b border-black/14 py-7 transition-colors hover:bg-white md:py-9"
              >
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span className="text-xs font-light tracking-[0.16em] text-black/34">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="thin-title text-[clamp(2.1rem,5vw,4.6rem)] leading-none">{category.title}</h3>
                  <span className="hidden text-xs uppercase tracking-[0.22em] text-black/30 md:inline">{category.titleEn}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="hidden max-w-xs text-sm font-light leading-6 text-black/46 lg:block">{category.subtitle}</span>
                  <ArrowRight className="h-6 w-6 text-black/40 transition-transform duration-500 ease-luxury group-hover:translate-x-2 group-hover:text-black" strokeWidth={1.3} />
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
          <Image src={assetPath(homeContent.workshopImage)} alt="Мастерская KING" fill sizes="100vw" className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center px-6" data-luxury-reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">Производство KING</p>
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
    </main>
  );
}
