import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";
import SpotlightOverlay from "./components/SpotlightOverlay";
import { createSpotlight } from "./hooks/useSpotlight";
import { FaBriefcase } from "react-icons/fa";

import {
  PROFILE, EDUCATION, PROJECTS, EXPERIENCE,  CERTIFICATIONS, ACTIVITIES, SKILLS
} from "./data/portfolio";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glowRef.current?.style.setProperty("--mx", `${e.clientX}px`);
        glowRef.current?.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(500px circle at var(--mx, 50vw) var(--my, 20vh), rgba(129,140,248,0.10), transparent 70%)",
      }}
    />
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-indigo-400/80"
    />
  );
}

function TiltPhoto({ src }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 12 });
  const sry = useSpring(ry, { stiffness: 150, damping: 12 });
  const rotateX = useTransform(srx, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [-12, 12]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  };
  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      className="h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-400 p-[2px] md:h-44 md:w-44"
    >
      <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-2px)] border border-white/10 bg-white/5">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}

export default function App() {
  const eduSpots = EDUCATION.map(() => createSpotlight());
  const expSpots = EXPERIENCE.map(() => createSpotlight());

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
    let raf;
    const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <ScrollProgressBar />
      <Navbar />
      <CursorGlow />
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute -top-40 left-10 h-80 w-80 rounded-full bg-indigo-600 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 h-80 w-80 rounded-full bg-violet-700 blur-3xl"
          animate={{ x: [0, -30, 20, 0], y: [0, -20, 20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative mx-auto max-w-6xl px-4">
        {/* HERO */}
        <Section id="home" className="pt-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(600px circle at 0% 0%, rgba(99,102,241,0.15), transparent 40%), radial-gradient(600px circle at 100% 100%, rgba(139,92,246,0.12), transparent 40%)",
              }}
            />
            <div className="relative grid grid-cols-[1fr_auto] items-start gap-4 md:gap-8">

              {/* Left: Text */}
              <div className="min-w-0">


                <h1 className="mt-2 bg-gradient-to-r from-white via-zinc-100 to-indigo-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
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
              <div className="shrink-0" style={{ perspective: 600 }}>
                <TiltPhoto src={PROFILE.photo} />
              </div>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="relative ml-3 space-y-8 border-l border-white/10 pl-8">
            {EXPERIENCE.map((x, i) => {
              const isCurrent = /present/i.test(x.year);
              const spot = expSpots[i];
              return (
                <motion.div
                  key={x.title}
                  ref={spot.ref}
                  onMouseMove={spot.onMouseMove}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <SpotlightOverlay />
                  <span
                    className={`absolute -left-[2.6rem] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-zinc-950 text-indigo-300 ${
                      isCurrent ? "shadow-[0_0_0_4px_rgba(99,102,241,0.25)]" : ""
                    }`}
                  >
                    {isCurrent && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-indigo-500/40"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    <FaBriefcase className="relative h-3 w-3" />
                  </span>

                  <div className="relative flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm text-zinc-300">{x.year}</p>
                    {isCurrent && (
                      <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="relative mt-1 text-xl font-semibold">{x.title}</h3>
                  <p className="relative mt-2 text-zinc-300">{x.org}</p>
                </motion.div>
              );
            })}
          </div>
        </Section>


        {/* ABOUT / EDUCATION */}
        <Section id="about" title="Education">
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((e, i) => {
              const spot = eduSpots[i];
              return (
                <div key={e.school}
                     ref={spot.ref}
                     onMouseMove={spot.onMouseMove}
                     className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <SpotlightOverlay />
                  <p className="relative text-sm text-zinc-300">{e.period}</p>
                  <h3 className="relative mt-1 text-xl font-semibold">{e.school}</h3>
                  <p className="relative mt-2 text-zinc-200">{e.program}</p>
                  <p className="relative mt-2 text-zinc-300">{e.extra}</p>
                </div>
              );
            })}
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
                            className="text-zinc-200 underline decoration-white/20 underline-offset-4 transition-colors duration-200 hover:text-indigo-300 hover:decoration-indigo-300/60"
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
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-white/10 hover:text-white">
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
