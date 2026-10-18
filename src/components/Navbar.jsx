import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { scrollToId } from "../lib/scroll";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", ...items.map((it) => it.id), "contact"]
      .map((id) => document.getElementById(id))
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

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label="Back to top"
        >
          YE<span className="text-signal">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <li key={it.id}>
              <button
                onClick={() => go(it.id)}
                aria-current={active === it.id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === it.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === it.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={() => go("contact")} className="btn-primary hidden !py-2 sm:inline-flex">
            Let&apos;s talk
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-zinc-200 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container-x overflow-hidden md:hidden"
          >
            {[...items, { id: "contact", label: "Contact" }].map((it) => (
              <li key={it.id} className="border-t border-white/[0.06]">
                <button
                  onClick={() => go(it.id)}
                  className="w-full py-4 text-left font-display text-2xl font-semibold text-zinc-100"
                >
                  {it.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
