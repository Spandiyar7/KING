import settings from "../../content/settings/site.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kingatelier.kz";

export const siteConfig = {
  name: "KING ATELIER",
  shortName: "KING",
  url: siteUrl,
  city: settings.city,
  phone: settings.phone,
  phoneHref: settings.phoneHref,
  whatsapp: settings.whatsapp,
  whatsappHref: settings.whatsappHref,
  instagram: settings.instagram,
  instagramHref: settings.instagramHref,
  email: settings.email
};

export const homeContent = {
  heroTitle: settings.heroTitle,
  heroSubtitle: settings.heroSubtitle,
  introTitle: settings.introTitle,
  introText: settings.introText,
  workshopImage: settings.workshopImage,
  workshopAddress: settings.workshopAddress
};

export const navigation = [
  { label: "Главная", href: "/" },
  { label: "Продукция", href: "/products" },
  { label: "Коллекции", href: "/collections" },
  { label: "Диваны", href: "/products?category=sofas" },
  { label: "Кресла", href: "/products?category=armchairs" },
  { label: "Кровати", href: "/products?category=beds" },
  { label: "Шкафы", href: "/products?category=cabinets" },
  { label: "Гардеробные", href: "/products?category=wardrobes" },
  { label: "Кухни", href: "/products?category=kitchens" },
  { label: "Для дизайнеров", href: "/contract" },
  { label: "Мастерская", href: "/workshop" },
  { label: "Контакты", href: "/contacts" }
];

export const footerNavigation = [
  { label: "Коллекции", href: "/collections" },
  { label: "Продукция", href: "/products" },
  { label: "Для дизайнеров", href: "/contract" },
  { label: "Мастерская", href: "/workshop" },
  { label: "Контакты", href: "/contacts" }
];
