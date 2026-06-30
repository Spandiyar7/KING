"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "@/components/BrandMark";
import { navigation } from "@/config/site";
import { collections, products } from "@/data/products";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const isHomeTop = pathname === "/" && !isScrolled && !isMenuOpen && !isSearchOpen;
  const menuNavigation = navigation.filter(
    (item) => !["Диваны", "Кресла", "Кровати", "Шкафы", "Гардеробные", "Кухни"].includes(item.label)
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isSearchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isSearchOpen]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return products;
    }

    return products.filter((product) =>
      [product.name, product.subtitle, product.collectionName, product.color, product.tone]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxury ${
          isHomeTop ? "bg-transparent text-white" : "bg-black text-white"
        }`}
      >
        <div className="mx-auto flex h-[6.9rem] w-full max-w-[1760px] items-center justify-between px-6 md:px-12 lg:h-[7.75rem] lg:px-[7.5rem]">
          <Link href="/" className="focus-ring text-white" aria-label="KING ATELIER">
            <BrandMark />
          </Link>

          <div className="flex items-center gap-5 md:gap-10">
            <button
              type="button"
              className={`focus-ring grid h-12 w-12 place-items-center rounded-full text-white/86 transition-colors hover:text-white ${
                isHomeTop ? "bg-black/24 backdrop-blur-sm hover:bg-black/36" : "bg-transparent hover:bg-white/10"
              }`}
              aria-label="Открыть поиск"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-6 w-6" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className="focus-ring flex items-center gap-4 text-lg font-light text-white"
              aria-label="Открыть меню"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="hidden md:inline">Меню</span>
              <span className="flex h-8 w-11 flex-col justify-center gap-2" aria-hidden>
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto bg-black text-white"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.86, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="mx-auto flex min-h-screen max-w-[1760px] flex-col px-6 py-8 md:px-12 lg:px-20">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="focus-ring">
                  <BrandMark compact />
                </Link>
                <button
                  type="button"
                  className="focus-ring flex items-center gap-4 text-lg font-light"
                  aria-label="Закрыть меню"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="hidden md:inline">Закрыть</span>
                  <X className="h-7 w-7" strokeWidth={1.4} />
                </button>
              </div>

              <div className="grid flex-1 gap-12 py-16 lg:grid-cols-[1fr_0.62fr] lg:items-end">
                <nav className="flex flex-col">
                  {menuNavigation.map((item, index) => (
                    <motion.div
                      key={item.href + item.label}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.16 + index * 0.035, duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="group flex border-b border-white/18 py-3 text-[clamp(2.35rem,5.35vw,5.75rem)] font-thin leading-[1.04] tracking-[-0.055em]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="transition-transform duration-700 ease-luxury group-hover:translate-x-5">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="grid gap-12 md:grid-cols-2 lg:block lg:space-y-12">
                  <div>
                    <p className="mb-5 text-sm uppercase tracking-[0.16em] text-white/40">Коллекции</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-lg font-light text-white/52">
                      {collections.map((collection) => (
                        <Link
                          key={collection.slug}
                          href={`/collections/${collection.slug}`}
                          className="transition-colors hover:text-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {collection.title.replace(" Collection", "")}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm leading-7 text-white/55">
                    <p>Премиальная мягкая и корпусная мебель для резиденций, гардеробных, кухонь и индивидуальных заказов.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-[80] bg-[#f8f8f7] text-[#3f3f3f]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42 }}
          >
            <div className="giorgio-container flex min-h-screen flex-col pt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.18em] text-black/42">Поиск по моделям</span>
                <button type="button" className="focus-ring grid h-12 w-12 place-items-center" aria-label="Закрыть поиск" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-6 w-6" strokeWidth={1.4} />
                </button>
              </div>
              <div className="flex flex-1 flex-col justify-center py-14">
                <label className="sr-only" htmlFor="site-search">
                  Поиск
                </label>
                <input
                  id="site-search"
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Введите модель или коллекцию"
                  className="w-full border-0 border-b border-black/20 bg-transparent pb-6 text-[clamp(2.4rem,7vw,7.5rem)] font-thin leading-none tracking-[-0.06em] outline-none placeholder:text-black/20"
                />
                <div className="mt-14 grid gap-0 border-t border-black/12 md:grid-cols-2">
                  {results.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="group border-b border-black/12 py-7 transition-colors hover:text-black"
                    >
                      <span className="block text-xs uppercase tracking-[0.18em] text-black/38">{product.collectionName}</span>
                      <span className="mt-2 block text-4xl font-thin tracking-[-0.05em]">{product.name}</span>
                      <span className="mt-3 block max-w-xl text-sm leading-6 text-black/55">{product.subtitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
