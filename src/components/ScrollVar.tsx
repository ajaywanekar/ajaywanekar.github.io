"use client";

import { useEffect, useRef, type ReactNode } from "react";

// How far through its scroll range an element is, from 0 to 1.
const progress = {
  // 0 at the top of the page → 1 after scrolling one full screen.
  hero: (r: DOMRect, vh: number) => -r.top / vh,
  // 0 when the element's top reaches the bottom of the screen → 1 when it is 30% from the top.
  enter: (r: DOMRect, vh: number) => (vh - r.top) / (vh * 0.7),
  // Spread over the element moving from 90% to 30% of the screen height.
  read: (r: DOMRect, vh: number) => (vh * 0.9 - r.top) / (vh * 0.6),
};

/**
 * A <section> that exposes its scroll progress to CSS as a custom property
 * (e.g. `--hs`). Styles fall back to their finished state without JS or when
 * the visitor prefers reduced motion.
 */
export function ScrollVar({
  kind,
  name,
  id,
  className,
  children,
}: {
  kind: keyof typeof progress;
  name: `--${string}`;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const p = progress[kind](el.getBoundingClientRect(), window.innerHeight);
      el.style.setProperty(name, Math.min(1, Math.max(0, p)).toFixed(3));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      el.style.removeProperty(name);
    };
  }, [kind, name]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
