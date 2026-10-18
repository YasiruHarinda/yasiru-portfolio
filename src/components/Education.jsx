import { asset } from "../lib/asset";
import { FiArrowUpRight } from "react-icons/fi";
import { ACTIVITIES, CERTIFICATIONS, EDUCATION } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="06" eyebrow="Background" title="Education, certifications & achievements." />

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <div key={e.school} data-reveal className={`card p-8 ${i === 0 ? "border-signal/30" : ""}`}>
              <div className="flex items-center justify-between gap-4 font-mono text-xs text-zinc-500">
                <span>{e.period}</span>
                <span className={i === 0 ? "rounded-full bg-signal/10 px-2.5 py-1 text-signal" : ""}>{e.extra}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white md:text-3xl">{e.school}</h3>
              <p className="mt-2 text-zinc-400">{e.program}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div data-reveal>
            <h3 className="font-display text-2xl font-semibold text-white">Certifications</h3>
            <ul className="mt-6 border-t border-white/10">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title} className="border-b border-white/10">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 transition-colors"
                  >
                    <span>
                      <span className="block text-zinc-200 transition-colors group-hover:text-signal">{c.title}</span>
                      <span className="font-mono text-xs text-zinc-500">
                        {c.issuer} · {c.year}
                      </span>
                    </span>
                    <FiArrowUpRight className="shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <h3 className="font-display text-2xl font-semibold text-white">Achievements & activities</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {ACTIVITIES.map((a) => (
                <div key={a.title} className="card group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={asset(a.image)}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-white">{a.title}</h4>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
                      {a.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-signal">›</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
