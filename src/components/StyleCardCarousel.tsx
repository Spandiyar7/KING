"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetPath } from "@/config/paths";

type StyleCardCarouselProps = {
  href: string;
  title: string;
  images: string[];
};

export function StyleCardCarousel({ href, title, images }: StyleCardCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => {
    setIndex((current) => (current + delta + images.length) % images.length);
  };

  return (
    <div className="group relative overflow-hidden border border-black/10 bg-black">
      <div
        className="relative aspect-[3/4] overflow-hidden"
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
                alt={`${title} — фото ${slideIndex + 1}`}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Link href={href} className="absolute inset-0 z-10" aria-label={title} />

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={() => go(-1)}
              className="focus-ring absolute left-2.5 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-black/70 shadow-sm transition-opacity duration-300 hover:bg-white lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={() => go(1)}
              className="focus-ring absolute right-2.5 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-black/70 shadow-sm transition-opacity duration-300 hover:bg-white lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
              {images.map((src, dotIndex) => (
                <span
                  key={src}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    dotIndex === index ? "bg-white" : "bg-white/45"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
