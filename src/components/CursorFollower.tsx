"use client";

import { useEffect, useRef, useState } from "react";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf = 0;

    const render = () => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      raf = requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      setHovering(target instanceof Element && Boolean(target.closest("a, button, input, textarea, select")));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={cursorRef} className={`king-cursor ${hovering ? "is-hovering" : ""}`} aria-hidden />;
}
