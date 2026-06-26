import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CollectionRail } from "@/components/CollectionRail";
import { HeroMedia } from "@/components/HeroMedia";
import { ImageCta } from "@/components/ImageCta";
import { PillLink } from "@/components/PillLink";
import { RoundLink } from "@/components/RoundLink";
import { assetPath } from "@/config/paths";
import { categories, featuredProduct, products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="bg-[#f8f8f7] text-[#3f3f3f]">
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <Image
          src={assetPath("/images/hero/king-hero.png")}
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
          <div className="max-w-[36rem]" data-luxury-reveal>
            <p className="mb-4 text-2xl font-light leading-tight text-white/95 md:text-3xl">
              Премиальная коллекция
            </p>
            <h1 className="thin-title text-[clamp(5rem,9vw,9.4rem)] leading-[0.96] text-white">
              KING
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-8 text-white/82">
              Премиальная мягкая и корпусная мебель для современных интерьеров, частных резиденций и
              индивидуальных проектов.
            </p>
            <PillLink href="/collections" className="mt-10 border-white/72 text-white hover:bg-white hover:text-black">
              Посмотреть больше <ArrowRight className="ml-3 h-5 w-5" strokeWidth={1.35} />
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

      <section id="intro" className="bg-[#f8f8f7] py-24 text-[#4b4b4b] md:py-36 lg:py-44">
        <div className="mx-auto w-[min(100%-32px,1420px)]">
          <div className="ml-auto max-w-[112rem]" data-luxury-reveal>
            <p className="thin-title mb-12 text-[clamp(3rem,5.7vw,5.9rem)] leading-[0.92] text-black/78">
              15:51
              <br />
              00
            </p>
            <h2 className="thin-title max-w-[94rem] text-[clamp(3.1rem,5.8vw,7.35rem)] leading-[1.12]">
              Создаем премиальную мягкую и корпусную мебель
            </h2>
            <p className="mt-12 max-w-4xl text-lg font-light leading-9 text-black/56">
              KING объединяет диваны, кресла, кровати, шкафы, гардеробные и кухни в единую интерьерную систему:
              от идеи и дизайна до производства в мастерской и установки в пространстве.
            </p>
            <PillLink href="/collections" className="mt-12 border-black bg-black text-white hover:bg-transparent hover:text-black">
              KING Collection&apos;s world
            </PillLink>
          </div>
        </div>
      </section>

      <CollectionRail />

      <section className="bg-[#f8f8f7] py-24 text-[#3f3f3f] md:py-36">
        <div className="giorgio-container">
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <h2 className="thin-title text-[clamp(3rem,5.6vw,7rem)] leading-none" data-luxury-reveal>
              Мягкая и корпусная мебель
            </h2>
            <p className="max-w-3xl text-lg font-light leading-9 text-black/54" data-luxury-reveal>
              Добавили направления для корпусной мебели: шкафы, гардеробные и кухни. Фотографии и дизайн-работы
              дизайнеры смогут заменить на реальные проекты по мере готовности материалов.
            </p>
          </div>
          <div className="grid border-l border-t border-black/14 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group flex min-h-[32rem] flex-col justify-between border-b border-r border-black/14 bg-[#f8f8f7] p-8 transition-colors hover:bg-white md:p-10"
                data-luxury-reveal
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <Image
                    src={assetPath(category.image)}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <div className="pt-10">
                  <p className="text-xs uppercase tracking-[0.22em] text-black/34">{category.titleEn}</p>
                  <h3 className="thin-title mt-3 text-[clamp(2.6rem,4vw,4.4rem)] leading-none">{category.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-black/50">{category.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f8f7] py-20 text-white md:py-28">
        <div className="relative mx-auto min-h-[68vh] max-w-[1480px] overflow-hidden bg-black">
          <Image src={assetPath(featuredProduct.heroImage)} alt={featuredProduct.name} fill sizes="100vw" className="object-cover opacity-64" />
          <div className="absolute inset-0 bg-black/24" />
          <div className="relative z-10 flex min-h-[68vh] flex-col items-center justify-center px-6 text-center">
            <p className="mb-4 text-lg font-light text-white/76">Featured Collection</p>
            <h2 className="thin-title text-[clamp(3.4rem,7vw,8.2rem)] leading-none">{featuredProduct.name}</h2>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-white/75">{featuredProduct.description}</p>
            <PillLink href="/collections/radius" className="mt-9 border-white bg-white text-black hover:bg-transparent hover:text-white">
              Исследовать
            </PillLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f7] py-24 text-[#3f3f3f] md:py-36">
        <div className="giorgio-container grid gap-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div data-luxury-reveal>
            <h2 className="thin-title text-[clamp(3rem,5.8vw,7rem)] leading-[1.05]">
              Шкафы, гардеробные и кухни под архитектуру дома.
            </h2>
            <p className="mt-10 max-w-xl text-lg font-light leading-9 text-black/52">
              Мы проектируем корпусную мебель как часть интерьера: фасады, хранение, рабочие зоны, подсветку,
              материалы и пропорции. Дизайнеры добавят сюда фотографии и визуализации готовых работ.
            </p>
            <div className="mt-12">
              <RoundLink href="/workshop">Мастерская</RoundLink>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-[0.8fr_1.2fr]" data-luxury-reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-black">
              <Image src={assetPath("/images/lookbook/lookbook-01.png")} alt="KING lookbook" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-6">
              <div className="relative aspect-[5/3] overflow-hidden bg-black">
                <Image src={assetPath("/images/lookbook/lookbook-02.png")} alt="KING interior" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
              </div>
              <div className="relative aspect-[5/3] overflow-hidden bg-black">
                <Image src={assetPath("/images/lookbook/lookbook-03.png")} alt="KING soft line" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageCta title="Мастерская" href="/workshop" label="Посмотреть" image="/images/lookbook/lookbook-02.png" />

      <section className="bg-[#f8f8f7] py-24 text-[#3f3f3f] md:py-36">
        <div className="giorgio-container">
          <div className="mb-14 flex items-end justify-between gap-8" data-luxury-reveal>
            <h2 className="thin-title text-[clamp(3rem,5.8vw,7rem)] leading-none">Модели</h2>
            <RoundLink href="/products">Все модели</RoundLink>
          </div>
          <div className="grid border-l border-t border-black/14 lg:grid-cols-2">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group border-b border-r border-black/14 p-7 md:p-10">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={assetPath(product.heroImage)}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <h3 className="thin-title mt-9 text-[clamp(2.8rem,4.5vw,5.5rem)] leading-none">{product.name}</h3>
                <p className="mt-5 text-sm leading-7 text-black/52">{product.subtitle}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-black/38">{product.shortSpecs.join(" - ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ImageCta title="Для дизайнеров и индивидуальных заказов" href="/contract" label="Запросить каталог" image="/images/lookbook/lookbook-01.png" />
    </main>
  );
}
