import catalog from "./catalog.generated.json";

export type CategoryId =
  | "sofas"
  | "armchairs"
  | "beds"
  | "poufs"
  | "cabinets"
  | "wardrobes"
  | "kitchens";
export type CollectionId = "terra" | "cloud" | "soft" | "bloom" | "savoy";

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
  gallery: string[];
  productSlugs: string[];
};

export const categories: ProductCategory[] = [
  {
    id: "sofas",
    title: "Диваны",
    titleEn: "Sofas",
    subtitle: "Модульные и прямые формы для гостиных и лаунж-зон.",
    href: "/products?category=sofas",
    image: "/images/categories/sofas.jpg",
    priced: true
  },
  {
    id: "armchairs",
    title: "Кресла",
    titleEn: "Armchairs",
    subtitle: "Скульптурные акценты с мягкой посадкой.",
    href: "/products?category=armchairs",
    image: "/images/categories/armchairs.jpg",
    priced: true
  },
  {
    id: "beds",
    title: "Кровати",
    titleEn: "Beds",
    subtitle: "Спокойная архитектура спальни в премиальных тканях.",
    href: "/products?category=beds",
    image: "/images/categories/beds.jpg",
    priced: true
  },
  {
    id: "cabinets",
    title: "Шкафы",
    titleEn: "Cabinets",
    subtitle: "Корпусные системы под архитектуру пространства. Цена по размерам проекта.",
    href: "/products?category=cabinets",
    image: "/images/categories/cabinets.jpg",
    priced: false
  },
  {
    id: "wardrobes",
    title: "Гардеробные",
    titleEn: "Wardrobes",
    subtitle: "Индивидуальные гардеробные и встроенные модули. Цена по размерам проекта.",
    href: "/products?category=wardrobes",
    image: "/images/categories/wardrobes.jpg",
    priced: false
  },
  {
    id: "kitchens",
    title: "Кухни",
    titleEn: "Kitchens",
    subtitle: "Премиальные кухни по размерам проекта. Цена по размерам проекта.",
    href: "/products?category=kitchens",
    image: "/images/categories/kitchens.jpg",
    priced: false
  }
];

const collectionMeta: Omit<Collection, "productSlugs">[] = [
  {
    id: "terra",
    slug: "terra",
    title: "King Terra",
    subtitle: "Тёплый терракотовый тон и выразительная пластика.",
    description:
      "King Terra строится вокруг тёплого терракотового цвета, мягких объёмов и глубокой посадки — коллекция становится живым центром пространства.",
    image: "/images/collections/terra/terra-01.jpg",
    gallery: [
      "/images/collections/terra/terra-01.jpg",
      "/images/collections/terra/terra-02.jpg",
      "/images/collections/terra/terra-03.jpg"
    ]
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "King Cloud",
    subtitle: "Молочные модульные дуги и спокойные округлые объёмы.",
    description:
      "King Cloud создана для светлых интерьеров: мягкая фактура букле, плавные радиусные формы и лёгкость композиции.",
    image: "/images/collections/cloud/cloud-01.jpg",
    gallery: [
      "/images/collections/cloud/cloud-01.jpg",
      "/images/collections/cloud/cloud-02.jpg",
      "/images/collections/cloud/cloud-03.jpg"
    ]
  },
  {
    id: "soft",
    slug: "soft",
    title: "King Soft",
    subtitle: "Лаконичные мягкие формы и тёплый минимализм.",
    description:
      "King Soft объединяет тёплую обивку, округлые силуэты и спокойный минимализм для современных жилых интерьеров.",
    image: "/images/collections/soft/soft-06.jpg",
    gallery: [
      "/images/collections/soft/soft-01.jpg",
      "/images/collections/soft/soft-02.jpg",
      "/images/collections/soft/soft-03.jpg",
      "/images/collections/soft/soft-04.jpg",
      "/images/collections/soft/soft-05.jpg",
      "/images/collections/soft/soft-06.jpg",
      "/images/collections/soft/soft-07.jpg"
    ]
  },
  {
    id: "bloom",
    slug: "bloom",
    title: "King Bloom",
    subtitle: "Скульптурные округлые формы и мягкая фактура букле.",
    description:
      "King Bloom — пластичные «лепестковые» объёмы и нежная молочная фактура: скульптурные предметы, которые становятся акцентом интерьера.",
    image: "/images/collections/bloom/bloom-05.jpg",
    gallery: [
      "/images/collections/bloom/bloom-01.jpg",
      "/images/collections/bloom/bloom-02.jpg",
      "/images/collections/bloom/bloom-03.jpg",
      "/images/collections/bloom/bloom-04.jpg",
      "/images/collections/bloom/bloom-05.jpg"
    ]
  },
  {
    id: "savoy",
    slug: "savoy",
    title: "King Savoy",
    subtitle: "Сдержанная роскошь, благородные тона и премиальная отделка.",
    description:
      "King Savoy — коллекция для статусных интерьеров: глубокие тона, фактурные ткани и архитектурная геометрия.",
    image: "/images/collections/savoy/savoy-01.jpg",
    gallery: [
      "/images/collections/savoy/savoy-01.jpg",
      "/images/collections/savoy/savoy-02.jpg",
      "/images/collections/savoy/savoy-03.jpg",
      "/images/collections/savoy/savoy-04.jpg"
    ]
  }
];

const collectionNameById = new Map(collectionMeta.map((item) => [item.id, item.title]));

export const products: Product[] = (catalog.products as Array<Omit<Product, "collectionName">>).map(
  (product) => ({
    ...product,
    collectionName: collectionNameById.get(product.collection as CollectionId) ?? "KING ATELIER"
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

/** Похожие товары: сначала из той же коллекции, затем из той же категории. */
export function getRelatedProducts(product: Product, limit = 4) {
  const sameCollection = products.filter(
    (item) => item.slug !== product.slug && Boolean(product.collection) && item.collection === product.collection
  );
  const sameCategory = products.filter(
    (item) =>
      item.slug !== product.slug &&
      item.category === product.category &&
      !sameCollection.some((collectionItem) => collectionItem.slug === item.slug)
  );
  return [...sameCollection, ...sameCategory].slice(0, limit);
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
