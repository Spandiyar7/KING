import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { PillLink } from "@/components/PillLink";
import { collections } from "@/data/products";
import { footerNavigation, navigation, siteConfig } from "@/config/site";

const categoryLabels = ["Диваны", "Кресла", "Кровати", "Шкафы", "Гардеробные", "Кухни"];

export function Footer() {
  return (
    <footer>
      <section className="border-y border-black/14 bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-28">
        <div className="giorgio-container flex flex-col items-center text-center">
          <BrandMark dark />
          <p className="mt-9 text-sm uppercase tracking-[0.2em] text-black/40">
            Звоните — подберём мебель под ваш интерьер
          </p>
          <a
            href={siteConfig.phoneHref}
            className="thin-title mt-5 block text-[clamp(2.6rem,8vw,7rem)] leading-none transition-colors hover:text-black"
          >
            {siteConfig.phone}
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <PillLink href={siteConfig.whatsappHref} className="border-black bg-black text-white hover:bg-transparent hover:text-black">
              WhatsApp
            </PillLink>
            <PillLink href="/contacts" className="border-black text-black hover:bg-black hover:text-white">
              Связаться с нами
            </PillLink>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-24">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex text-white">
              <BrandMark />
            </Link>
            <p className="mt-8 max-w-sm text-sm leading-7 text-white/48">
              Премиальная мягкая и корпусная мебель для современных интерьеров, частных резиденций и индивидуальных
              заказов.
            </p>
          </div>
          <FooterColumn
            title="Коллекции"
            links={collections.map((item) => ({ label: item.title.replace(" Collection", ""), href: `/collections/${item.slug}` }))}
          />
          <FooterColumn
            title="Продукция"
            links={navigation
              .filter((item) => categoryLabels.includes(item.label))
              .map((item) => ({ label: item.label, href: item.href }))}
          />
          <FooterColumn title="KING COLLECTION" links={footerNavigation.map((item) => ({ label: item.label, href: item.href }))} />
        </div>
        <div className="giorgio-container mt-16 grid gap-6 border-t border-white/12 pt-8 text-sm text-white/44 md:grid-cols-4">
          <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
            {siteConfig.phone}
          </a>
          <a href={siteConfig.whatsappHref} className="transition-colors hover:text-white">
            WhatsApp
          </a>
          <a href={siteConfig.instagramHref} className="transition-colors hover:text-white">
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
