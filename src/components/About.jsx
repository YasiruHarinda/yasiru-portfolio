import { asset } from "../lib/asset";
import { useLayoutEffect, useRef } from "react";
import { CERTIFICATIONS, FEATURED_PROJECTS, PROFILE, PROJECTS } from "../data/portfolio";
import { gsap, prefersReducedMotion } from "../lib/scroll";

const stats = [
  { value: `${PROJECTS.length + FEATURED_PROJECTS.length}`, label: "Projects shipped" },
  { value: "WSO2", label: "Software engineering internship" },
  { value: "2", label: "National project awards" },
  { value: `${CERTIFICATIONS.length}`, label: "Certifications" },
];

export default function About() {
  const root = useRef(null);

  // Words light up one by one as the paragraph scrolls through the viewport.
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: ".about-text", start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-zinc-500">01</span>
            <span className="h-px w-8 bg-signal/60" />
            About
          </p>
          <div className="group relative mt-8 aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10">
            <img
              src={asset(PROFILE.photo)}
              alt={PROFILE.name}
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-5">
              <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
              <p className="text-sm text-zinc-400">{PROFILE.location}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="about-text font-display text-[clamp(1.5rem,3.2vw,2.6rem)] font-medium leading-[1.25] tracking-[-0.015em] text-white">
            {PROFILE.about.split(" ").map((w, i) => (
              <span key={i} className="about-word">
                {w}{" "}
              </span>
            ))}
          </p>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col bg-ink-950 p-6" data-reveal>
                <dt className="order-2 mt-2 text-sm text-zinc-400">{s.label}</dt>
                <dd className="font-display text-4xl font-bold text-signal">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
