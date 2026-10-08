import type { CSSProperties } from "react";
import { statement } from "@/data/profile";
import { ScrollVar } from "../ScrollVar";

/** Large statement whose words light up one by one as it scrolls through the screen. */
export function Statement() {
  const words = statement.split(" ");
  return (
    <ScrollVar kind="read" name="--p" className="py-24 sm:py-40">
      <p className="mx-auto max-w-4xl px-4 text-center font-serif text-[clamp(2rem,4.8vw,4rem)] leading-[1.1] text-balance sm:px-8">
        {words.map((w, i) => (
          <span key={i} className="reveal-word" style={{ "--i": i / words.length } as CSSProperties}>
            {w}{" "}
          </span>
        ))}
      </p>
    </ScrollVar>
  );
}
