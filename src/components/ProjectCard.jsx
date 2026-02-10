import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
    >
      <div className="aspect-[16/9] w-full bg-white/5">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
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
            <span key={t} className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
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
                className="rounded-xl bg-white text-zinc-900 px-3 py-2 text-sm font-semibold hover:opacity-90"
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
