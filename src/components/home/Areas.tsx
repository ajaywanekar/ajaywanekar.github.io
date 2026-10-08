"use client";

import { useState } from "react";
import { areas, experience, projects, publications, type AreaId } from "@/data/profile";

type Related = { key: string; kind: string; title: string; href: string };

function relatedTo(area: AreaId): Related[] {
  return [
    ...projects
      .filter((p) => p.areas.includes(area))
      .map((p) => ({ key: p.id, kind: "Project", title: p.title, href: `/projects/${p.id}/` })),
    ...experience
      .filter((e) => e.areas.includes(area))
      .map((e) => ({ key: e.id, kind: "Experience", title: `${e.role} — ${e.org}`, href: `#${e.id}` })),
    ...publications
      .filter((p) => p.areas.includes(area))
      .map((p) => ({ key: p.id, kind: "Paper", title: p.title, href: `#${p.id}` })),
  ];
}

/** "What I work on" rows that expand to show the projects, roles and papers behind each area. */
export function Areas() {
  const [open, setOpen] = useState<AreaId | null>(null);

  return (
    <div className="border-t border-line">
      {areas.map((a) => {
        const isOpen = open === a.id;
        const related = relatedTo(a.id);
        return (
          <div key={a.id} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : a.id)}
              className="group flex w-full items-center gap-4 py-6 text-left sm:gap-5 sm:py-7"
            >
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ background: a.color, boxShadow: `0 0 12px 2px ${a.color}` }}
              />
              <span className="font-serif text-3xl leading-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                {a.label}
              </span>
              <span className="ml-auto hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:block">
                {a.tags.join("  •  ")}
              </span>
              <span className="ml-auto grid size-9 shrink-0 place-items-center rounded-full border border-line text-faint transition group-hover:border-white/25 group-hover:text-fg md:ml-6">
                <span className={`text-lg leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:hidden">
                  {a.tags.join("  •  ")}
                </p>
                <ul className="grid gap-2 pb-7 sm:grid-cols-2">
                  {related.map((r) => (
                    <li key={r.key}>
                      <a
                        href={r.href}
                        tabIndex={isOpen ? 0 : -1}
                        className="flex h-full items-start gap-3 rounded-xl border border-line bg-glass p-4 transition hover:border-white/25"
                      >
                        <span className="mt-0.5 w-20 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                          {r.kind}
                        </span>
                        <span className="text-sm leading-snug text-fg/90">{r.title}</span>
                        <span aria-hidden="true" className="ml-auto text-faint">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
