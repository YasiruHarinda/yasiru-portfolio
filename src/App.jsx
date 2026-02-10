import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";

import {
  PROFILE, EDUCATION, PROJECTS, EXPERIENCE,  CERTIFICATIONS, ACTIVITIES, SKILLS
} from "./data/portfolio";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
    let raf;
    const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-10 h-80 w-80 rounded-full bg-fuchsia-600 blur-3xl" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4">
        {/* HERO */}
        <Section id="home" className="pt-28">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid grid-cols-[1fr_auto] items-start gap-4 md:gap-8">
              
              {/* Left: Text */}
              <div className="min-w-0">
                

                <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">
                  {PROFILE.name}
                </h1>

                <p className="mt-3 text-lg text-zinc-200">{PROFILE.title}</p>
                <p className="text-sm text-zinc-300">{PROFILE.location}</p>
                <p className="mt-5 max-w-3xl text-zinc-300">{PROFILE.summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2"
                    href={`mailto:${PROFILE.email}`}
                  >
                    Email
                  </a>
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2"
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2"
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="shrink-0">
                <div className="h-20 w-20 md:h-44 md:w-44 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <img src={PROFILE.photo} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Section>


        {/* ABOUT / EDUCATION */}
        <Section id="about" title="Education">
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <div key={e.school}
                   className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm text-zinc-300">{e.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.school}</h3>
                <p className="mt-2 text-zinc-200">{e.program}</p>
                <p className="mt-2 text-zinc-300">{e.extra}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {EXPERIENCE.map((x) => (
              <div key={x.title}
                   className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm text-zinc-300">{x.year}</p>
                <h3 className="mt-1 text-xl font-semibold">{x.title}</h3>
                <p className="mt-2 text-zinc-300">{x.org}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="CERTIFICATIONS" title="Certifications">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid gap-2 md:grid-cols-2">
              {CERTIFICATIONS.map((c) => <li key={c} className="text-zinc-200">• {c}</li>)}
            </ul>
          </div>
        </Section>

        {/* EXTRACURRICULAR */}
        <Section id="activities" title="Extracurricular & Achievements">
          <div className="grid gap-6 md:grid-cols-3">
            {ACTIVITIES.map((a) => <ActivityCard key={a.title} a={a} />)}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {SKILLS.map((s) => (
              <span key={s}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Footer profile={PROFILE} />
      </main>
    </div>
  );
}
