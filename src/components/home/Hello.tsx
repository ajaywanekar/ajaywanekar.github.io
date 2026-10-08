import Image from "next/image";
import { hello, site } from "@/data/profile";
import { ScrambleText } from "../ScrambleText";
import { ScrollVar } from "../ScrollVar";
import { Socials } from "./Socials";

export function Hello() {
  return (
    <ScrollVar kind="enter" name="--hp" id="hello" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:self-stretch lg:justify-between lg:py-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              <span className="text-faint">01 /</span> About
            </p>
            <h2 className="mt-4 font-serif text-8xl leading-none lg:text-9xl">
              <ScrambleText text="Hey!" />
            </h2>
          </div>
          <p className="max-w-xs text-xl leading-snug text-fg/90">{hello.short}</p>
        </div>

        <Porthole />

        <div className="space-y-5 leading-relaxed text-muted">
          {hello.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <dl className="divide-y divide-line border-y border-line">
            {hello.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[88px_1fr] gap-3 py-2.5">
                <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{f.label}</dt>
                <dd className="text-sm text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-medium text-space transition hover:bg-white"
            >
              View resume <span aria-hidden="true">↗</span>
            </a>
            <Socials />
          </div>
        </div>
      </div>
    </ScrollVar>
  );
}

/** Round "porthole" photo with an orbiting light; tilts straight as the section scrolls in. */
function Porthole() {
  return (
    <div className="porthole-tilt relative mx-auto w-60 sm:w-72 lg:w-80">
      <div className="absolute -inset-10 rounded-full border border-dashed border-white/[0.07]" />
      <div className="absolute -inset-5 rounded-full border border-white/10" />
      <div className="absolute -inset-5 animate-spin [animation-duration:24s]">
        <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_4px_rgb(122_167_255/0.7)]" />
      </div>
      <div className="relative rounded-full bg-linear-to-b from-white/30 to-white/5 p-1.5 shadow-[0_0_90px_rgb(90_150_255/0.35)]">
        <Image
          src={site.photo}
          alt={`Portrait of ${site.name}`}
          width={512}
          height={640}
          className="aspect-square w-full rounded-full object-cover object-[50%_22%]"
        />
      </div>
    </div>
  );
}
