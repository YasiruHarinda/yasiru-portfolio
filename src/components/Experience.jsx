import { useLayoutEffect, useRef } from "react";
import { EXPERIENCE } from "../data/portfolio";
import { gsap, prefersReducedMotion } from "../lib/scroll";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 60%", scrub: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="py-24 md:py-32">
      <div className="container-x grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index="03" eyebrow="Experience" title={<>Career &amp; experience</>}>
            Industry work at WSO2 and teaching at the University of Peradeniya.
          </SectionHeading>
        </div>

        <ol className="timeline relative ml-2 border-l border-white/10 pl-8 md:pl-12">
          <span className="timeline-fill absolute -left-px top-0 h-full w-px origin-top bg-signal" aria-hidden="true" />
          {EXPERIENCE.map((x) => (
            <li key={x.title} className="relative pb-16 last:pb-0" data-reveal>
              <span className="absolute -left-[calc(2rem+5px)] top-2 h-[9px] w-[9px] rounded-full bg-signal ring-4 ring-ink-950 md:-left-[calc(3rem+5px)]" />
              <p className="font-display text-5xl font-bold tracking-tight text-white/90 md:text-6xl">{x.year}</p>
              <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">{x.title}</h3>
              <p className="mt-1 text-signal">{x.org}</p>
              <ul className="mt-5 space-y-3 text-zinc-400">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-zinc-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
