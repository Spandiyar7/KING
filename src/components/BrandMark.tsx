import Image from "next/image";
import { assetPath } from "@/config/paths";

type BrandMarkProps = {
  compact?: boolean;
  iconOnly?: boolean;
  /** Use the dark (black) lion for light backgrounds. Defaults to the white lion for dark backgrounds. */
  dark?: boolean;
};

export function BrandMark({ compact = false, iconOnly = false, dark = false }: BrandMarkProps) {
  const lion = dark ? "/images/brand/lion-black.png" : "/images/brand/lion-white.png";
  const iconSize = iconOnly
    ? "h-12 w-12 md:h-[3.4rem] md:w-[3.4rem]"
    : compact
      ? "h-9 w-9"
      : "h-10 w-10 md:h-[2.85rem] md:w-[2.85rem]";

  if (iconOnly) {
    return (
      <span className="block" aria-label="KING ATELIER">
        <Image
          src={assetPath(lion)}
          alt="KING ATELIER"
          width={160}
          height={160}
          className={`${iconSize} object-contain`}
          priority
        />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-3 md:gap-4">
      <Image
        src={assetPath(lion)}
        alt=""
        width={160}
        height={160}
        className={`${iconSize} shrink-0 object-contain`}
        aria-hidden
        priority
      />
      <span className="flex items-baseline gap-2 leading-none">
        <span className={`${compact ? "text-xl" : "text-2xl md:text-[1.95rem]"} font-medium tracking-[0.06em]`}>
          KING
        </span>
        <span
          className={`${compact ? "text-xs" : "text-sm md:text-base"} font-light uppercase tracking-[0.2em] opacity-75`}
        >
          atelier
        </span>
      </span>
    </span>
  );
}
