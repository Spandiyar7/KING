"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context | null = null;
    const cleanups: Array<() => void> = [];

    const init = () => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-luxury-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 44 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                once: true
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          if (window.innerWidth < 768) {
            return;
          }

          gsap.to(element, {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: element.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8
            }
          });
        });
      });

      document.querySelectorAll<HTMLElement>("[data-horizontal-rail]").forEach((rail) => {
        const onWheel = (event: WheelEvent) => {
          const maxScrollLeft = rail.scrollWidth - rail.clientWidth;

          if (maxScrollLeft <= 0 || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
            return;
          }

          const isAtStart = rail.scrollLeft <= 0;
          const isAtEnd = rail.scrollLeft >= maxScrollLeft - 1;

          if ((event.deltaY < 0 && isAtStart) || (event.deltaY > 0 && isAtEnd)) {
            return;
          }

          event.preventDefault();
          rail.scrollBy({ left: event.deltaY * 1.05, behavior: "smooth" });
        };

        rail.addEventListener("wheel", onWheel, { passive: false });
        cleanups.push(() => rail.removeEventListener("wheel", onWheel));
      });

      ScrollTrigger.refresh();
    };

    const timeout = window.setTimeout(init, 700);
    const refreshTimeout = window.setTimeout(() => ScrollTrigger.refresh(), 1600);

    return () => {
      window.clearTimeout(timeout);
      window.clearTimeout(refreshTimeout);
      cleanups.forEach((cleanup) => cleanup());
      ctx?.revert();
    };
  }, []);

  return null;
}
