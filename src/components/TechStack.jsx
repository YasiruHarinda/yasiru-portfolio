import { TECH_STACK } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const all = TECH_STACK.flatMap((g) => g.items);
const half = Math.ceil(all.length / 2);
const rows = [all.slice(0, half), all.slice(half)];

// The last group stretches over whatever its row has left, so the grid never shows empty cells.
// Class names are spelled out in full so Tailwind can find them.
const SM_SPAN = { 0: "sm:col-span-2", 1: "" };
const LG_SPAN = { 0: "lg:col-span-3", 1: "lg:col-span-2", 2: "" };
const before = TECH_STACK.length - 1;
const lastSpan = `${SM_SPAN[before % 2]} ${LG_SPAN[before % 3]}`;

function MarqueeRow({ items, reverse }) {
  // The list is rendered twice so the -50% translate loops seamlessly.
  return (
    <div className="marquee-mask flex overflow-hidden" aria-hidden="true">
      <div className={`flex shrink-0 animate-marquee gap-4 pr-4 ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-white/[0.12] transition-colors duration-300 hover:text-signal"
          >
            {t} <span className="text-signal/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Tech stack" title="Tools I build with.">
          Most of my recent work is .NET on Kubernetes, with React on the front and plenty of cloud in between.
        </SectionHeading>
      </div>

      <div className="space-y-2 py-6">
        {rows.map((r, i) => (
          <MarqueeRow key={i} items={r} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="container-x mt-16">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((g, i) => (
            <div
              key={g.group}
              data-reveal
              className={`bg-ink-950 p-6 md:p-8 ${i === TECH_STACK.length - 1 ? lastSpan : ""}`}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{g.group}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-signal/50 hover:text-white"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
