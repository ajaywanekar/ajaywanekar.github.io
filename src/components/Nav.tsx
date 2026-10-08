"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/profile";

const links = [
  { href: "/#hello", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#toolkit", label: "Toolkit" },
  { href: "/#contact", label: "Contact" },
];

/** Floating pill navigation with a pop-down menu and a scroll-progress line. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <div
        ref={progressRef}
        className="fixed inset-x-0 top-0 z-50 h-px origin-left scale-x-0 bg-accent shadow-[0_0_8px_var(--color-accent)]"
      />
      <div ref={menuRef} className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(340px,calc(100%-2rem))]">
        <nav className="flex items-center justify-between rounded-2xl border border-line bg-space/60 py-2 pr-2 pl-4 backdrop-blur-xl">
          <Link href="/" className="font-serif text-xl leading-none" onClick={() => setOpen(false)}>
            {site.name}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-11 place-items-center rounded-xl bg-fg text-space transition hover:bg-white"
          >
            <span className={`flex gap-[3px] transition-transform ${open ? "rotate-90" : ""}`}>
              <span className="size-1 rounded-full bg-current" />
              <span className="size-1 rounded-full bg-current" />
              <span className="size-1 rounded-full bg-current" />
            </span>
          </button>
        </nav>

        <div
          className={`mt-2 origin-top rounded-2xl border border-line bg-space/80 p-2 backdrop-blur-xl transition duration-200 ${
            open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted transition hover:bg-white/5 hover:text-fg"
            >
              {label}
              <span className="text-faint">0{i + 1}</span>
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener"
            tabIndex={open ? 0 : -1}
            className="mt-1 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-fg transition hover:bg-white/10"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}
