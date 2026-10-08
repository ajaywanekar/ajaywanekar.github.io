import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Planet } from "@/components/space";
import { projects, site } from "@/data/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return project ? { title: `${project.title} — ${site.name}`, description: project.problem } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index < 0) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Link
          href="/#projects"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition hover:text-fg"
        >
          ← All projects
        </Link>

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Mission {String(index + 1).padStart(2, "0")} <span className="text-faint">· {p.subtitle}</span>
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-7xl">{p.title}</h1>
            {p.context && (
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">{p.context}</p>
            )}
            <div className="mt-10 flex items-end gap-4">
              <span className="font-serif text-7xl leading-none sm:text-8xl">{p.metric.value}</span>
              <span className="pb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{p.metric.label}</span>
            </div>
          </div>
          <Planet {...p.planet} className="mx-auto w-52 sm:w-64" />
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <Panel label="Problem">
            <p>{p.problem}</p>
          </Panel>
          <Panel label="Approach">
            <ul className="space-y-3">
              {p.approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel label="Result">
            <p>{p.result}</p>
          </Panel>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
            >
              {t}
            </span>
          ))}
          {p.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="ml-auto text-sm text-accent hover:underline"
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <Link
          href={`/projects/${next.id}/`}
          className="group mt-24 flex items-center justify-between gap-6 border-t border-line pt-10"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">Next mission</p>
            <p className="mt-3 font-serif text-3xl leading-tight transition group-hover:text-accent sm:text-5xl">
              {next.title}
            </p>
          </div>
          <Planet {...next.planet} className="w-20 shrink-0 transition-transform duration-700 group-hover:-rotate-12 sm:w-28" />
        </Link>
      </div>
    </main>
  );
}

function Panel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-glass p-6 leading-relaxed text-muted backdrop-blur-sm sm:p-7">
      <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{label}</h2>
      {children}
    </section>
  );
}
