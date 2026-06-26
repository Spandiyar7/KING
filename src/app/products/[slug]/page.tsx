import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { EditorialImage } from "@/components/EditorialImage";
import { LuxuryLink } from "@/components/LuxuryLink";
import { assetPath } from "@/config/paths";
import { getProductBySlug, products } from "@/data/products";
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
      title: `${product.name} - KING COLLECTION`,
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

      <section className="bg-[#f8f8f7] py-24 text-[#3f3f3f] md:py-36">
        <div className="giorgio-container grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-end">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">Intro</p>
            <h2 className="thin-title mt-5 max-w-3xl text-[clamp(3.6rem,8vw,8.8rem)] leading-[0.94]">{product.intro}</h2>
          </div>
          <div className="max-w-xl space-y-8 lg:pb-2" data-luxury-reveal>
            <p className="text-sm font-light leading-7 text-black/56">{product.description}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-black/38">{product.shortSpecs.join(" - ")}</p>
          </div>
        </div>
      </section>

      <section className="bg-black py-5 text-white md:py-8">
        <div className="grid gap-5 md:gap-8">
          <EditorialImage src={product.images[0]} alt={`${product.name} gallery image 1`} className="h-[75vh]" priority />
          <div className="giorgio-container grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
            <EditorialImage src={product.images[1]} alt={`${product.name} gallery image 2`} className="aspect-[4/5]" sizes="(min-width: 768px) 45vw, 100vw" />
            <EditorialImage src={product.images[2]} alt={`${product.name} gallery image 3`} className="aspect-[5/4]" sizes="(min-width: 768px) 55vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeec] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[0.82fr_1fr]">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">Description</p>
            <h2 className="thin-title mt-5 text-[clamp(3.4rem,7vw,7.2rem)] leading-[0.96]">Материалы, форма и посадка</h2>
            <p className="mt-8 max-w-lg text-sm font-light leading-7 text-black/56">{product.description}</p>
          </div>
          <div data-luxury-reveal>
            <p className="mb-8 text-sm uppercase tracking-[0.18em] text-black/36">Specifications</p>
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
            <LuxuryLink href={siteConfig.catalogHref} download>
              Получить каталог
            </LuxuryLink>
            <LuxuryLink href="/contacts">Связаться с менеджером</LuxuryLink>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
