"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number; // -1..1 across the field
  y: number; // -1..1 down the field
  z: number; // 0..1 starting depth (wraps as the camera moves)
  size: number;
  alpha: number;
  speed: number;
  phase: number;
  sprite: number;
  // Last projected screen position, used to draw warp streaks.
  px: number;
  py: number;
  pDepth: number;
};

type Meteor = { x: number; y: number; vx: number; vy: number; life: number };

const TINTS = ["255,255,255", "190,215,255", "255,222,196"];
const NEAR = 0.035; // closest depth before a star wraps to the back
const SCROLL_DEPTH = 0.00032; // depth travelled per pixel scrolled
const DRIFT = 0.00018; // idle forward drift per frame

/** Pre-render a soft glowing dot so each star is a cheap drawImage. */
function makeSprite(rgb: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, `rgba(${rgb},1)`);
  grad.addColorStop(0.18, `rgba(${rgb},0.85)`);
  grad.addColorStop(0.4, `rgba(${rgb},0.18)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  return c;
}

/**
 * Full-screen 3D starfield. Scrolling flies the camera forward through the
 * stars (with warp streaks while moving); the pointer adds a little parallax.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const sprites = TINTS.map(makeSprite);

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let nextMeteor = performance.now() + 4000;
    let raf = 0;

    // Camera state: depth eases toward the scroll target; drift keeps it alive at rest.
    let cam = window.scrollY * SCROLL_DEPTH;
    let drift = 0;
    let camX = 0;
    let camY = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Most stars sit off-screen at any moment (the field is deeper than the view).
      const count = Math.min(3200, Math.round((width * height) / 450));
      stars = Array.from({ length: count }, () => {
        const roll = Math.random();
        return {
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
          z: Math.random(),
          size: 0.6 + Math.random() ** 4 * 2.4, // mostly small, a few bright giants
          alpha: 0.45 + Math.random() * 0.55,
          speed: 0.5 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          sprite: roll > 0.85 ? 1 : roll > 0.77 ? 2 : 0,
          px: 0,
          py: 0,
          pDepth: -1,
        };
      });
    };

    const draw = (now: number) => {
      const target = window.scrollY * SCROLL_DEPTH;
      const prevCam = cam + drift;
      if (!still) {
        cam += (target - cam) * 0.075;
        drift += DRIFT;
        camX += (pointerX - camX) * 0.04;
        camY += (pointerY - camY) * 0.04;
      } else {
        cam = target;
      }
      const camZ = cam + drift;
      const speed = Math.abs(camZ - prevCam);
      const warp = Math.min(1, speed / 0.012); // 0 at rest → 1 at fast scroll

      ctx.clearRect(0, 0, width, height);
      const t = now / 1000;
      const cx = width / 2;
      const cy = height / 2;
      const halfW = width * 0.62;
      const halfH = height * 0.62;

      for (const s of stars) {
        // Depth relative to the camera, wrapped so stars recycle to the back.
        const depth = NEAR + (((((s.z - camZ) % 1) + 1) % 1) * (1 - NEAR));
        // Perspective projection: nearer stars spread out and move faster.
        const sx = cx + (s.x * halfW - camX * width * 0.05) / depth;
        const sy = cy + (s.y * halfH - camY * height * 0.05) / depth;
        const wrapped = s.pDepth < 0 || Math.abs(depth - s.pDepth) > 0.5;

        if (sx > -40 && sx < width + 40 && sy > -40 && sy < height + 40) {
          const fadeFar = Math.min(1, (1 - depth) / 0.18);
          const fadeNear = Math.min(1, (depth - NEAR) / 0.05);
          const twinkle = still ? 1 : 0.7 + 0.3 * Math.sin(t * s.speed + s.phase);
          const a = s.alpha * twinkle * fadeFar * fadeNear * Math.min(1, 0.55 + 0.08 / depth);
          const r = Math.min(3.6, s.size * (0.6 + 0.1 / depth));

          if (a > 0.01) {
            if (warp > 0.05 && !wrapped) {
              // Stretch into a streak along the path travelled since the last frame.
              const dx = sx - s.px;
              const dy = sy - s.py;
              const len = Math.hypot(dx, dy);
              const k = len > 140 ? 140 / len : 1;
              ctx.strokeStyle = `rgba(${TINTS[s.sprite]},${a * (0.45 + 0.55 * warp)})`;
              ctx.lineWidth = Math.max(0.6, r * 0.8);
              ctx.lineCap = "round";
              ctx.beginPath();
              ctx.moveTo(sx - dx * k, sy - dy * k);
              ctx.lineTo(sx, sy);
              ctx.stroke();
            }
            const glow = r * 3.2;
            ctx.globalAlpha = a;
            ctx.drawImage(sprites[s.sprite], sx - glow, sy - glow, glow * 2, glow * 2);
            ctx.globalAlpha = 1;
          }
        }
        s.px = sx;
        s.py = sy;
        s.pDepth = depth;
      }

      if (still) return;

      // The occasional shooting star.
      if (!meteor && now > nextMeteor) {
        meteor = {
          x: width * (0.25 + Math.random() * 0.7),
          y: height * Math.random() * 0.4,
          vx: -(7 + Math.random() * 4),
          vy: 2.5 + Math.random() * 2,
          life: 1,
        };
      }
      if (meteor) {
        const m = meteor;
        const tail = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 16, m.y - m.vy * 16);
        tail.addColorStop(0, `rgba(255,255,255,${0.9 * m.life})`);
        tail.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = tail;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 16, m.y - m.vy * 16);
        ctx.stroke();
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.012;
        if (m.life <= 0) {
          meteor = null;
          nextMeteor = now + 6000 + Math.random() * 8000;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      pointerX = e.clientX / width - 0.5;
      pointerY = e.clientY / height - 0.5;
    };
    const onResize = () => {
      resize();
      if (still) draw(performance.now());
    };
    const onScrollStill = () => draw(performance.now());

    resize();
    window.addEventListener("resize", onResize);
    if (still) {
      window.addEventListener("scroll", onScrollStill, { passive: true });
      draw(performance.now());
    } else {
      if (finePointer) window.addEventListener("pointermove", onPointer, { passive: true });
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollStill);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 size-full" />;
}
