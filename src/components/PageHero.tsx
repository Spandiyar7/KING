import { EditorialImage } from "@/components/EditorialImage";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="bg-[#f8f8f7] pt-[6.9rem] text-[#3f3f3f] lg:pt-[7.75rem]">
      <div className="border-b border-black/14">
        <div className="giorgio-container grid min-h-[calc(100vh-6.9rem)] gap-14 py-16 md:py-24 lg:min-h-[calc(100vh-7.75rem)] lg:grid-cols-[0.82fr_0.78fr] lg:items-end">
          <div className="pb-2" data-luxury-reveal>
            {eyebrow ? <p className="mb-8 text-sm uppercase tracking-[0.18em] text-black/36">{eyebrow}</p> : null}
            <h1 className="thin-title text-[clamp(4rem,11vw,12rem)] leading-[0.9]">{title}</h1>
            <p className="mt-10 max-w-3xl text-lg font-light leading-9 text-black/54">{description}</p>
          </div>

          <div className="lg:pb-4" data-luxury-reveal>
            <EditorialImage
              src={image}
              alt={title}
              className="aspect-[4/5] min-h-[34rem] bg-black lg:aspect-[5/6] lg:min-h-[48rem]"
              imageClassName="opacity-95"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
