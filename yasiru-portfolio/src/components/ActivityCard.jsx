import { motion } from "framer-motion";

export default function ActivityCard({ a }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
    >
      <div className="aspect-[4/3] bg-white/5">
        <img src={a.image} alt={a.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{a.title}</h3>
        <ul className="mt-3 space-y-1 text-sm text-zinc-200">
          {a.points.map((p) => <li key={p}>• {p}</li>)}
        </ul>
      </div>
    </motion.div>
  );
}
