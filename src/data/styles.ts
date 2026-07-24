export type InteriorStyle = {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  image: string;
  gallery: string[];
};

export type StyleGroup = {
  id: string;
  title: string;
  styles: InteriorStyle[];
};

function styleGallery(slug: string, count: number): string[] {
  return [
    `/images/styles/${slug}/${slug}-main.jpg`,
    ...Array.from({ length: count }, (_, index) => `/images/styles/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.jpg`)
  ];
}

export const styleGroups: StyleGroup[] = [
  {
    id: "modern-minimal",
    title: "Современные и минималистичные",
    styles: [
      {
        slug: "modern",
        title: "Современный стиль",
        titleEn: "Modern",
        subtitle: "Чистая геометрия, благородные фактуры и спокойная палитра.",
        description:
          "Современный стиль строится на чистой геометрии и благородных материалах: дерево, камень и мягкий рассеянный свет создают сдержанный интерьер, в котором каждая деталь звучит дорого.",
        image: "/images/styles/modern/modern-main.jpg",
        gallery: styleGallery("modern", 12)
      },
      {
        slug: "warm-minimalism",
        title: "Тёплый минимализм",
        titleEn: "Warm Minimalism",
        subtitle: "Тишина формы, молочные оттенки и мягкий свет.",
        description:
          "Тёплый минимализм — это минимум деталей и максимум фактуры: кремовые и песочные оттенки, натуральное дерево и мягкий свет создают ощущение спокойствия и обволакивающего уюта.",
        image: "/images/styles/warm-minimalism/warm-minimalism-main.jpg",
        gallery: styleGallery("warm-minimalism", 18)
      },
      {
        slug: "scandinavian",
        title: "Скандинавский стиль",
        titleEn: "Scandinavian",
        subtitle: "Светлые пространства, природные материалы и лёгкость.",
        description:
          "Скандинавский стиль соединяет функциональную простоту с уютом: светлые стены, натуральное дерево и точные цветовые акценты делают пространство лёгким и живым.",
        image: "/images/styles/scandinavian/scandinavian-main.jpg",
        gallery: styleGallery("scandinavian", 8)
      }
    ]
  },
  {
    id: "classic-premium",
    title: "Классические и премиальные",
    styles: []
  },
  {
    id: "signature",
    title: "Авторские и характерные",
    styles: [
      {
        slug: "modern-country",
        title: "Модерн кантри",
        titleEn: "Modern Country",
        subtitle: "Современное прочтение загородного дома.",
        description:
          "Модерн кантри — современное прочтение загородного дома: натуральное дерево, живой камень и глубокие природные оттенки создают атмосферу тепла и уединения.",
        image: "/images/styles/modern-country/modern-country-main.jpg",
        gallery: styleGallery("modern-country", 17)
      }
    ]
  }
];

export const interiorStyles: InteriorStyle[] = styleGroups.flatMap((group) => group.styles);

export function getStyleBySlug(slug: string) {
  return interiorStyles.find((style) => style.slug === slug);
}

export function getStyleGroup(slug: string) {
  return styleGroups.find((group) => group.styles.some((style) => style.slug === slug));
}
