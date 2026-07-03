import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { LuxuryLink } from "@/components/LuxuryLink";
import { assetPath } from "@/config/paths";
import { getProductBySlug, getRelatedProducts, priceLabel, products } from "@/data/products";
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
  const related = getRelatedProducts(product, 4);
  const specs = [
    { label: "Материал", value: product.material },
    { label: "Мягкость", value: product.softness },
    { label: "Форма", value: product.form },
    { label: "Цвет", value: product.tone || product.color },
    product.seats ? { label: "Мест", value: product.seats } : null,
    product.collection ? { label: "Коллекция", value: product.collectionName.replace(" Collection", "") } : null
  ].filter((item): item is { label: string; value: string } => Boolean(item && item.value));

  return (
    <main className="bg-[#f8f8f7] text-[#3f3f3f]">
      <section className="pt-[6.9rem] lg:pt-[7.75rem]">
        <div className="giorgio-container grid gap-10 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-16">
          {/* Фото — целиком, в оригинальном формате (без обрезки) */}
          <div className="space-y-5 md:space-y-6" data-luxury-reveal>
            {gallery.map((src, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={assetPath(src)}
                alt={`${product.name} — фото ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full bg-[#efeae2]"
              />
            ))}
          </div>

          {/* Инфо-панель */}
          <div className="lg:sticky lg:top-28 lg:self-start" data-luxury-reveal>
            {product.collection ? (
              <p className="text-sm uppercase tracking-[0.18em] text-black/36">{product.collectionName}</p>
            ) : null}
            <h1 className="thin-title mt-3 text-[clamp(2.4rem,4.2vw,4rem)] leading-[1]">{product.subtitle || product.name}</h1>
            <p className="mt-6 text-2xl font-medium text-black/85">{priceLabel(product)}</p>
            {dimensions ? <p className="mt-3 text-sm font-light text-black/56">Размеры (Ш × Г × В): {dimensions}</p> : null}
            {product.price == null ? (
              <p className="mt-2 max-w-md text-sm font-light leading-7 text-black/50">
                Стоимость рассчитывается индивидуально по размерам и конфигурации проекта.
              </p>
            ) : null}
            {product.description ? (
              <p className="mt-6 max-w-md text-sm font-light leading-7 text-black/60">{product.description}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-6">
              <LuxuryLink href={siteConfig.whatsappHref}>Заказать в WhatsApp</LuxuryLink>
              <LuxuryLink href={siteConfig.phoneHref}>{siteConfig.phone}</LuxuryLink>
            </div>
            {specs.length > 0 ? (
              <dl className="mt-10 grid grid-cols-2 gap-x-8 border-t border-black/14 pt-6">
                {specs.map((item) => (
                  <div key={item.label} className="border-b border-black/12 py-3.5">
                    <dt className="text-xs uppercase tracking-[0.18em] text-black/38">{item.label}</dt>
                    <dd className="mt-1.5 text-sm font-light text-black/64">{item.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-black/35">Артикул: {product.name}</p>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-black/12 bg-[#f8f8f7] py-16 md:py-20">
          <div className="giorgio-container">
            <h2 className="thin-title mb-10 text-[clamp(2.2rem,4vw,4rem)] leading-none" data-luxury-reveal>
              С этим товаром покупают также
            </h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="group block" data-luxury-reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#efeae2]">
                    <Image
                      src={assetPath(item.heroThumb || item.heroImage)}
                      alt={item.subtitle || item.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-contain transition-transform duration-[1400ms] ease-luxury group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pt-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-sm font-medium leading-snug">{item.subtitle || item.name}</h3>
                      <p className="shrink-0 text-sm font-medium text-black/75">{priceLabel(item)}</p>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-black/40">Артикул: {item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-black/12 bg-[#f8f8f7] py-16 text-[#3f3f3f] md:py-20">
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
