import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer({ profile }) {
  return (
    <footer id="contact" className="mt-16 border-t border-white/10 bg-zinc-950/40 backdrop-blur">

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div>
            <p className="text-lg font-semibold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-zinc-300">{profile.title}</p>
            <p className="mt-2 text-sm text-zinc-400">{profile.location}</p>
            <p className="mt-2 text-sm text-zinc-400">{profile.phone}</p>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
            >
              <FaGithub /> GitHub
            </a>

            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
              >
                <FaGlobe /> Website
              </a>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
