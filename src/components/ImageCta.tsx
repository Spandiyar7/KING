import Image from "next/image";
import { PillLink } from "@/components/PillLink";
import { assetPath } from "@/config/paths";

type ImageCtaProps = {
  title: string;
  href: string;
  label: string;
  image: string;
  className?: string;
};

export function ImageCta({ title, href, label, image, className = "" }: ImageCtaProps) {
  return (
    <section className={`bg-[#f8f8f7] px-5 py-16 text-white md:py-28 ${className}`}>
      <div className="relative mx-auto flex min-h-[58vh] max-w-[1420px] items-center justify-center overflow-hidden bg-black text-center">
        <Image src={assetPath(image)} alt={title} fill sizes="100vw" className="object-cover opacity-58" />
        <div className="absolute inset-0 bg-black/22" />
        <div className="relative z-10 flex flex-col items-center px-6">
          <h2 className="thin-title text-[clamp(3rem,6vw,7rem)] leading-none">{title}</h2>
          <PillLink href={href} className="mt-8 border-white bg-white text-black hover:bg-transparent hover:text-white">
            {label}
          </PillLink>
        </div>
      </div>
    </section>
  );
}
