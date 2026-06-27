import { assetPath } from "@/config/paths";

export function HeroMedia() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={assetPath("/images/hero/hero-poster.jpg")}
      aria-hidden
    >
      <source src={assetPath("/videos/hero.mp4")} type="video/mp4" />
    </video>
  );
}
