import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "CERTIFICATIONS", label: "Certifications" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contacts" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/10 bg-zinc-950/60 p-2 shadow-lg shadow-black/20 backdrop-blur-xl">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                onClick={() => go(it.id)}
                className={`relative rounded-xl px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-600/70 to-cyan-500/70"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{it.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
