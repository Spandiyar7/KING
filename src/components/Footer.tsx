import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { footerNavigation, siteConfig } from "@/config/site";

const productLinks = [
  { label: "Диваны", href: "/products?category=sofas" },
  { label: "Кресла", href: "/products?category=armchairs" },
  { label: "Кровати", href: "/products?category=beds" },
  { label: "Шкафы", href: "/products?category=cabinets" },
  { label: "Гардеробные", href: "/products?category=wardrobes" },
  { label: "Кухни", href: "/products?category=kitchens" },
  { label: "Пуфы", href: "/contacts" },
  { label: "Банкетки", href: "/contacts" },
  { label: "Перешивка мягкой мебели", href: "/contacts" },
  { label: "Реставрация корпусной мебели", href: "/contacts" }
];

export function Footer() {
  return (
    <footer>
      <section className="bg-black py-16 text-white md:py-24">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex text-white">
              <BrandMark />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="mt-8 block text-2xl font-light tracking-[0.01em] text-white/90 transition-colors hover:text-white"
            >
              {siteConfig.phone}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm transition-colors hover:bg-white hover:text-black"
              >
                WhatsApp {siteConfig.whatsapp}
              </a>
              <a
                href={siteConfig.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm transition-colors hover:bg-white hover:text-black"
              >
                Instagram {siteConfig.instagram}
              </a>
            </div>
          </div>
          <FooterColumn title="Продукция" links={productLinks} />
          <FooterColumn title="KING ATELIER" links={footerNavigation.map((item) => ({ label: item.label, href: item.href }))} />
        </div>
        <div className="giorgio-container mt-16 grid gap-6 border-t border-white/12 pt-8 text-sm text-white/44 md:grid-cols-3">
          <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
            {siteConfig.phone}
          </a>
          <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            Instagram {siteConfig.instagram}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
            {siteConfig.email}
          </a>
        </div>
      </section>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h3 className="border-b border-white/12 pb-5 text-xl font-light tracking-[0.08em]">{title}</h3>
      <ul className="mt-6 grid gap-3 text-lg font-light text-white/38">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
