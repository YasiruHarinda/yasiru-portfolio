import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

const DRAG_THRESHOLD = 6; // px of movement before a press counts as a drag, not a click

export default function ProjectSlider({ projects, resetKey }) {
  const track = useRef(null);
  const drag = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
    const card = el.querySelector("article");
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    setIndex(Math.min(projects.length - 1, Math.round(el.scrollLeft / step)));
  }, [projects.length]);

  // A new filter shows a different set of cards: start again from the first one.
  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
    const t = setTimeout(measure, 450);
    return () => clearTimeout(t);
  }, [resetKey, measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const scrollByCard = (dir) => {
    const el = track.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };

  // Mouse drag-to-scroll. Touch and trackpads already scroll natively.
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > DRAG_THRESHOLD) {
      d.moved = true;
      track.current.setPointerCapture(e.pointerId);
      track.current.classList.add("is-dragging");
    }
    if (d.moved) track.current.scrollLeft = d.left - dx;
  };
  const endDrag = (e) => {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;
    track.current.classList.remove("is-dragging");
    if (track.current.hasPointerCapture(e.pointerId)) track.current.releasePointerCapture(e.pointerId);
    // Swallow the click that follows a drag so links inside cards don't open.
    const block = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    };
    track.current.addEventListener("click", block, { capture: true, once: true });
    setTimeout(() => track.current?.removeEventListener("click", block, { capture: true }), 0);
  };

  return (
    <div>
      <div
        ref={track}
        onScroll={measure}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        tabIndex={0}
        role="region"
        aria-label="More projects. Scroll sideways to see them all."
        className="slider-track bleed-x flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-2"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} className="w-[82vw] shrink-0 snap-start sm:w-[380px] lg:w-[400px]" />
          ))}
        </AnimatePresence>
        {/* Spacer so the last card can snap to the start edge on wide screens */}
        <div aria-hidden="true" className="w-px shrink-0" />
      </div>

      <div className="container-x mt-6 flex items-center gap-6">
        <span className="font-mono text-xs text-zinc-500">
          <span className="text-white">{String(index + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
        </span>
        <div className="relative h-px flex-1 bg-white/10">
          <div
            className="absolute inset-y-0 left-0 bg-signal transition-[width] duration-200"
            style={{ width: `${Math.max(progress, 1 / Math.max(projects.length, 1)) * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={edges.start}
            aria-label="Previous project"
            className="rounded-full border border-white/15 p-3 text-zinc-200 transition hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-30"
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            disabled={edges.end}
            aria-label="Next project"
            className="rounded-full border border-white/15 p-3 text-zinc-200 transition hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-30"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
