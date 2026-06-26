import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { collections, products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/collections", "/products", "/contract", "/workshop", "/contacts"];
  const collectionRoutes = collections.map((collection) => `/collections/${collection.slug}`);
  const productRoutes = products.map((product) => `/products/${product.slug}`);

  return [...staticRoutes, ...collectionRoutes, ...productRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
