import Link from "next/link";
import { assetPath } from "@/config/paths";
import { collections } from "@/data/products";

type CollectionRailProps = {
  title?: string;
  compact?: boolean;
};

export function CollectionRail({ title = "Наши коллекции", compact = false }: CollectionRailProps) {
  return (
    <section className="overflow-hidden bg-[#f8f8f7] text-[#3f3f3f]">
      <div className={`${compact ? "min-h-[78vh]" : "min-h-screen"} flex flex-col lg:flex-row`}>
        <div className="flex min-h-[18rem] shrink-0 items-end border-b border-black/14 px-6 py-12 lg:min-h-screen lg:w-[30vw] lg:border-b-0 lg:border-r lg:px-6 lg:pb-[24vh]">
          <h2 className="thin-title text-[clamp(3.2rem,5vw,6.2rem)] leading-[1.05]">{title}</h2>
        </div>
        <div
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-horizontal-rail
        >
          {collections.map((collection, index) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group flex min-h-[76vh] min-w-[88vw] snap-center flex-col justify-between border-r border-black/14 px-8 pb-14 pt-24 md:min-w-[56vw] lg:min-h-screen lg:min-w-[42vw] lg:px-16 lg:pb-[12vh] lg:pt-[22vh]"
            >
              <div className="flex flex-1 items-center justify-center pb-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(collection.image)}
                  alt={collection.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="max-h-[46vh] w-auto max-w-full object-contain transition-transform duration-[1600ms] ease-luxury group-hover:scale-[1.03] lg:max-h-[54vh]"
                />
              </div>
              <div className="mx-auto w-full max-w-[780px] text-center">
                <h3 className="thin-title text-[clamp(3.2rem,4.4vw,5.4rem)] leading-none">{collection.title.replace(" Collection", "")}</h3>
                <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-black/44">{collection.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
