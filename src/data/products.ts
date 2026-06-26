export type CategoryId = "sofas" | "armchairs" | "beds" | "poufs" | "cabinets" | "wardrobes" | "kitchens";
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
  collection: CollectionId;
  collectionName: string;
  subtitle: string;
  intro: string;
  description: string;
  color: string;
  tone: string;
  shortSpecs: string[];
  specifications: ProductSpecification[];
  images: string[];
  heroImage: string;
  featured: boolean;
};

export type ProductCategory = {
  id: CategoryId;
  title: string;
  titleEn: string;
  subtitle: string;
  href: string;
  image: string;
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
    subtitle: "Модульные формы для просторных гостиных и лаунж-зон.",
    href: "/products?category=sofas",
    image: "/images/categories/sofas.png"
  },
  {
    id: "armchairs",
    title: "Кресла",
    titleEn: "Armchairs",
    subtitle: "Скульптурные акценты с мягкой посадкой.",
    href: "/products?category=armchairs",
    image: "/images/categories/armchairs.png"
  },
  {
    id: "beds",
    title: "Кровати",
    titleEn: "Beds",
    subtitle: "Спокойная архитектура спальни в премиальных тканях.",
    href: "/products?category=beds",
    image: "/images/categories/beds.png"
  },
  {
    id: "poufs",
    title: "Пуфы",
    titleEn: "Poufs",
    subtitle: "Низкие мягкие объемы для завершения композиции.",
    href: "/products?category=poufs",
    image: "/images/categories/poufs.png"
  },
  {
    id: "cabinets",
    title: "Шкафы",
    titleEn: "Cabinets",
    subtitle: "Корпусные системы под архитектуру пространства, фасады и хранение.",
    href: "/products?category=cabinets",
    image: "/images/lookbook/lookbook-02.png"
  },
  {
    id: "wardrobes",
    title: "Гардеробные",
    titleEn: "Wardrobes",
    subtitle: "Индивидуальные гардеробные комнаты, встроенные модули и скрытые системы.",
    href: "/products?category=wardrobes",
    image: "/images/lookbook/lookbook-01.png"
  },
  {
    id: "kitchens",
    title: "Кухни",
    titleEn: "Kitchens",
    subtitle: "Премиальные кухни по размерам проекта: материалы, свет, хранение и техника.",
    href: "/products?category=kitchens",
    image: "/images/lookbook/lookbook-03.png"
  }
];

export const products: Product[] = [
  {
    id: "radius-terra",
    slug: "radius-terra",
    name: "RADIUS TERRA",
    category: "sofas",
    collection: "radius",
    collectionName: "Radius Collection",
    subtitle: "Радиусный модульный диван в терракотовом оттенке",
    intro: "Скульптурный диван для современных жилых пространств.",
    description:
      "Радиусный модульный диван с глубокими сиденьями и плавными линиями. Терракотовый оттенок делает модель выразительным центром современной гостиной, а встроенный журнальный столик добавляет функциональности.",
    color: "terracotta",
    tone: "теплый терракотовый",
    shortSpecs: ["Велюр", "8 мест", "Модульный", "Organic Luxury"],
    specifications: [
      { label: "Тип", value: "дизайнерский модульный диван премиум-класса" },
      { label: "Механизм", value: "отсутствует, нераскладной" },
      { label: "Форма", value: "полукруглый / радиусный / модульный" },
      { label: "Стиль", value: "современный, минимализм, luxury, organic design" },
      { label: "Цвет", value: "терракотовый / кирпично-оранжевый" },
      { label: "Обивка", value: "велюр / бархатистая мебельная ткань" },
      { label: "Наполнитель", value: "высокоэластичный ППУ повышенной плотности, синтепух" },
      { label: "Ширина", value: "ориентировочно 430-480 см" },
      { label: "Глубина", value: "ориентировочно 110-120 см" },
      { label: "Высота", value: "около 75-80 см" },
      { label: "Спальное место", value: "отсутствует" },
      { label: "Посадочные места", value: "8" },
      { label: "Жесткость", value: "средняя" },
      { label: "Подлокотники", value: "мягкие, интегрированные, закругленные" },
      { label: "Опоры", value: "скрытые" },
      { label: "Тон", value: "теплый терракотовый" },
      { label: "Вес", value: "ориентировочно 220 кг" }
    ],
    images: [
      "/images/products/radius-terra/radius-terra-01.png",
      "/images/lookbook/lookbook-01.png",
      "/images/hero/king-hero.png"
    ],
    heroImage: "/images/products/radius-terra/radius-terra-01.png",
    featured: true
  },
  {
    id: "cloud-arc",
    slug: "cloud-arc",
    name: "CLOUD ARC",
    category: "sofas",
    collection: "cloud",
    collectionName: "Cloud Collection",
    subtitle: "Молочный диван из букле с мягкой радиусной формой",
    intro: "Мягкая радиусная форма для спокойных премиальных интерьеров.",
    description:
      "Современный модульный диван с элегантной радиусной формой и мягкой обивкой из букле. Светлый молочный оттенок, глубокая посадка и объемные подушки создают спокойный премиальный образ для просторного интерьера.",
    color: "ivory",
    tone: "светлый молочный / теплый молочный",
    shortSpecs: ["Boucle", "6-7 мест", "Модульный", "Organic Modern"],
    specifications: [
      { label: "Тип", value: "дизайнерский модульный диван премиум-класса" },
      { label: "Механизм", value: "отсутствует, нераскладной" },
      { label: "Форма", value: "полукруглый / радиусный / модульный" },
      { label: "Стиль", value: "современный, минимализм, Organic Modern, Luxury" },
      { label: "Цвет", value: "молочный / айвори" },
      { label: "Обивка", value: "букле, мебельная ткань Boucle" },
      { label: "Наполнитель", value: "высокоэластичный ППУ повышенной плотности, синтепух" },
      { label: "Ширина", value: "ориентировочно 420-450 см" },
      { label: "Глубина", value: "ориентировочно 100-110 см" },
      { label: "Высота", value: "ориентировочно 75 см" },
      { label: "Спальное место", value: "отсутствует" },
      { label: "Посадочные места", value: "6-7" },
      { label: "Жесткость", value: "средне-мягкая" },
      { label: "Подлокотники", value: "мягкие, широкие, закругленные, интегрированные" },
      { label: "Опоры", value: "скрытые пластиковые регулируемые опоры" },
      { label: "Тон", value: "светлый молочный / теплый молочный" },
      { label: "Вес", value: "ориентировочно 190 кг" }
    ],
    images: [
      "/images/products/cloud-arc/cloud-arc-01.png",
      "/images/categories/sofas.png",
      "/images/hero/king-hero.png"
    ],
    heroImage: "/images/products/cloud-arc/cloud-arc-01.png",
    featured: true
  },
  {
    id: "soft-line",
    slug: "soft-line",
    name: "SOFT LINE",
    category: "sofas",
    collection: "soft-line",
    collectionName: "Soft Line Collection",
    subtitle: "Прямой дизайнерский диван в эстетике Japandi",
    intro: "Минималистичный силуэт с теплой молочной фактурой.",
    description:
      "Прямой дизайнерский диван с плавными округлыми формами, теплой молочной обивкой и деревянными ножками. Лаконичный силуэт делает модель естественным выбором для интерьеров в стиле Japandi и Organic Modern.",
    color: "ivory",
    tone: "теплый молочный",
    shortSpecs: ["Boucle", "4 места", "Прямой", "Japandi"],
    specifications: [
      { label: "Тип", value: "дизайнерский модульный диван" },
      { label: "Механизм", value: "отсутствует, нераскладной" },
      { label: "Форма", value: "прямой" },
      { label: "Стиль", value: "современный, минимализм, Organic Modern, Japandi" },
      { label: "Цвет", value: "молочный / айвори" },
      { label: "Обивка", value: "ткань букле, Boucle" },
      { label: "Наполнитель", value: "высокоэластичный ППУ, синтепух" },
      { label: "Ширина", value: "ориентировочно 280 см" },
      { label: "Глубина", value: "ориентировочно 100 см" },
      { label: "Высота", value: "ориентировочно 78 см" },
      { label: "Спальное место", value: "отсутствует" },
      { label: "Посадочные места", value: "4" },
      { label: "Жесткость", value: "средне-мягкая" },
      { label: "Подлокотники", value: "мягкие, широкие, закругленные, интегрированные" },
      { label: "Опоры", value: "массив дерева, темное дерево" },
      { label: "Тон", value: "теплый молочный" },
      { label: "Вес", value: "ориентировочно 95 кг" }
    ],
    images: [
      "/images/products/soft-line/soft-line-01.png",
      "/images/lookbook/lookbook-03.png",
      "/images/categories/beds.png"
    ],
    heroImage: "/images/products/soft-line/soft-line-01.png",
    featured: true
  },
  {
    id: "modulo",
    slug: "modulo",
    name: "MODULO",
    category: "sofas",
    collection: "modulo",
    collectionName: "Modulo Collection",
    subtitle: "Большой прямой модульный диван для просторных лаунж-зон",
    intro: "Архитектурная модульная конструкция для больших пространств.",
    description:
      "Большой прямой модульный диван с широкой посадкой, лаконичной геометрией и премиальной обивкой букле. Модель создана для просторных гостиных, лаунж-зон, гостиниц, офисов и шоурумов.",
    color: "ivory",
    tone: "теплый молочный",
    shortSpecs: ["Boucle", "6-7 мест", "Модульный", "Minimal Luxury"],
    specifications: [
      { label: "Тип", value: "модульный дизайнерский диван" },
      { label: "Механизм", value: "отсутствует, нераскладной" },
      { label: "Форма", value: "прямой" },
      { label: "Стиль", value: "современный, минимализм, Organic Modern, Japandi" },
      { label: "Цвет", value: "молочный / айвори" },
      { label: "Обивка", value: "мебельная ткань букле" },
      { label: "Наполнитель", value: "высокоэластичный ППУ, синтепух" },
      { label: "Ширина", value: "ориентировочно 420 см" },
      { label: "Глубина", value: "ориентировочно 105 см" },
      { label: "Высота", value: "ориентировочно 78 см" },
      { label: "Спальное место", value: "отсутствует" },
      { label: "Посадочные места", value: "6-7" },
      { label: "Жесткость", value: "средняя" },
      { label: "Подлокотники", value: "мягкие, широкие, закругленные" },
      { label: "Опоры", value: "скрытые пластиковые опоры" },
      { label: "Тон", value: "теплый молочный" },
      { label: "Вес", value: "ориентировочно 160 кг" }
    ],
    images: [
      "/images/products/modulo/modulo-01.png",
      "/images/lookbook/lookbook-02.png",
      "/images/hero/king-hero.png"
    ],
    heroImage: "/images/products/modulo/modulo-01.png",
    featured: true
  }
];

export const collections: Collection[] = [
  {
    id: "radius",
    slug: "radius",
    title: "Radius Collection",
    subtitle: "Плавная радиусная геометрия и выразительный терракотовый тон.",
    description:
      "Коллекция Radius строится вокруг мягкой дуги, глубокой посадки и теплого цвета, который становится центральным элементом пространства.",
    image: "/images/products/radius-terra/radius-terra-01.png",
    productSlugs: ["radius-terra"]
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "Cloud Collection",
    subtitle: "Молочная фактура букле и спокойные округлые объемы.",
    description:
      "Cloud создана для светлых интерьеров, где мягкость формы важна так же, как архитектура пространства.",
    image: "/images/products/cloud-arc/cloud-arc-01.png",
    productSlugs: ["cloud-arc"]
  },
  {
    id: "soft-line",
    slug: "soft-line",
    title: "Soft Line Collection",
    subtitle: "Лаконичные прямые формы с деликатной пластикой деталей.",
    description:
      "Soft Line объединяет теплую молочную обивку, округлые подлокотники и минималистичный силуэт для современных жилых интерьеров.",
    image: "/images/products/soft-line/soft-line-01.png",
    productSlugs: ["soft-line"]
  },
  {
    id: "modulo",
    slug: "modulo",
    title: "Modulo Collection",
    subtitle: "Просторная модульная система для резиденций и проектов.",
    description:
      "Modulo работает как архитектурный объект: широкая посадка, чистая геометрия и премиальная фактура букле.",
    image: "/images/products/modulo/modulo-01.png",
    productSlugs: ["modulo"]
  }
];

export const featuredProduct = products.find((product) => product.slug === "radius-terra") ?? products[0];

export const colorFilters = [
  { label: "Все оттенки", value: "all" },
  { label: "Молочный", value: "ivory" },
  { label: "Терракотовый", value: "terracotta" },
  { label: "Под проект", value: "custom" }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
