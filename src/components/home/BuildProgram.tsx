import { ScrambleText } from "../ScrambleText";
import { SectionHeading } from "../space";

const container = "mx-auto max-w-6xl px-4 sm:px-8";

const channels = [
  { label: "Phone calls", note: "Voice, in real time" },
  { label: "Email", note: "Threads and attachments" },
  { label: "Social media", note: "WhatsApp and messaging" },
  { label: "Website chatbot", note: "Instant chat" },
];

const flow = ["Understands the query", "Finds the answer in context", "Replies on the same channel"];

const stats = [
  { value: "4", label: "channels synced on one platform" },
  { value: "5", label: "people in the team I led" },
  { value: "+18%", label: "answer relevance from hybrid retrieval" },
];

const leadership = [
  {
    trait: "Initiative",
    claim: "I take the first step.",
    proof: "Nobody handed me this problem. I spotted it, proposed the idea, and started building before anyone asked.",
  },
  {
    trait: "Leadership",
    claim: "I lead people, not just tasks.",
    proof: "Brought together a team of five, gave each person a clear workstream they owned, and kept everyone moving toward one prototype.",
  },
  {
    trait: "Teamwork",
    claim: "I make the team stronger than its parts.",
    proof: "Voice, email, chat and knowledge were built in parallel, with regular check-ins so every piece fit together.",
  },
  {
    trait: "Ownership",
    claim: "I make the call, and I own it.",
    proof: "Decided the architecture and which models to use, backed by side-by-side comparisons, and stood by the results.",
  },
  {
    trait: "Courage",
    claim: "I am not afraid to start something hard.",
    proof: "Took on an unproven idea as a student, in a field with large established players, and carried it to a working prototype.",
  },
  {
    trait: "Confidence",
    claim: "I speak up and carry the room.",
    proof: "Explained the idea to users and mentors, presented progress to the program, and demoed the prototype live.",
  },
];

const capabilities = [
  {
    title: "Every channel, one conversation",
    body: "Calls, emails, social messages and chat land on one platform and stay in sync, so a customer never has to repeat themselves when they switch channel.",
  },
  {
    title: "Understands like a human representative",
    body: "LLM-based intent classification reads what the customer actually wants, keeps the history of the conversation, and resolves the query in context instead of matching keywords.",
  },
  {
    title: "Hears clearly on a real phone line",
    body: "Compared various speech-to-text and text-to-speech models, with noise filtering so callers are understood on busy streets and weak lines, and replies sound natural.",
  },
  {
    title: "Answers grounded in the business",
    body: "A hybrid retrieval pipeline (semantic + keyword) answers from each business's own knowledge, improving answer relevance by 18%. Built multi-tenant, so each business's data stays separate.",
  },
];

const journey = [
  {
    step: "01",
    title: "Idea",
    body: "Saw businesses losing customers because questions on calls, emails and messages went unanswered or got answered differently on each channel.",
  },
  {
    step: "02",
    title: "Design",
    body: "Framed one platform for every channel, chose the architecture, and planned the work into voice, email, chat and knowledge streams.",
  },
  {
    step: "03",
    title: "Build",
    body: "Led a team of 5 through the streams in parallel, comparing language and speech models on quality, speed and cost before choosing.",
  },
  {
    step: "04",
    title: "Prototype",
    body: "Delivered a working prototype that talks with customers across all four channels and resolves their queries end to end.",
  },
];

/** The IIT Hyderabad Build Program: the multi-channel conversational AI platform, idea to prototype. */
export function BuildProgram() {
  return (
    <section id="build-program" className="scroll-mt-16 py-24 sm:py-32">
      <div className={container}>
        <SectionHeading
          index="05"
          eyebrow="IIT Hyderabad Build Program"
          title={<ScrambleText text="Idea to prototype" />}
          aside={
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">Team lead · team of 5</p>
          }
        />

        <p className="max-w-4xl font-serif text-3xl leading-[1.15] sm:text-5xl">
          I led a team of five to build a <span className="text-accent">multi-channel conversational AI platform</span>{" "}
          that talks with customers like a human representative, on whatever channel they choose.
        </p>

        {/* Channels flow into one platform, then into a resolved answer. */}
        <div className="mt-16 grid items-center gap-6 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map((c) => (
              <li key={c.label} className="rounded-2xl border border-line bg-glass px-5 py-4 backdrop-blur-sm">
                <p className="text-fg">{c.label}</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{c.note}</p>
              </li>
            ))}
          </ul>

          <Arrow />

          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-glass p-8 text-center backdrop-blur-sm">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{ background: "radial-gradient(circle at 50% 0%, rgb(122 167 255 / 0.22), transparent 70%)" }}
            />
            <p className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-accent">One platform</p>
            <p className="relative mt-3 font-serif text-3xl leading-tight sm:text-4xl">Every conversation, in sync</p>
            <p className="relative mt-3 text-sm leading-relaxed text-muted">
              Speech models, language models and the business&apos;s own knowledge, working together on every message.
            </p>
          </div>

          <Arrow />

          <ol className="grid gap-3">
            {flow.map((f, i) => (
              <li key={f} className="flex items-center gap-4 rounded-2xl border border-line px-5 py-4">
                <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-fg">{f}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Headline numbers */}
        <dl className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-space p-6 sm:p-8">
              <dt className="font-serif text-5xl leading-none sm:text-6xl">{s.value}</dt>
              <dd className="mt-3 text-sm leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* What the platform does */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <article key={c.title} className="rounded-3xl border border-line bg-glass p-7 backdrop-blur-sm sm:p-8">
              <h3 className="font-serif text-3xl leading-tight">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </article>
          ))}
        </div>

        {/* How it was built */}
        <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">How I led it</p>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {journey.map((j) => (
            <li key={j.step} className="bg-space p-6 sm:p-7">
              <p className="font-mono text-[11px] text-faint">{j.step}</p>
              <h4 className="mt-2 font-serif text-3xl">{j.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">{j.body}</p>
            </li>
          ))}
        </ol>

        {/* The kind of person who leads this: short claims, each backed by what happened. */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-line bg-glass p-6 backdrop-blur-sm sm:p-8">
          <div
            className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, rgb(122 167 255 / 0.25), transparent 65%)" }}
          />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
              Give me a problem. <span className="text-accent">I&apos;ll bring the team</span> and the plan.
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent sm:pb-1.5">What leading it proved</p>
          </div>

          <ol className="relative mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l, i) => (
              <li key={l.trait} className="group bg-space/90 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> · {l.trait}
                </p>
                <h4 className="mt-2 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-accent">
                  {l.claim}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.proof}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <div aria-hidden className="flex justify-center text-faint">
      <span className="text-2xl lg:hidden">↓</span>
      <span className="hidden text-2xl lg:inline">→</span>
    </div>
  );
}
