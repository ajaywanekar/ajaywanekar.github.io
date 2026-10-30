import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Planet } from "@/components/space";
import { alfred } from "@/data/alfred";
import { site } from "@/data/profile";

// Unlisted page shared directly with Alfred: kept out of search results and the nav.
export const metadata: Metadata = {
  title: `${site.name} × Alfred | AI Engineer, Drawing OCR`,
  description: `How ${site.name}'s experience in computer vision, vision-language models and text matching fits ${alfred.company}'s asbestos identification role.`,
  robots: { index: false, follow: false },
};

const levelStyle: Record<string, { label: string; className: string }> = {
  strong: { label: "Strong", className: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300" },
  solid: { label: "Solid", className: "border-accent/40 bg-accent/10 text-accent" },
  growing: { label: "Growing", className: "border-amber-400/40 bg-amber-400/10 text-amber-300" },
};

const label = "font-mono text-[11px] uppercase tracking-[0.25em]";

export default function AlfredPage() {
  return (
    <main className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Link href="/" className={`${label} text-muted transition hover:text-fg`}>
          ← ajaywanekar.github.io
        </Link>

        {/* Hero */}
        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className={`${label} text-accent`}>
              For {alfred.company} <span className="text-faint">· {alfred.location}</span>
            </p>
            <p className="mt-5 text-sm text-muted">{alfred.eyebrow}</p>
            <h1 className="mt-2 font-serif text-5xl leading-[0.95] sm:text-7xl">{alfred.headline}</h1>
            <p className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-fg/90 sm:text-3xl">{alfred.subtitle}</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">{alfred.role}</p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{alfred.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("AI Engineer (OCR) role at Alfred")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm text-fg transition hover:border-accent hover:bg-accent/20"
              >
                Email me <span aria-hidden="true" className="text-accent">↗</span>
              </a>
              <a
                href={alfred.resume}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-muted transition hover:border-white/30 hover:text-fg"
              >
                Resume for this role <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-faint">
              {alfred.resumeNote}{" "}
              <Link href="/" className="text-muted underline decoration-line underline-offset-4 hover:text-fg">
                Go to the main page
              </Link>
            </p>
          </div>
          <Planet from="#7aa7ff" to="#1b2a55" ring="#ffb547" className="mx-auto w-52 sm:w-64" />
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {alfred.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm">
              <p className="font-serif text-5xl leading-none">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <Section index="01" title={alfred.sections.experience}>
          <div className="grid gap-4 md:grid-cols-2">
            {alfred.pipeline.map((p) => (
              <article key={p.step} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm sm:p-7">
                <p className={`${label} text-accent`}>Stage {p.step}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-sm text-faint">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">You need · </span>
                  {p.ask}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{p.evidence}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Requirements */}
        <Section index="02" title={alfred.sections.skills}>
          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-glass backdrop-blur-sm">
            {alfred.requirements.map((r) => {
              const lvl = levelStyle[r.level];
              return (
                <li key={r.need} className="grid gap-2 p-5 sm:grid-cols-[1.3fr_auto_1.2fr] sm:items-center sm:gap-6">
                  <p className="text-fg">{r.need}</p>
                  <span
                    className={`w-fit rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${lvl.className}`}
                  >
                    {lvl.label}
                  </span>
                  <p className="text-sm text-muted">{r.proof}</p>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Plan */}
        <Section index="03" title={alfred.sections.approach}>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {alfred.plan.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm">
                <p className={`${label} text-faint`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg text-fg">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Where I fit */}
        <Section index="04" title={alfred.sections.fit}>
          <div className="grid gap-4 md:grid-cols-3">
            {alfred.fit.map((f) => (
              <article key={f.title} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm sm:p-7">
                <h3 className="font-serif text-3xl leading-tight">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{f.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Why */}
        <Section index="05" title={alfred.sections.why}>
          <ul className="space-y-4 text-lg leading-relaxed text-muted">
            {alfred.why.map((w) => (
              <li key={w} className="flex gap-4">
                <span className="mt-3.5 h-px w-4 shrink-0 bg-accent" />
                {w}
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <div className="mt-24 border-t border-line pt-10">
          <p className={`${label} text-faint`}>Let&apos;s talk</p>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("AI Engineer (OCR) role at Alfred")}`}
            className="mt-3 block break-all font-serif text-3xl leading-tight transition hover:text-accent sm:text-5xl"
          >
            {site.email} <span className="text-accent">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-24">
      <p className={`${label} text-accent`}>{index}</p>
      <h2 className="mt-3 mb-10 font-serif text-4xl leading-tight sm:text-6xl">{title}</h2>
      {children}
    </section>
  );
}
