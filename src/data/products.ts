import catalog from "./catalog.generated.json";

export type CategoryId =
  | "sofas"
  | "armchairs"
  | "beds"
  | "poufs"
  | "cabinets"
  | "wardrobes"
  | "kitchens";
export type CollectionId = "radius" | "cloud" | "soft-line" | "modulo";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  collection: CollectionId | "";
  collectionName: string;
  subtitle: string;
  intro: string;
  description: string;
  color: string;
  tone: string;
  material: string;
  softness: string;
  form: string;
  seats: string;
  width: string;
  depth: string;
  height: string;
  price: number | null;
  shortSpecs: string[];
  specifications: ProductSpecification[];
  images: string[];
  heroImage: string;
  featured: boolean;
  order: number;
};

export type ProductCategory = {
  id: CategoryId;
  title: string;
  titleEn: string;
  subtitle: string;
  href: string;
  image: string;
  priced: boolean;
};

export type Collection = {
  id: CollectionId;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  productSlugs: string[];
};

export const categories: ProductCategory[] = [
  {
    id: "sofas",
    title: "Диваны",
    titleEn: "Sofas",
    subtitle: "Модульные и прямые формы для гостиных и лаунж-зон.",
    href: "/products?category=sofas",
    image: "/images/catalog/sofas/kings4-1.jpg",
    priced: true
  },
  {
    id: "armchairs",
    title: "Кресла",
    titleEn: "Armchairs",
    subtitle: "Скульптурные акценты с мягкой посадкой.",
    href: "/products?category=armchairs",
    image: "/images/catalog/armchairs/kingc3.jpg",
    priced: true
  },
  {
    id: "beds",
    title: "Кровати",
    titleEn: "Beds",
    subtitle: "Спокойная архитектура спальни в премиальных тканях.",
    href: "/products?category=beds",
    image: "/images/catalog/beds/kingb4.jpg",
    priced: true
  },
  {
    id: "cabinets",
    title: "Шкафы",
    titleEn: "Cabinets",
    subtitle: "Корпусные системы под архитектуру пространства. Цена по размерам проекта.",
    href: "/products?category=cabinets",
    image: "/images/lookbook/lookbook-02.png",
    priced: false
  },
  {
    id: "wardrobes",
    title: "Гардеробные",
    titleEn: "Wardrobes",
    subtitle: "Индивидуальные гардеробные и встроенные модули. Цена по размерам проекта.",
    href: "/products?category=wardrobes",
    image: "/images/lookbook/lookbook-01.png",
    priced: false
  },
  {
    id: "kitchens",
    title: "Кухни",
    titleEn: "Kitchens",
    subtitle: "Премиальные кухни по размерам проекта. Цена по размерам проекта.",
    href: "/products?category=kitchens",
    image: "/images/lookbook/lookbook-03.png",
    priced: false
  }
];

const collectionMeta: Omit<Collection, "productSlugs">[] = [
  {
    id: "radius",
    slug: "radius",
    title: "Radius Collection",
    subtitle: "Плавная радиусная геометрия и выразительный терракотовый тон.",
    description:
      "Коллекция Radius строится вокруг мягкой дуги, глубокой посадки и тёплого цвета, который становится центральным элементом пространства.",
    image: "/images/catalog/sofas/kings4-1.jpg"
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "Cloud Collection",
    subtitle: "Молочная фактура букле и спокойные округлые объёмы.",
    description:
      "Cloud создана для светлых интерьеров, где мягкость формы важна так же, как архитектура пространства.",
    image: "/images/catalog/sofas/kings2-1.jpg"
  },
  {
    id: "soft-line",
    slug: "soft-line",
    title: "Soft Line Collection",
    subtitle: "Лаконичные прямые формы с деликатной пластикой деталей.",
    description:
      "Soft Line объединяет тёплую обивку, округлые подлокотники и минималистичный силуэт для современных жилых интерьеров.",
    image: "/images/catalog/sofas/kings1-1.jpg"
  },
  {
    id: "modulo",
    slug: "modulo",
    title: "Modulo Collection",
    subtitle: "Просторная модульная система для резиденций и проектов.",
    description:
      "Modulo работает как архитектурный объект: широкая посадка, чистая геометрия и премиальная фактура.",
    image: "/images/catalog/sofas/kings13-1.jpg"
  }
];

const collectionNameById = new Map(collectionMeta.map((item) => [item.id, item.title]));

export const products: Product[] = (catalog.products as Array<Omit<Product, "collectionName">>).map(
  (product) => ({
    ...product,
    collectionName: collectionNameById.get(product.collection as CollectionId) ?? "KING COLLECTION"
  })
);

export const collections: Collection[] = collectionMeta.map((meta) => ({
  ...meta,
  productSlugs: products.filter((product) => product.collection === meta.id).map((product) => product.slug)
}));

export const featuredProduct =
  products.find((product) => product.featured && product.color === "terracotta") ??
  products.find((product) => product.featured) ??
  products[0];

export const colorFilters = [
  { label: "Все оттенки", value: "all" },
  { label: "Молочный", value: "ivory" },
  { label: "Терракотовый", value: "terracotta" },
  { label: "Оливковый", value: "olive" },
  { label: "Кофейный", value: "brown" },
  { label: "Голубой", value: "blue" },
  { label: "Серый", value: "grey" }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function categoryHasPrice(category: CategoryId) {
  return categories.find((item) => item.id === category)?.priced ?? false;
}

export function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₸`;
}

export function priceLabel(product: Product) {
  if (product.price != null) {
    return formatPrice(product.price);
  }
  return "Цена по запросу";
}
