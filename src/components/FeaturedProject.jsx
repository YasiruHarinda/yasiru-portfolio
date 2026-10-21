import { FiArrowUpRight } from "react-icons/fi";
import { DIAGRAMS } from "../data/diagrams";
import { track } from "../lib/analytics";
import ArchitectureDiagram from "./ArchitectureDiagram";
import ProjectGallery from "./ProjectGallery";

export default function FeaturedProject({ p: P }) {
  return (
    <article className="card overflow-hidden" data-reveal>
      <div className="grid lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-signal px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-ink-950">
              Featured
            </span>
            <span className="font-mono text-xs text-zinc-500">
              {P.year} · {P.type}
            </span>
          </div>

          <h3 className="mt-6 font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">{P.title}</h3>
          <p className="mt-4 text-lg text-zinc-200">{P.tagline}</p>
          <p className="mt-4 text-zinc-400">{P.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {P.stats.map((s) => (
              <div key={s.label} className="flex flex-col border-l border-signal/40 pl-4">
                <dt className="order-2 text-xs text-zinc-500">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            {P.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => track("project_link_click", { project: P.title, link_label: l.label, link_url: l.href })}
                target="_blank"
                rel="noreferrer"
                className={i === 0 ? "btn-primary" : "btn-ghost"}
              >
                {l.label} <FiArrowUpRight />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.08] bg-ink-950/60 p-4 sm:p-8 lg:border-l lg:border-t-0">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            {P.gallery ? "Photos" : "Architecture"}
          </p>
          {P.gallery ? (
            <ProjectGallery images={P.gallery} />
          ) : (
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
              <ArchitectureDiagram diagram={DIAGRAMS[P.diagram]} />
            </div>
          )}

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {P.pillars.map((pillar) => (
              <div key={pillar.title}>
                <h4 className="font-display text-lg font-semibold text-white">{pillar.title}</h4>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-signal">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-white/[0.08] p-6 sm:px-10">
        {P.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
