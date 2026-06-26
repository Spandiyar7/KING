import { assetPath } from "@/config/paths";

export function HeroMedia() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={assetPath("/images/hero/king-hero.png")}
      aria-hidden
    >
      <source src={assetPath("/videos/hero.mp4")} type="video/mp4" />
    </video>
  );
}
