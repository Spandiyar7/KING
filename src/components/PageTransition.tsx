"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageTransition() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const intro = window.setTimeout(() => setActive(false), 520);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      const anchor = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || anchor.target || anchor.hasAttribute("download")) {
        return;
      }

      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("transitioning");
      setActive(true);
      window.setTimeout(() => {
        window.location.href = anchor.href;
      }, 520);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      window.clearTimeout(intro);
      document.removeEventListener("click", onClick, true);
      document.body.classList.remove("transitioning");
    };
  }, []);

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] bg-[#f8f8f7]/94"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#bbb398]"
            animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
