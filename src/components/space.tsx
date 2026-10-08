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

export type SatelliteKind = "classic" | "hubble" | "station" | "comms" | "cubesat";

const panel = { fill: "#24418a", stroke: "#8fb3ff", strokeWidth: 0.5 };

// Every craft is drawn in the same 48×20 box so they all render at the same size.
const satellites: Record<SatelliteKind, ReactNode> = {
  // The original two-panel satellite.
  classic: (
    <>
      <rect x="0" y="5" width="16" height="10" rx="1" fill="#24418a" stroke="#8fb3ff" strokeWidth="0.6" />
      <path d="M5.3 5v10M10.6 5v10M0 10h16" stroke="#8fb3ff" strokeWidth="0.4" />
      <rect x="32" y="5" width="16" height="10" rx="1" fill="#24418a" stroke="#8fb3ff" strokeWidth="0.6" />
      <path d="M37.3 5v10M42.6 5v10M32 10h16" stroke="#8fb3ff" strokeWidth="0.4" />
      <path d="M16 10h4M28 10h4" stroke="#c9cede" strokeWidth="0.8" />
      <rect x="20" y="5.5" width="8" height="9" rx="1.5" fill="#d9dce6" />
      <circle cx="24" cy="10" r="1.6" fill="#8a93a8" />
    </>
  ),
  // Space telescope: silver tube, gold foil band, open aperture door, two wings.
  hubble: (
    <>
      <rect x="15" y="0.5" width="9" height="4.5" {...panel} />
      <rect x="15" y="15" width="9" height="4.5" {...panel} />
      <path d="M19.5 5v1M19.5 14v1M15 2.7h9M15 17.2h9" stroke="#8fb3ff" strokeWidth="0.4" />
      <rect x="7" y="6" width="31" height="8" rx="2" fill="#cfd4e0" />
      <rect x="7" y="6" width="7" height="8" rx="2" fill="#8a93a8" />
      <rect x="14" y="6" width="2.2" height="8" fill="#d8b45a" />
      <rect x="9" y="6.6" width="28" height="1.6" rx="0.8" fill="#fff" opacity="0.55" />
      <ellipse cx="38" cy="10" rx="1.3" ry="3.7" fill="#1b2235" />
      <path d="M38 6.2 42.5 3.6 43 4.6 38.8 7.2Z" fill="#e3e6ee" />
      <circle className="beacon" cx="9" cy="10" r="0.9" fill="#ff5d5d" />
    </>
  ),
  // Space station: long truss with four golden solar arrays and central modules.
  station: (
    <>
      <rect x="1" y="9.4" width="46" height="1.2" fill="#c9cede" />
      {[2.5, 8.5, 33.5, 39.5].map((x) => (
        <g key={x}>
          <rect x={x} y="0.8" width="5" height="8" fill="#a8792a" stroke="#e7c178" strokeWidth="0.4" />
          <rect x={x} y="11.2" width="5" height="8" fill="#a8792a" stroke="#e7c178" strokeWidth="0.4" />
          <path d={`M${x + 2.5} 0.8v8M${x + 2.5} 11.2v8`} stroke="#e7c178" strokeWidth="0.3" />
        </g>
      ))}
      <rect x="21.5" y="4" width="5" height="12" rx="1.2" fill="#d0d5e0" />
      <rect x="17" y="7.5" width="14" height="5" rx="1.6" fill="#e9ecf2" />
      <rect x="15" y="12.6" width="3" height="5" fill="#f2f4f8" opacity="0.75" />
      <rect x="30" y="2.4" width="3" height="5" fill="#f2f4f8" opacity="0.75" />
      <circle className="beacon" cx="24" cy="10" r="0.9" fill="#ff5d5d" />
    </>
  ),
  // Communications satellite: one long wing, gold-foil bus and a big dish.
  comms: (
    <>
      <rect x="0.5" y="6" width="17" height="8" rx="0.8" {...panel} />
      <path d="M6.2 6v8M11.8 6v8M0.5 10h17" stroke="#8fb3ff" strokeWidth="0.4" />
      <path d="M17.5 10h3.5" stroke="#c9cede" strokeWidth="0.8" />
      <rect x="21" y="5" width="10" height="10" rx="1" fill="#d8b45a" />
      <path d="M21 8.3h10M21 11.7h10M24.3 5v10M27.7 5v10" stroke="#a8862f" strokeWidth="0.35" />
      <path d="M31 10h3" stroke="#c9cede" strokeWidth="0.7" />
      <ellipse cx="37" cy="10" rx="3.6" ry="7.2" fill="#e8ebf2" />
      <ellipse cx="37.6" cy="10" rx="2.4" ry="5.6" fill="#b4bccb" />
      <path d="M37.6 10h4.2" stroke="#e8ebf2" strokeWidth="0.5" />
      <circle cx="42" cy="10" r="0.8" fill="#e8ebf2" />
      <circle className="beacon [animation-delay:-0.9s]" cx="26" cy="4.2" r="0.8" fill="#5dff9a" />
    </>
  ),
  // Cubesat: small boxy body with four deployed panels, slowly tumbling.
  cubesat: (
    <g className="tumble">
      <rect x="6" y="7" width="11" height="6" {...panel} />
      <rect x="31" y="7" width="11" height="6" {...panel} />
      <rect x="20.5" y="0.5" width="7" height="3.5" {...panel} />
      <rect x="20.5" y="16" width="7" height="3.5" {...panel} />
      <path d="M11.5 7v6M36.5 7v6" stroke="#8fb3ff" strokeWidth="0.35" />
      <rect x="18" y="4" width="12" height="12" rx="1" fill="#9aa3b8" />
      <rect x="19.5" y="5.5" width="9" height="9" rx="0.6" fill="none" stroke="#6b7488" strokeWidth="0.5" />
      <path d="M24 5.5v9M19.5 10h9" stroke="#6b7488" strokeWidth="0.4" />
    </g>
  ),
};

/**
 * Small satellite that drifts across its container (see `.satellite` in
 * globals.css). `reverse` flies it right-to-left.
 */
export function Satellite({
  kind = "classic",
  reverse = false,
  className = "",
  style,
}: {
  kind?: SatelliteKind;
  reverse?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 20"
      aria-hidden="true"
      className={`${reverse ? "satellite-rev" : "satellite"} absolute left-0 w-10 opacity-80 sm:w-12 ${className}`}
      style={style}
    >
      {satellites[kind]}
    </svg>
  );
}

/**
 * SpaceX-style Starship (stainless body, black heat-shield belly, flaps and a
 * flickering engine plume), the same size as the satellites. It climbs across
 * its container; `reverse` flies it right-to-left.
 */
export function Starship({
  reverse = false,
  className = "",
  style,
}: {
  reverse?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 20"
      aria-hidden="true"
      className={`${reverse ? "starship-rev" : "starship"} absolute left-0 w-10 sm:w-12 ${className}`}
      style={style}
    >
      <g className="flame">
        <ellipse cx="4.5" cy="10" rx="5" ry="2.6" fill="#ff9a3c" opacity="0.35" />
        <path d="M9 8.2 0.3 10 9 11.8Z" fill="#ffb347" />
        <path d="M9 9 3.6 10 9 11Z" fill="#fff4d6" />
      </g>
      <rect x="8.4" y="7.8" width="1.4" height="4.4" rx="0.3" fill="#4b5262" />
      {/* Stainless top half, black tiled belly */}
      <path d="M9.6 6.6H38.5C42.6 6.6 45.8 8.2 47.6 10H9.6Z" fill="#d3d9e3" />
      <path d="M9.6 10H47.6C45.8 11.8 42.6 13.4 38.5 13.4H9.6Z" fill="#1d2230" />
      <path d="M9.6 7.4H40" stroke="#fff" strokeWidth="0.6" opacity="0.6" />
      {/* Forward and aft flaps */}
      <path d="M37.5 6.6 40.8 4.4 42.4 7Z" fill="#aab2c1" />
      <path d="M37.5 13.4 40.8 15.6 42.4 13Z" fill="#1d2230" />
      <path d="M10.6 6.6 13.6 3.4H17.8L16.8 6.6Z" fill="#aab2c1" />
      <path d="M10.6 13.4 13.6 16.6H17.8L16.8 13.4Z" fill="#1d2230" />
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
