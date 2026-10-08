import type { CSSProperties, ReactNode, SVGProps } from "react";

/** Four-point glowing star used as a decoration. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 0C12.6 6.8 17.2 11.4 24 12 17.2 12.6 12.6 17.2 12 24 11.4 17.2 6.8 12.6 0 12 6.8 11.4 11.4 6.8 12 0Z"
        fill="white"
        style={{ filter: "drop-shadow(0 0 6px rgb(160 200 255 / 0.9))" }}
      />
    </svg>
  );
}

/** Small satellite that drifts across its container (see `.satellite` in globals.css). */
export function Satellite({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 48 20"
      aria-hidden="true"
      className={`satellite absolute left-0 w-10 opacity-80 sm:w-12 ${className}`}
      style={style}
    >
      <rect x="0" y="5" width="16" height="10" rx="1" fill="#24418a" stroke="#8fb3ff" strokeWidth="0.6" />
      <path d="M5.3 5v10M10.6 5v10M0 10h16" stroke="#8fb3ff" strokeWidth="0.4" />
      <rect x="32" y="5" width="16" height="10" rx="1" fill="#24418a" stroke="#8fb3ff" strokeWidth="0.6" />
      <path d="M37.3 5v10M42.6 5v10M32 10h16" stroke="#8fb3ff" strokeWidth="0.4" />
      <path d="M16 10h4M28 10h4" stroke="#c9cede" strokeWidth="0.8" />
      <rect x="20" y="5.5" width="8" height="9" rx="1.5" fill="#d9dce6" />
      <circle cx="24" cy="10" r="1.6" fill="#8a93a8" />
    </svg>
  );
}

/** CSS-drawn planet with an optional ring that passes behind and in front of it. */
export function Planet({
  from,
  to,
  ring,
  className = "",
}: {
  from: string;
  to: string;
  ring?: string;
  className?: string;
}) {
  const style = { "--from": from, "--to": to, "--ring": ring } as CSSProperties;
  return (
    <div aria-hidden="true" className={`planet ${className}`} style={style}>
      {ring && <div className="planet-ring back" />}
      <div className="planet-body" />
      {ring && <div className="planet-ring front" />}
    </div>
  );
}

/** Large serif section heading with a mono index, decoding into view. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  aside,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          <span className="text-faint">{index} /</span> {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.01em] sm:text-7xl">{title}</h2>
        {children}
      </div>
      {aside}
    </header>
  );
}
