"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";
const FRAMES = 40;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

/**
 * Text that fades up and "decodes" from random glyphs into the real text the
 * first time it scrolls into view. Renders plain text without JS or when the
 * visitor prefers reduced motion.
 */
export function ScrambleText({ text, delay = 300 }: { text: string; delay?: number }) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const outRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const out = outRef.current;
    if (!root || !out || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Every character starts flickering and settles on its own random frame.
    const queue = Array.from(text, (to) => {
      const start = Math.floor(Math.random() * FRAMES);
      return { to, start, end: start + Math.floor(Math.random() * FRAMES), glyph: "" };
    });
    let frame = 0;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const render = () => {
      let settled = 0;
      const nodes: (string | Node)[] = [];
      for (const q of queue) {
        if (frame >= q.end) {
          settled++;
          nodes.push(q.to);
        } else if (frame >= q.start) {
          if (!q.glyph || Math.random() < 0.28) q.glyph = randomGlyph();
          const dud = document.createElement("span");
          dud.className = "text-faint";
          dud.textContent = q.glyph;
          nodes.push(dud);
        }
      }
      out.replaceChildren(...nodes);
      if (settled < queue.length) {
        frame++;
        raf = requestAnimationFrame(render);
      }
    };

    out.textContent = "";
    root.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        root.dataset.reveal = "shown";
        timer = setTimeout(render, delay);
      },
      { threshold: 0.6 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      out.textContent = text;
      delete root.dataset.reveal;
    };
  }, [text, delay]);

  return (
    <span ref={rootRef} className="scramble relative inline-grid">
      <span className="sr-only">{text}</span>
      {/* Invisible copy stacked in the same grid cell reserves the final size,
          so the page doesn't jump and both layers wrap identically. */}
      <span aria-hidden="true" className="invisible [grid-area:1/1]">
        {text}
      </span>
      <span ref={outRef} aria-hidden="true" className="[grid-area:1/1]">
        {text}
      </span>
    </span>
  );
}
