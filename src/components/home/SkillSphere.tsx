"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/profile";

const words = skills.flatMap((g) =>
  g.items.map((text, i) => ({ text, group: g.group, color: g.color, featured: i < 2 })),
);

// Evenly spread points on a unit sphere (Fibonacci lattice).
const points = words.map((_, i) => {
  const y = 1 - (i / (words.length - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const theta = Math.PI * (3 - Math.sqrt(5)) * i;
  return [Math.cos(theta) * r, y, Math.sin(theta) * r] as const;
});

/** Draggable 3D globe of skills, filterable by group. */
export function SkillSphere() {
  const [filter, setFilter] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const filterRef = useRef<string | null>(null);

  useEffect(() => {
    filterRef.current = filter;
  }, [filter]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const auto = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.0032;
    let ax = -0.3;
    let ay = 0;
    let vx = 0;
    let vy = auto;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let raf = 0;

    const render = () => {
      // Leave room for the words' own width so they stay inside the stage.
      const radius = Math.min(stage.clientWidth * 0.36, stage.clientHeight * 0.42);
      const [cx, sx, cy, sy] = [Math.cos(ax), Math.sin(ax), Math.cos(ay), Math.sin(ay)];
      points.forEach(([x, y, z], i) => {
        const el = wordRefs.current[i];
        if (!el) return;
        // Rotate around the Y axis, then the X axis.
        const x1 = x * cy + z * sy;
        const z1 = z * cy - x * sy;
        const y2 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const depth = (z2 + 1) / 2; // 0 = back, 1 = front
        const active = !filterRef.current || words[i].group === filterRef.current;
        el.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y2 * radius}px, 0) scale(${0.55 + depth * 0.6})`;
        el.style.opacity = String((0.15 + depth * 0.85) * (active ? 1 : 0.12));
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.filter = depth < 0.35 ? `blur(${((0.35 - depth) * 5).toFixed(1)}px)` : "none";
      });
    };

    const tick = () => {
      if (!dragging) {
        vy += (auto - vy) * 0.02;
        vx *= 0.95;
      }
      ax += vx;
      ay += vy;
      render();
      raf = requestAnimationFrame(tick);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      stage.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      vy = (e.clientX - lastX) * 0.004;
      vx = -(e.clientY - lastY) * 0.004;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => {
      dragging = false;
    };

    // Only animate while the globe is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(tick);
    });

    render();
    observer.observe(stage);
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter skills">
        {[{ group: null, color: "" }, ...skills].map(({ group, color }) => {
          const selected = filter === group;
          return (
            <button
              key={group ?? "all"}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(group)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] transition ${
                selected
                  ? "border-accent bg-accent text-space"
                  : "border-line bg-glass text-muted hover:border-white/25 hover:text-fg"
              }`}
            >
              {color && <span className="size-1.5 rounded-full" style={{ background: color }} />}
              {group ?? "All"}
            </button>
          );
        })}
      </div>

      <div
        ref={stageRef}
        aria-hidden="true"
        className="relative mx-auto mt-4 h-[400px] max-w-3xl cursor-grab overflow-hidden touch-pan-y select-none active:cursor-grabbing sm:h-[520px]"
      >
        {words.map((w, i) => (
          <span
            key={w.text}
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className={`absolute top-1/2 left-1/2 font-medium whitespace-nowrap opacity-0 ${
              w.featured ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
            }`}
            style={{ color: w.color, textShadow: `0 0 18px ${w.color}66` }}
          >
            {w.text}
          </span>
        ))}
      </div>
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.32em] text-faint">Drag to spin</p>

      <ul className="sr-only">
        {skills.map((g) => (
          <li key={g.group}>
            {g.group}: {g.items.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
