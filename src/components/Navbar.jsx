const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "CERTIFICATIONS", label: "Certifications" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/60 p-2 backdrop-blur">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 hover:text-white"
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
