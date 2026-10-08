import { site } from "@/data/profile";
import { ScrollVar } from "../ScrollVar";
import { Satellite, Sparkle, Starship, type SatelliteKind } from "../space";

// Craft crossing the hero: height, seconds per crossing, and a negative delay so
// they start mid-flight. `wide` ones only fly on larger screens to keep phones calm.
const fleet: { kind: SatelliteKind; top: string; duration: number; delay: number; reverse?: boolean; wide?: boolean }[] = [
  { kind: "hubble", top: "8%", duration: 95, delay: -30, reverse: true },
  { kind: "comms", top: "12%", duration: 120, delay: -75, wide: true },
  { kind: "station", top: "27%", duration: 140, delay: -95 },
  { kind: "cubesat", top: "35%", duration: 75, delay: -60, reverse: true, wide: true },
  { kind: "comms", top: "61%", duration: 105, delay: -20, reverse: true },
  { kind: "hubble", top: "66%", duration: 125, delay: -10, wide: true },
];

const starships = [
  { top: "70%", duration: 28, delay: -4 },
  { top: "30%", duration: 36, delay: -22, reverse: true },
];

export function Hero() {
  const [first, ...rest] = site.name.split(" ");

  return (
    <ScrollVar kind="hero" name="--hs" id="top" className="relative h-svh min-h-[620px] overflow-hidden">
      <Satellite className="top-[16%] [animation-duration:80s]" />
      <Satellite className="top-[44%] scale-75 [animation-delay:-50s] [animation-duration:110s]" />
      {fleet.map((s, i) => (
        <Satellite
          key={i}
          kind={s.kind}
          reverse={s.reverse}
          className={s.wide ? "hidden sm:block" : ""}
          style={{ top: s.top, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
        />
      ))}
      {starships.map((s, i) => (
        <Starship
          key={i}
          reverse={s.reverse}
          style={{ top: s.top, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
        />
      ))}

      <div className="hero-earth pointer-events-none absolute inset-0">
        <div className="earth-wrap">
          <div className="earth-atmo" />
          <div className="earth">
            <div className="earth-layer earth-land" />
            <div className="earth-layer earth-cloud-shadow" />
            <div className="earth-layer earth-clouds" />
            <div className="earth-shade" />
            <div className="earth-night">
              <div className="earth-layer earth-lights" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content relative z-10 flex h-full flex-col items-center justify-center px-4 pb-[18svh] text-center">
        <p className="rise inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-accent backdrop-blur-sm sm:text-[11px]">
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px] shadow-emerald-400/70" />
          {site.badge}
        </p>

        <h1 className="relative mt-7 font-serif text-[clamp(3.6rem,13.5vw,11.5rem)] leading-[0.92] tracking-[-0.015em]">
          <Sparkle className="sparkle absolute -top-[0.12em] -left-[0.3em] size-[0.32em]" />
          <span className="rise inline-block [animation-delay:120ms]">{first}</span>{" "}
          <span className="rise inline-block [animation-delay:260ms]">{rest.join(" ")}</span>
          <Sparkle className="sparkle absolute -right-[0.22em] bottom-[0.02em] size-[0.18em] [animation-delay:-2s]" />
        </h1>

        <p className="rise mt-6 font-mono text-[10px] uppercase tracking-[0.32em] text-muted [animation-delay:420ms] sm:text-[11px]">
          Perception <span className="text-faint">→</span> Reasoning <span className="text-faint">→</span> Action
        </p>
      </div>

      <div className="hero-content absolute inset-x-0 bottom-5 z-10 mx-auto flex max-w-6xl items-end justify-between px-4 sm:bottom-8 sm:px-8">
        <span className="font-serif text-4xl leading-none sm:text-6xl">©{new Date().getFullYear()}</span>
        <a
          href="#hello"
          className="hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted hover:text-fg sm:flex"
        >
          Scroll
          <span className="block h-10 w-px overflow-hidden bg-white/15">
            <span className="scroll-cue block size-full bg-fg" />
          </span>
        </a>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:text-[11px]">
          {site.since}
        </span>
      </div>
    </ScrollVar>
  );
}
