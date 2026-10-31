import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Planet } from "@/components/space";
import type { Company, Level } from "@/data/companies";
import { site } from "@/data/profile";

/** Metadata for an unlisted company page: kept out of search results and the nav. */
export function companyMetadata(c: Company): Metadata {
  return {
    title: `${site.name} × ${c.short} | AI / ML Engineer`,
    description: `How ${site.name}'s AI/ML research experience could support ${c.company}.`,
    robots: { index: false, follow: false },
  };
}

const levelStyle: Record<Level, { label: string; className: string }> = {
  strong: { label: "Strong", className: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300" },
  solid: { label: "Solid", className: "border-accent/40 bg-accent/10 text-accent" },
  growing: { label: "Growing", className: "border-amber-400/40 bg-amber-400/10 text-amber-300" },
};

const label = "font-mono text-[11px] uppercase tracking-[0.25em]";

export function CompanyPage({ company: c }: { company: Company }) {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(c.mailSubject)}`;
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
              For {c.company} <span className="text-faint">· {c.location}</span>
            </p>
            <p className="mt-5 text-sm text-muted">Why Ajay Wanekar could help your team</p>
            <h1 className="mt-2 font-serif text-5xl leading-[0.95] sm:text-7xl">Why Ajay for {c.short}?</h1>
            <p className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-fg/90 sm:text-3xl">{c.subtitle}</p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm text-fg transition hover:border-accent hover:bg-accent/20"
              >
                Email me <span aria-hidden="true" className="text-accent">↗</span>
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-muted transition hover:border-white/30 hover:text-fg"
              >
                Resume <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-faint">
              This page is based on public information about {c.short}. I would refine these ideas with your team.
            </p>
          </div>
          <Planet {...c.planet} className="mx-auto w-52 sm:w-64" />
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm">
              <p className="font-serif text-5xl leading-none">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <Section index="01" title="Why My Skills Match Your Work">
          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-glass backdrop-blur-sm">
            {c.requirements.map((r) => {
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

        {/* Experience */}
        <Section index="02" title="The Experience I Bring">
          <div className="grid gap-4 md:grid-cols-2">
            {c.pipeline.map((p) => (
              <article key={p.step} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm sm:p-7">
                <p className={`${label} text-accent`}>Stage {p.step}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-sm text-faint">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Where it could help · </span>
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

        {/* Plan */}
        <Section index="03" title={`How I Would Approach ${c.short}'s Challenges`}>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.plan.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm">
                <p className={`${label} text-faint`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg text-fg">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Where I fit */}
        <Section index="04" title={`Where I fit at ${c.short}`}>
          <div className="grid gap-4 md:grid-cols-3">
            {c.fit.map((f) => (
              <article key={f.title} className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm sm:p-7">
                <h3 className="font-serif text-3xl leading-tight">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{f.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Why */}
        <Section index="05" title={`Why ${c.short}`}>
          <ul className="space-y-4 text-lg leading-relaxed text-muted">
            {c.why.map((w) => (
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
            href={mailto}
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
