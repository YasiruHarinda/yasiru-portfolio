import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FEATURED_PROJECTS, PROJECT_FILTERS, PROJECTS } from "../data/portfolio";
import { ScrollTrigger } from "../lib/scroll";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter));

  // Filtering changes the page height, so scroll-triggered sections below need re-measuring.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => clearTimeout(t);
  }, [filter]);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Selected work" title="Things I've built.">
          From cloud-native microservices to AI robots and mobile apps.
        </SectionHeading>

        <div className="space-y-10">
          {FEATURED_PROJECTS.map((p) => (
            <FeaturedProject key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-white">More projects</h3>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  filter === f ? "border-transparent text-ink-950" : "border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                {filter === f && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-signal" />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
