import { lazy, Suspense, useLayoutEffect, useRef } from "react";
import { FaMedium } from "react-icons/fa";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { PROFILE } from "../data/portfolio";
import { gsap, prefersReducedMotion, scrollToId } from "../lib/scroll";

const HeroScene = lazy(() => import("./HeroScene"));

function Chars({ text }) {
  return text.split("").map((c, i) => (
    <span key={i} className="hero-char inline-block will-change-transform">
      {c}
    </span>
  ));
}

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".hero-char", { yPercent: 110, duration: 1.3, stagger: 0.035, delay: 0.15 })
        .from(".hero-fade", { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, "-=0.9")
        .from(".hero-scene-in", { opacity: 0, scale: 0.9, duration: 2 }, 0.2);

      gsap.to(".hero-content", {
        yPercent: -18,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-scene", {
        scale: 1.25,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="hero-scene pointer-events-none absolute inset-0 opacity-60 lg:opacity-100">
        <div className="hero-scene-in absolute inset-0">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="hero-content container-x relative flex flex-1 flex-col justify-center pb-24 pt-28">
        <p className="hero-fade eyebrow mb-6 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          {PROFILE.status}
        </p>

        <h1 className="font-display font-extrabold uppercase leading-[0.86] tracking-[-0.04em] text-[clamp(3.2rem,12.5vw,11.5rem)]">
          <span className="block overflow-hidden pb-[0.04em]">
            <Chars text={PROFILE.firstName} />
          </span>
          {/* Outline text. The variable font's glyphs have overlapping contours, so a plain
              stroke shows stray lines inside letters; painting the background-coloured fill
              over the stroke hides them and leaves a clean outer outline. */}
          <span className="block overflow-hidden pb-[0.04em] text-ink-950 [-webkit-text-stroke:3px_rgba(255,255,255,0.75)] [paint-order:stroke_fill]">
            <Chars text={PROFILE.lastName} />
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-xl">
            <p className="hero-fade font-display text-2xl font-semibold text-white md:text-3xl">
              {PROFILE.title}
              <span className="text-signal"> /</span>
            </p>
            <p className="hero-fade mt-1 text-sm text-zinc-400 md:text-base">{PROFILE.subtitle}</p>
            <p className="hero-fade mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">{PROFILE.summary}</p>
          </div>

          <div className="hero-fade flex flex-wrap gap-3">
            <button onClick={() => scrollToId("work")} className="btn-primary">
              View my work <FiArrowUpRight />
            </button>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="GitHub">
              <FiGithub /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="LinkedIn">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={PROFILE.medium} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="Medium">
              <FaMedium /> Medium
            </a>
          </div>
        </div>
      </div>

      <div className="hero-fade container-x relative flex items-center justify-between pb-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        <span>{PROFILE.location}</span>
        <button onClick={() => scrollToId("about")} className="flex items-center gap-2 hover:text-white">
          Scroll <FiArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
