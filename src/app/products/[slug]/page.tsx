import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { EditorialImage } from "@/components/EditorialImage";
import { LuxuryLink } from "@/components/LuxuryLink";
import { assetPath } from "@/config/paths";
import { getProductBySlug, priceLabel, products } from "@/data/products";
import { siteConfig } from "@/config/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} - KING ATELIER`,
      description: product.description,
      images: [{ url: product.heroImage, alt: product.name }]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gallery = product.images.length > 0 ? product.images : [product.heroImage];
  const dimensions = [product.width, product.depth, product.height].every(Boolean)
    ? `${product.width} × ${product.depth} × ${product.height} см`
    : null;

  return (
    <main>
      <section className="relative min-h-screen bg-black text-white">
        <Image src={assetPath(product.heroImage)} alt={product.name} fill priority sizes="100vw" className="object-cover opacity-78" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/22 to-black/8" />
        <div className="giorgio-container relative z-10 flex min-h-screen items-end pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl" data-luxury-reveal>
            <p className="mb-7 text-sm uppercase tracking-[0.18em] text-white/62">{product.collectionName}</p>
            <h1 className="thin-title text-[clamp(4.6rem,13vw,13rem)] leading-[0.86]">{product.name}</h1>
            <p className="mt-8 max-w-2xl text-xl font-light leading-8 text-white/76">{product.subtitle}</p>
          </div>
        </div>
      </section>

      {/* PRICE + KEY SPECS */}
      <section className="border-b border-black/14 bg-[#f8f8f7] py-14 text-[#3f3f3f] md:py-20">
        <div className="giorgio-container grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">Цена</p>
            <p className="thin-title mt-4 text-[clamp(3rem,6vw,5.4rem)] leading-none">{priceLabel(product)}</p>
            {dimensions ? <p className="mt-5 text-sm font-light text-black/56">Размеры (Ш × Г × В): {dimensions}</p> : null}
            {product.price == null ? (
              <p className="mt-3 max-w-md text-sm font-light leading-7 text-black/50">
                Стоимость рассчитывается индивидуально по размерам и конфигурации проекта.
              </p>
            ) : null}
            <div className="mt-9 flex flex-wrap gap-6">
              <LuxuryLink href={siteConfig.whatsappHref}>Заказать в WhatsApp</LuxuryLink>
              <LuxuryLink href={siteConfig.phoneHref}>{siteConfig.phone}</LuxuryLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 border-t border-black/14 pt-8 sm:grid-cols-3" data-luxury-reveal>
            {[
              { label: "Материал", value: product.material },
              { label: "Мягкость", value: product.softness },
              { label: "Форма", value: product.form },
              { label: "Цвет", value: product.tone || product.color },
              product.seats ? { label: "Мест", value: product.seats } : null,
              { label: "Коллекция", value: product.collectionName.replace(" Collection", "") }
            ]
              .filter((item): item is { label: string; value: string } => Boolean(item && item.value))
              .map((item) => (
                <div key={item.label} className="border-b border-black/12 py-4">
                  <dt className="text-xs uppercase tracking-[0.18em] text-black/38">{item.label}</dt>
                  <dd className="mt-2 text-sm font-light text-black/64">{item.value}</dd>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f7] py-24 text-[#3f3f3f] md:py-36">
        <div className="giorgio-container grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-end">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">О модели</p>
            <h2 className="thin-title mt-5 max-w-3xl text-[clamp(3.6rem,8vw,8.8rem)] leading-[0.94]">{product.intro}</h2>
          </div>
          <div className="max-w-xl space-y-8 lg:pb-2" data-luxury-reveal>
            <p className="text-sm font-light leading-7 text-black/56">{product.description}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-black/38">{product.shortSpecs.join(" · ")}</p>
          </div>
        </div>
      </section>

      {/* GALLERY — adapts to number of photos */}
      {gallery.length > 0 ? (
        <section className="bg-black py-5 text-white md:py-8">
          <div className="grid gap-5 md:gap-8">
            <EditorialImage src={gallery[0]} alt={`${product.name} — фото 1`} className="h-[75vh]" priority />
            {gallery.length === 2 ? (
              <div className="giorgio-container">
                <EditorialImage src={gallery[1]} alt={`${product.name} — фото 2`} className="aspect-[16/9]" sizes="100vw" />
              </div>
            ) : null}
            {gallery.length >= 3 ? (
              <div className="giorgio-container grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                <EditorialImage src={gallery[1]} alt={`${product.name} — фото 2`} className="aspect-[4/5]" sizes="(min-width: 768px) 45vw, 100vw" />
                <EditorialImage src={gallery[2]} alt={`${product.name} — фото 3`} className="aspect-[5/4]" sizes="(min-width: 768px) 55vw, 100vw" />
              </div>
            ) : null}
            {gallery.length > 3 ? (
              <div className="giorgio-container grid gap-5 md:grid-cols-3 md:gap-8">
                {gallery.slice(3).map((src, index) => (
                  <EditorialImage
                    key={src}
                    src={src}
                    alt={`${product.name} — фото ${index + 4}`}
                    className="aspect-[4/5]"
                    sizes="(min-width: 768px) 32vw, 100vw"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="bg-[#eeeeec] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[0.82fr_1fr]">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">Описание</p>
            <h2 className="thin-title mt-5 text-[clamp(3.4rem,7vw,7.2rem)] leading-[0.96]">Материалы, форма и посадка</h2>
            <p className="mt-8 max-w-lg text-sm font-light leading-7 text-black/56">{product.description}</p>
          </div>
          <div data-luxury-reveal>
            <p className="mb-8 text-sm uppercase tracking-[0.18em] text-black/36">Характеристики</p>
            <dl className="grid gap-x-10 border-t border-black/14 md:grid-cols-2">
              {product.specifications.map((item) => (
                <div key={item.label} className="grid gap-3 border-b border-black/14 py-5 sm:grid-cols-[0.42fr_1fr] md:block">
                  <dt className="text-xs uppercase tracking-[0.2em] text-black/38">{item.label}</dt>
                  <dd className="mt-0 text-sm font-light leading-7 text-black/62 md:mt-3">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container">
          <div className="mb-12 flex flex-wrap gap-7" data-luxury-reveal>
            <LuxuryLink href={siteConfig.whatsappHref}>WhatsApp</LuxuryLink>
            <LuxuryLink href={siteConfig.phoneHref}>{siteConfig.phone}</LuxuryLink>
            <LuxuryLink href="/contacts">Связаться с менеджером</LuxuryLink>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
