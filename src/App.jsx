import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ActivityCard from "./components/ActivityCard";
import {
  PROFILE, EDUCATION, PROJECTS, EXPERIENCE, CERTS, ACTIVITIES, SKILLS
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
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              
              {/* Left: Text */}
              <div className="min-w-0">
                <p className="text-sm text-zinc-300">{PROFILE.location}</p>

                <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">
                  {PROFILE.name}
                </h1>

                <p className="mt-3 text-lg text-zinc-200">{PROFILE.title}</p>
                <p className="mt-5 max-w-3xl text-zinc-300">{PROFILE.summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="rounded-xl bg-white text-zinc-900 px-4 py-2 font-semibold"
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
              <div className="relative h-32 w-32 md:h-44 md:w-44 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-white/10" />
                <img
                  src={PROFILE.photo}
                  alt={`${PROFILE.name} profile`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Section>


        {/* ABOUT / EDUCATION */}
        <Section id="about" title="About & Education">
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
        <Section id="certs" title="Certifications">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid gap-2 md:grid-cols-2">
              {CERTS.map((c) => <li key={c} className="text-zinc-200">• {c}</li>)}
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
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-zinc-200">Email: {PROFILE.email}</p>
            <p className="text-zinc-200">Phone: {PROFILE.phone}</p>
            <p className="text-zinc-200">Linkedin: {PROFILE.linkedin}</p>
            <p className="text-zinc-200">Address: {PROFILE.address}</p>

          </div>
          <div className="h-20" />
        </Section>
      </main>
    </div>
  );
}
