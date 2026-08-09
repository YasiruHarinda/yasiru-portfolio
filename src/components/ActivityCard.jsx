import { motion } from "framer-motion";
import { useSpotlight } from "../hooks/useSpotlight";
import SpotlightOverlay from "./SpotlightOverlay";

export default function ActivityCard({ a }) {
  const { ref: cardRef, onMouseMove } = useSpotlight();

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-colors duration-300 hover:border-white/20"
    >
      <SpotlightOverlay />
      <div className="aspect-[4/3] overflow-hidden bg-white/5">
        <img
          src={a.image}
          alt={a.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="relative p-5">
        <h3 className="text-lg font-semibold">{a.title}</h3>
        <ul className="mt-3 space-y-1 text-sm text-zinc-200">
          {a.points.map((p) => <li key={p}>• {p}</li>)}
        </ul>
      </div>
    </motion.div>
  );
}
