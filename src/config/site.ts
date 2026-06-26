const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kingcollection.kz";

export const siteConfig = {
  name: "KING COLLECTION",
  shortName: "KING",
  url: siteUrl,
  city: "Almaty, Kazakhstan",
  whatsapp: "+7 XXX XXX XX XX",
  whatsappHref: "https://wa.me/70000000000",
  instagram: "@king.collection",
  instagramHref: "https://instagram.com/king.collection",
  email: "info@kingcollection.kz",
  catalogHref: "/catalog/king-collection-catalog.pdf",
  languages: ["RU", "EN", "KZ"] as const
};

export const navigation = [
  { label: "Главная", href: "/" },
  { label: "Коллекции", href: "/collections" },
  { label: "Продукты", href: "/products" },
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
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "Contract", href: "/contract" },
  { label: "Workshop", href: "/workshop" },
  { label: "Contacts", href: "/contacts" }
];
