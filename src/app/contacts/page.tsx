import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LuxuryLink } from "@/components/LuxuryLink";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты KING ATELIER: WhatsApp, Instagram, email и форма заявки."
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Контакты"
        title="Контакты"
        description="Свяжитесь с KING ATELIER для консультации по моделям, ценам и проектному подбору мебели."
        image="/images/collections/savoy/savoy-01.jpg"
      />

      <section className="bg-[#f8f8f7] py-20 text-[#3f3f3f] md:py-32">
        <div className="giorgio-container grid gap-14 lg:grid-cols-[0.72fr_1fr]">
          <div data-luxury-reveal>
            <p className="text-sm uppercase tracking-[0.18em] text-black/36">KING ATELIER</p>
            <h1 className="thin-title mt-5 text-[clamp(3.6rem,8vw,8rem)] leading-[0.96]">{siteConfig.city}</h1>
            <div className="mt-10 space-y-4 text-sm font-light leading-7 text-black/58">
              <a href={siteConfig.whatsappHref} className="block transition-colors hover:text-black">
                WhatsApp {siteConfig.whatsapp}
              </a>
              <a href={siteConfig.instagramHref} className="block transition-colors hover:text-black">
                Instagram {siteConfig.instagram}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block transition-colors hover:text-black">
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-10">
              <LuxuryLink href={siteConfig.phoneHref}>Позвонить {siteConfig.phone}</LuxuryLink>
            </div>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </main>
  );
}
