import { asset } from "../lib/asset";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectGallery({ images }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={asset(current.src)}
            alt={current.alt}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={`h-full w-full ${current.fit === "contain" ? "object-contain p-4" : "object-cover"}`}
          />
        </AnimatePresence>
        <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent px-4 pb-3 pt-10 text-sm text-zinc-200">
          {current.caption}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-6 gap-2" role="group" aria-label="Project photos">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`Show photo: ${img.caption}`}
            aria-pressed={i === active}
            className={`aspect-square overflow-hidden rounded-lg border transition ${
              i === active ? "border-signal" : "border-white/10 opacity-50 hover:opacity-100"
            }`}
          >
            <img src={asset(img.src)} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
