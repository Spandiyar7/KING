import Image from "next/image";
import { assetPath } from "@/config/paths";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function EditorialImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority,
  sizes = "100vw"
}: EditorialImageProps) {
  const hasPositionClass = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div className={`${hasPositionClass ? "" : "relative"} overflow-hidden bg-charcoal ${className}`}>
      <Image
        src={assetPath(src)}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        data-parallax
        className={`object-cover transition-transform duration-[1400ms] ease-luxury ${imageClassName}`}
      />
    </div>
  );
}
