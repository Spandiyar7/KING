import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LuxuryLink } from "@/components/LuxuryLink";
import { PageHero } from "@/components/PageHero";
import { StyleGalleryViewer } from "@/components/StyleGalleryViewer";
import { getStyleBySlug, getStyleGroup, interiorStyles } from "@/data/styles";

type StylePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return interiorStyles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({ params }: StylePageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    return {};
  }

  return {
    title: style.title,
    description: style.description,
    openGraph: {
      title: `${style.title} — KING ATELIER`,
      description: style.description,
      images: [{ url: style.image, alt: style.title }]
    }
  };
}

export default async function StylePage({ params }: StylePageProps) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  const group = getStyleGroup(slug);

  return (
    <main>
      <PageHero
        eyebrow={group?.title ?? "Стиль"}
        title={style.title}
        description={style.description}
        image={style.image}
      />

      <section className="bg-[#f8f8f7] py-12 text-[#3f3f3f] md:py-20">
        <div className="giorgio-container">
          <StyleGalleryViewer title={style.title} images={style.gallery} />
        </div>
      </section>

      <section className="bg-[#f8f8f7] pb-20 text-[#3f3f3f] md:pb-28">
        <div className="giorgio-container grid gap-10 lg:grid-cols-[0.82fr_1fr]">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">KING ATELIER</p>
            <h2 className="thin-title mt-5 text-[clamp(2.8rem,6vw,6rem)] leading-[0.96]">
              Мебель для этого интерьера
            </h2>
          </div>
          <div className="max-w-xl space-y-8 text-sm font-light leading-7 text-black/56 lg:pt-8" data-luxury-reveal>
            <p>
              Мастерская KING ATELIER изготовит мебель под ваш проект — в размерах, тканях и оттенках вашего
              интерьера.
            </p>
            <div className="flex flex-wrap gap-8">
              <LuxuryLink href="/styles">Все стили</LuxuryLink>
              <LuxuryLink href="/contacts">Обсудить проект</LuxuryLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
