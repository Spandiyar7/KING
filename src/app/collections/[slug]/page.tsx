import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuxuryLink } from "@/components/LuxuryLink";
import { PageHero } from "@/components/PageHero";
import { assetPath } from "@/config/paths";
import { collections, getCollectionBySlug, products } from "@/data/products";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.title,
    description: collection.description,
    openGraph: {
      title: `${collection.title} - KING COLLECTION`,
      description: collection.description,
      images: [{ url: collection.image, alt: collection.title }]
    }
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter((product) => collection.productSlugs.includes(product.slug));

  return (
    <main>
      <PageHero eyebrow="Коллекция" title={collection.title} description={collection.description} image={collection.image} />

      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-28">
        <div className="giorgio-container grid gap-10 lg:grid-cols-[0.82fr_1fr]">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">О коллекции</p>
            <h2 className="thin-title mt-5 text-[clamp(3.6rem,8vw,8rem)] leading-[0.96]">{collection.subtitle}</h2>
          </div>
          <div className="max-w-xl space-y-8 text-sm font-light leading-7 text-black/56 lg:pt-8" data-luxury-reveal>
            <p>{collection.description}</p>
            <LuxuryLink href="/products">Все продукты</LuxuryLink>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-28">
        <div className="giorgio-container">
          <p className="mb-10 text-sm uppercase tracking-[0.18em] text-white/42" data-luxury-reveal>
            Модели
          </p>
          <div className="border-l border-t border-white/14">
            {collectionProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group grid border-b border-r border-white/14 lg:grid-cols-[1fr_0.82fr]"
                data-luxury-reveal
              >
                <div className="relative min-h-[28rem] overflow-hidden bg-white/5 lg:min-h-[42rem]">
                  <Image
                    src={assetPath(product.heroImage)}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <h2 className="thin-title text-[clamp(3.4rem,7vw,7rem)] leading-[0.9]">{product.name}</h2>
                  <p className="mt-7 text-xl font-light text-white/72">{product.subtitle}</p>
                  <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/56">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
