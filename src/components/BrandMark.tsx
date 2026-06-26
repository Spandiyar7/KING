type BrandMarkProps = {
  compact?: boolean;
  iconOnly?: boolean;
};

export function BrandMark({ compact = false, iconOnly = false }: BrandMarkProps) {
  if (iconOnly) {
    return (
      <span className="block text-[2.85rem] font-thin leading-none tracking-[-0.08em] md:text-[3.65rem]" aria-label="KING">
        K
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-4 md:gap-5">
      <span className={`${compact ? "text-[2.15rem]" : "text-[2.85rem] md:text-[3.55rem]"} shrink-0 font-thin leading-none tracking-[-0.08em]`} aria-hidden>
        K
      </span>
      <span className="flex items-baseline gap-2 leading-none">
        <span className={`${compact ? "text-xl" : "text-2xl md:text-[2rem]"} font-light tracking-[-0.04em]`}>KING</span>
        <span className={`${compact ? "text-sm" : "hidden text-xl md:inline"} font-light tracking-[-0.04em] opacity-90`}>collection</span>
      </span>
    </span>
  );
}
