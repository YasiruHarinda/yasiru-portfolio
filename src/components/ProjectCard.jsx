import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-shadow duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.35)]"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, rgba(217,70,239,0.15), transparent 40%, rgba(34,211,238,0.15))",
        }}
      />

      <div className="aspect-[16/9] w-full overflow-hidden bg-white/5">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-fuchsia-600/20 via-zinc-900 to-cyan-500/20">
            <FaShieldAlt className="h-12 w-12 text-white/30 transition-transform duration-500 group-hover:scale-110" />
          </div>
        )}
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <span className="text-sm text-zinc-300">{p.year}</span>
        </div>

        <p className="mt-2 text-sm text-zinc-300">{p.type}</p>

        <p className="mt-4 text-zinc-200">{p.description}</p>
        {p.features?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-zinc-300">
            {p.features.map((f) => <li key={f}>• {f}</li>)}
          </ul>
        )}
        <p className="mt-3 text-sm text-zinc-300"><span className="text-zinc-200">My role:</span> {p.role}</p>

        {p.highlights?.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-zinc-200">
            {p.highlights.map((h) => <li key={h}>• {h}</li>)}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {p.links?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white text-zinc-900 px-3 py-2 text-sm font-semibold transition-transform duration-200 hover:scale-105 hover:opacity-90"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
