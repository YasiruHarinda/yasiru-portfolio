import { asset } from "../lib/asset";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useSpotlight } from "../hooks/useSpotlight";
import SpotlightOverlay from "./SpotlightOverlay";

const ProjectCard = forwardRef(function ProjectCard({ p }, outerRef) {
  const { ref: cardRef, onMouseMove } = useSpotlight();

  return (
    <motion.article
      ref={outerRef}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        className="card group relative flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-white/20"
      >
        <SpotlightOverlay color="198,242,78" opacity={0.08} />

        <div className="relative aspect-[16/9] overflow-hidden bg-ink-850">
          <img
            src={asset(p.image)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {p.categories.map((c) => (
              <span key={c} className="rounded-full bg-ink-950/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-200 backdrop-blur">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-4 font-mono text-xs text-zinc-500">
            <span>{p.type}</span>
            <span className="shrink-0">{p.year}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-white">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.description}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            <span className="text-zinc-200">My role: </span>
            {p.role}
          </p>

          {p.highlights?.length > 0 && (
            <ul className="mt-4 space-y-1 text-sm text-signal">
              {p.highlights.map((h) => (
                <li key={h}>★ {h}</li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="chip !text-[11px]">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-4 pt-6">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
              >
                {l.label} <FiArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;
