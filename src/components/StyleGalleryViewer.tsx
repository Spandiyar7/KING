"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetPath } from "@/config/paths";

type StyleGalleryViewerProps = {
  title: string;
  images: string[];
};

export function StyleGalleryViewer({ title, images }: StyleGalleryViewerProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const go = (delta: number) => {
    setIndex((current) => (current + delta + images.length) % images.length);
  };

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [index]);

  return (
    <div className="mx-auto grid w-full max-w-[760px] gap-4 lg:grid-cols-[88px_1fr] lg:gap-6">
      <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:max-h-[46rem] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1">
        {images.map((src, thumbIndex) => (
          <button
            key={src}
            type="button"
            ref={(element) => {
              thumbRefs.current[thumbIndex] = element;
            }}
            onClick={() => setIndex(thumbIndex)}
            aria-label={`Фото ${thumbIndex + 1}`}
            className={`focus-ring relative aspect-[3/4] w-16 shrink-0 overflow-hidden border transition-opacity duration-300 lg:w-full ${
              thumbIndex === index ? "border-black" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={assetPath(src)} alt="" fill sizes="88px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="order-1 lg:order-2">
        <div
          className="group relative aspect-[3/4] w-full overflow-hidden bg-black outline-none"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              go(-1);
            }
            if (event.key === "ArrowRight") {
              go(1);
            }
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) {
              return;
            }
            const deltaX = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(deltaX) > 40) {
              go(deltaX < 0 ? 1 : -1);
            }
          }}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-luxury"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, slideIndex) => (
              <div key={src} className="relative h-full w-full shrink-0">
                <Image
                  src={assetPath(src)}
                  alt={`${title} — интерьер ${slideIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  priority={slideIndex === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Предыдущее фото"
                onClick={() => go(-1)}
                className="focus-ring absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-black/70 shadow-sm transition-opacity duration-300 hover:bg-white lg:opacity-0 lg:group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Следующее фото"
                onClick={() => go(1)}
                className="focus-ring absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-black/70 shadow-sm transition-opacity duration-300 hover:bg-white lg:opacity-0 lg:group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
              </button>
              <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-black/55 px-3 py-1 text-xs font-light tracking-[0.08em] text-white">
                {index + 1} / {images.length}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
