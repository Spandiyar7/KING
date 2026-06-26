import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { PillLink } from "@/components/PillLink";
import { collections } from "@/data/products";
import { footerNavigation, navigation, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer>
      <section className="grid border-y border-black/14 bg-[#f8f8f7] text-[#3f3f3f] lg:grid-cols-3">
        {[
          { title: "Запросить информацию", text: "Получить поддержку по модели", label: "Связаться с нами", href: "/contacts" },
          { title: "Каталог", text: "Откройте для себя все коллекции", label: "Скачать", href: siteConfig.catalogHref, download: true },
          { title: "Мастерская", text: "Мягкая и корпусная мебель под заказ", label: "Посмотреть", href: "/workshop" }
        ].map((item) => (
          <div key={item.title} className="flex min-h-[20rem] flex-col items-center justify-center border-b border-black/14 px-6 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <h2 className="thin-title text-[clamp(2.5rem,3.4vw,4.5rem)] leading-none">{item.title}</h2>
            <p className="mt-6 text-lg font-light text-black/58">{item.text}</p>
            <PillLink href={item.href} download={item.download} className="mt-9 border-black bg-black text-white hover:bg-transparent hover:text-black">
              {item.label}
            </PillLink>
          </div>
        ))}
      </section>

      <section className="bg-black py-16 text-white md:py-24">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex text-white">
              <BrandMark />
            </Link>
            <p className="mt-8 max-w-sm text-sm leading-7 text-white/48">
              Премиальная мягкая и корпусная мебель для современных интерьеров, частных резиденций и индивидуальных заказов.
            </p>
          </div>
          <FooterColumn title="Коллекции" links={collections.map((item) => ({ label: item.title.replace(" Collection", ""), href: `/collections/${item.slug}` }))} />
          <FooterColumn
            title="Продукция"
            links={navigation
              .filter((item) => ["Диваны", "Кресла", "Кровати", "Пуфы"].includes(item.label))
              .concat(navigation.filter((item) => ["Шкафы", "Гардеробные", "Кухни"].includes(item.label)))
              .map((item) => ({ label: item.label, href: item.href }))}
          />
          <FooterColumn title="KING Collection" links={footerNavigation.map((item) => ({ label: item.label, href: item.href }))} />
        </div>
        <div className="giorgio-container mt-16 grid gap-6 border-t border-white/12 pt-8 text-sm text-white/44 md:grid-cols-3">
          <a href={siteConfig.whatsappHref} className="transition-colors hover:text-white">
            WhatsApp {siteConfig.whatsapp}
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
