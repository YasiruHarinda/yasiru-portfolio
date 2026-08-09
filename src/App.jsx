import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";
import { FaBriefcase } from "react-icons/fa";

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
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-60">
        <motion.div
          className="absolute -top-40 left-10 h-80 w-80 rounded-full bg-fuchsia-600 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl"
          animate={{ x: [0, -30, 20, 0], y: [0, -20, 20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative mx-auto max-w-6xl px-4">
        {/* HERO */}
        <Section id="home" className="pt-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(600px circle at 0% 0%, rgba(217,70,239,0.15), transparent 40%), radial-gradient(600px circle at 100% 100%, rgba(34,211,238,0.15), transparent 40%)",
              }}
            />
            <div className="relative grid grid-cols-[1fr_auto] items-start gap-4 md:gap-8">

              {/* Left: Text */}
              <div className="min-w-0">


                <h1 className="mt-2 bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
                  {PROFILE.name}
                </h1>

                <p className="mt-3 text-lg text-zinc-200">{PROFILE.title}</p>
                <p className="text-sm text-zinc-300">{PROFILE.location}</p>
                <p className="mt-5 max-w-3xl text-zinc-300">{PROFILE.summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                    href={`mailto:${PROFILE.email}`}
                  >
                    Email
                  </a>
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
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
                <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 p-[2px] md:h-44 md:w-44">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-2px)] border border-white/10 bg-white/5">
                    <img src={PROFILE.photo} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="relative ml-3 space-y-8 border-l border-white/10 pl-8">
            {EXPERIENCE.map((x, i) => {
              const isCurrent = /present/i.test(x.year);
              return (
                <motion.div
                  key={x.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.35)]"
                >
                  <span
                    className={`absolute -left-[2.6rem] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-zinc-950 text-fuchsia-400 ${
                      isCurrent ? "shadow-[0_0_0_4px_rgba(217,70,239,0.25)]" : ""
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-fuchsia-500/40"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    <FaBriefcase className="relative h-3 w-3" />
                  </span>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm text-zinc-300">{x.year}</p>
                    {isCurrent && (
                      <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2.5 py-0.5 text-xs font-medium text-fuchsia-300">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold">{x.title}</h3>
                  <p className="mt-2 text-zinc-300">{x.org}</p>
                </motion.div>
              );
            })}
          </div>
        </Section>


        {/* ABOUT / EDUCATION */}
        <Section id="about" title="Education">
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <div key={e.school}
                   className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]">
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

        {/* CERTIFICATIONS */}
        <Section id="CERTIFICATIONS" title="Certifications">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid gap-2 md:grid-cols-2">
              {CERTIFICATIONS.map((c) => (
                        <li key={c.title} className="text-zinc-200">
                          •{" "}
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-200 underline decoration-white/20 underline-offset-4 transition-colors duration-200 hover:text-cyan-300 hover:decoration-cyan-300/60"
                          >
                            {c.title}
                          </a>
                        </li>
                      ))}

            </ul>
          </div>
        </Section>

        {/* EXTRACURRICULAR */}
        <Section id="activities" title="Extracurricular & Achievements">
          <div className="grid gap-6 md:grid-cols-2">
            {ACTIVITIES.map((a) => <ActivityCard key={a.title} a={a} />)}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {SKILLS.map((s) => (
              <span key={s}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-fuchsia-400/30 hover:bg-white/10 hover:text-white">
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
