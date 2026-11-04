import { beyond } from "@/data/profile";

const label = "font-mono text-[11px] uppercase tracking-[0.25em]";

/** "Learning Japan" photos for the company pages, shared with the home page's Beyond the lab section. */
export function JapanPhotos({ index }: { index: string }) {
  const photos = beyond.groups.find((g) => g.title === "Learning Japan")?.photos ?? [];
  return (
    <section className="mt-24">
      <p className={`${label} text-accent`}>{index}</p>
      <h2 className="mt-3 mb-4 font-serif text-4xl leading-tight sm:text-6xl">Learning Japan</h2>
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
        Japan is not only where I want to work. I am learning the language step by step, and I enjoy its culture and
        design.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {photos.map((ph, i) => (
          <figure
            key={ph.src}
            className={`overflow-hidden rounded-2xl border border-line bg-glass backdrop-blur-sm ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph.src} alt={ph.alt} loading="lazy" className="aspect-square w-full object-cover" />
            <figcaption className="p-4 text-sm leading-relaxed text-muted">{ph.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
