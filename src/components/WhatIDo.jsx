import { FOCUS_AREAS } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function WhatIDo() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="What I do" title="Three things I'm good at." />

        <div className="border-t border-white/10">
          {FOCUS_AREAS.map((f, i) => (
            <article
              key={f.title}
              data-reveal
              className="group grid gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[80px_1fr_1.1fr] md:gap-10 md:px-4"
            >
              <span className="font-mono text-sm text-zinc-500 transition-colors group-hover:text-signal">
                0{i + 1}
              </span>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                {f.title}
              </h3>
              <div>
                <p className="text-zinc-400">{f.description}</p>
                {f.proof && (
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-500">
                    <span className="text-signal">Proof → </span>
                    {f.proof}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
