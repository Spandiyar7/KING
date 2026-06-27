// Reads editable content from content/products/*.json (managed by Decap CMS)
// and produces src/data/catalog.generated.json consumed by the site at build time.
// Run automatically via the "prebuild" / "predev" npm scripts.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const productsDir = join(root, "content", "products");
const outFile = join(root, "src", "data", "catalog.generated.json");

const PRICED_CATEGORIES = new Set(["sofas", "armchairs", "beds", "poufs"]);

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function nonEmpty(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function buildSpecs(p) {
  const dims = [p.width, p.depth, p.height].filter(nonEmpty);
  const rows = [
    ["Категория", categoryTitle(p.category)],
    ["Форма", p.form],
    ["Материал обивки", p.material],
    ["Цвет", p.tone || p.color],
    ["Мягкость", p.softness],
    p.seats ? ["Посадочные места", p.seats] : null,
    dims.length === 3 ? ["Габариты (Ш×Г×В), см", `${p.width} × ${p.depth} × ${p.height}`] : null,
  ].filter(Boolean);
  return rows
    .filter(([, value]) => nonEmpty(value))
    .map(([label, value]) => ({ label, value: String(value) }));
}

function categoryTitle(id) {
  return (
    {
      sofas: "Диван",
      armchairs: "Кресло",
      beds: "Кровать",
      poufs: "Пуф",
      cabinets: "Шкаф",
      wardrobes: "Гардеробная",
      kitchens: "Кухня",
    }[id] || id
  );
}

function buildShortSpecs(p) {
  const dims = [p.width, p.depth, p.height].filter(nonEmpty);
  return [
    p.material,
    p.seats ? `${p.seats} мест` : null,
    p.form,
    dims.length === 3 ? `${p.width}×${p.depth} см` : null,
  ].filter(nonEmpty);
}

function toProduct(slug, p) {
  const images = Array.isArray(p.images) && p.images.length > 0 ? p.images : [];
  const hasPrice = PRICED_CATEGORIES.has(p.category) && nonEmpty(p.price);
  return {
    id: slug,
    slug,
    name: p.name || slug.toUpperCase(),
    category: p.category,
    collection: p.collection || "",
    subtitle: p.subtitle || "",
    intro: p.intro || p.subtitle || "",
    description: p.description || "",
    color: p.color || "",
    tone: p.tone || "",
    material: p.material || "",
    softness: p.softness || "",
    form: p.form || "",
    seats: p.seats || "",
    width: p.width || "",
    depth: p.depth || "",
    height: p.height || "",
    price: hasPrice ? Number(p.price) : null,
    images,
    heroImage: images[0] || "/images/hero/king-hero.png",
    featured: Boolean(p.featured),
    order: typeof p.order === "number" ? p.order : 999,
    shortSpecs: buildShortSpecs(p),
    specifications: buildSpecs(p),
  };
}

function main() {
  let files = [];
  try {
    files = readdirSync(productsDir).filter((f) => f.endsWith(".json"));
  } catch {
    files = [];
  }

  const products = files
    .map((file) => {
      const slug = file.replace(/\.json$/, "");
      return toProduct(slug, readJson(join(productsDir, file)));
    })
    .sort((a, b) => a.order - b.order);

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, JSON.stringify({ products }, null, 2) + "\n", "utf8");
  console.log(`generate-catalog: wrote ${products.length} products -> ${outFile}`);
}

main();
