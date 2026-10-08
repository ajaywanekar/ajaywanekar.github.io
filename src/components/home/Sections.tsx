import Link from "next/link";
import { achievements, experience, now, projects, publications, site, type Project } from "@/data/profile";
import { MailIcon } from "../icons";
import { ScrambleText } from "../ScrambleText";
import { Planet, SectionHeading, Sparkle } from "../space";
import { Areas } from "./Areas";
import { SkillSphere } from "./SkillSphere";

const container = "mx-auto max-w-6xl px-4 sm:px-8";
const section = "scroll-mt-16 py-24 sm:py-32";

// Matches the author-list spelling of the site owner's name so it can be highlighted.
const SELF = "Wanekar A. D.";

export function Work() {
  return (
    <section id="work" className={section}>
      <div className={container}>
        <SectionHeading
          index="02"
          eyebrow="Focus"
          title={<ScrambleText text="What I work on" />}
          aside={
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Open an area to see the projects, roles and papers behind it.
            </p>
          }
        />
        <Areas />
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className={section}>
      <div className={container}>
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title={<ScrambleText text="Featured Projects" />}
          aside={
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
              {String(projects.length).padStart(2, "0")} missions
            </p>
          }
        />
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${p.id}/`} className="group block">
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-line bg-[radial-gradient(120%_90%_at_85%_15%,rgb(255_255_255/0.07),transparent_60%)] transition-colors duration-300 group-hover:border-white/25">
        <Planet
          {...p.planet}
          className="absolute top-1/2 right-[9%] w-[42%] -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-6"
        />
        <span className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-faint sm:left-7">
          Mission {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-line bg-space/50 text-fg opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          ↗
        </span>
        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
          <p className="font-serif text-6xl leading-none sm:text-7xl">{p.metric.value}</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{p.metric.label}</p>
        </div>
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-tight sm:text-3xl">{p.title}</h3>
      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">{p.subtitle}</p>
    </Link>
  );
}

export function Experience() {
  return (
    <section id="experience" className={section}>
      <div className={container}>
        <SectionHeading index="04" eyebrow="Experience" title={<ScrambleText text="Flight log" />} />
        <ol>
          {experience.map((e) => (
            <li
              key={e.id}
              id={e.id}
              className="grid scroll-mt-28 gap-4 border-t border-line py-10 last:border-b md:grid-cols-[190px_1fr_auto] md:gap-10"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint md:pt-3">{e.period}</p>
              <div>
                <h3 className="font-serif text-3xl leading-tight sm:text-4xl">{e.role}</h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{e.org}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{e.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Sparkle className="sparkle hidden size-5 md:mt-3 md:block" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section id="recognition" className={section}>
      <div className={container}>
        <SectionHeading index="05" eyebrow="Recognition" title={<ScrambleText text="Published & awarded" />} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {publications.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="flex scroll-mt-28 flex-col rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{p.venue.split(",")[0]}</p>
              <h3 className="mt-4 leading-snug text-fg/95">{p.title}</h3>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line font-mono text-[10px] text-muted">
                  Paper
                </span>
                <p className="text-xs leading-snug text-muted">
                  {p.authors.map((a, j) => (
                    <span key={a}>
                      {j > 0 && ", "}
                      {a === SELF ? <strong className="font-medium text-fg">{a}</strong> : a}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          ))}
          {achievements.map((a) => (
            <article key={a.event} className="flex flex-col rounded-2xl border border-line bg-glass p-6 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Hackathon</p>
              <h3 className="mt-4 font-serif text-4xl leading-none">{a.title}</h3>
              <p className="mt-3 text-sm text-muted">{a.event}</p>
              <Sparkle className="sparkle mt-auto size-6 self-end pt-8" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Toolkit() {
  return (
    <section id="toolkit" className={section}>
      <div className={container}>
        <SectionHeading index="06" eyebrow="Toolkit" title={<ScrambleText text="Tools of the trade" />} />
        <SkillSphere />
      </div>
    </section>
  );
}

export function Now() {
  return (
    <section id="now" className="py-12 sm:py-16">
      <div className={container}>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-glass p-8 backdrop-blur-sm sm:p-12">
          <Planet from="#9fc2ff" to="#1c2f7a" ring="#7aa7ff" className="absolute -right-16 -bottom-20 w-64 opacity-40 sm:w-80" />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            <span className="text-faint">07 /</span> Now <span className="text-faint">· updated {now.updated}</span>
          </p>
          <p className="relative mt-6 max-w-3xl font-serif text-3xl leading-[1.15] sm:text-5xl">{now.statement}</p>
          <ul className="relative mt-8 space-y-3">
            {now.items.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={section}>
      <div className={`${container} flex flex-col items-center text-center`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          <span className="text-faint">08 /</span> Contact
        </p>
        <h2 className="mt-4 font-serif text-7xl leading-none sm:text-9xl">
          <ScrambleText text="Let's talk." />
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          Interested in my work, a collaboration, or just want to talk about multimodal AI? Email is the best way to
          reach me.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex max-w-full items-center gap-3 rounded-2xl bg-fg py-3.5 pr-5 pl-4 text-space shadow-[0_0_60px_rgb(122_167_255/0.25)] transition hover:bg-white hover:shadow-[0_0_80px_rgb(122_167_255/0.4)] sm:text-lg"
        >
          <MailIcon className="size-5 shrink-0" />
          <span className="truncate font-medium">{site.email}</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    { href: "/#hello", label: "About" },
    { href: "/#work", label: "Work" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-line bg-space/70 backdrop-blur-sm">
      <div className={`${container} grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]`}>
        <p className="font-serif text-4xl leading-[1.05] sm:text-5xl">
          Perception.
          <br />
          Reasoning.
          <br />
          <span className="text-accent italic">Action.</span>
        </p>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">/Quick links</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition hover:border-white/30 hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">/Contact</p>
          <a href={`mailto:${site.email}`} className="mt-4 block break-all text-fg hover:text-accent">
            {site.email}
          </a>
          <p className="mt-2 text-sm text-muted">{site.location}</p>
        </div>
      </div>
      <div className={`${container} flex flex-col gap-2 border-t border-line py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-faint sm:flex-row sm:justify-between`}>
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Built with Next.js · Hosted on GitHub Pages</span>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[4vw] bg-linear-to-b from-white/15 to-transparent bg-clip-text text-center font-serif text-[24vw] leading-[0.8] text-transparent select-none"
      >
        Wanekar
      </p>
    </footer>
  );
}
