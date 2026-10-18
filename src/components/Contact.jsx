import { useState } from "react";
import { FaMedium } from "react-icons/fa";
import { FiArrowUp, FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PROFILE } from "../data/portfolio";
import { scrollToId } from "../lib/scroll";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const links = [
    { label: "Email", href: `mailto:${PROFILE.email}`, icon: FiMail },
    { label: "LinkedIn", href: PROFILE.linkedin, icon: FiLinkedin },
    { label: "GitHub", href: PROFILE.github, icon: FiGithub },
    { label: "Medium", href: PROFILE.medium, icon: FaMedium },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/[0.06] pt-24 md:pt-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <p className="eyebrow flex items-center gap-3" data-reveal>
          <span className="text-zinc-500">07</span>
          <span className="h-px w-8 bg-signal/60" />
          Contact
        </p>
        <h2
          data-reveal
          className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-white"
        >
          Let&apos;s build
          <br />
          <span className="text-signal">something.</span>
        </h2>
        <p data-reveal className="mt-8 max-w-xl text-lg text-zinc-400">
          I&apos;m open to full-time software engineering roles. If you&apos;re hiring, or just want to talk about
          distributed systems, my inbox is open.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${PROFILE.email}`} className="btn-primary !px-6 !py-3.5 text-base">
            {PROFILE.email} <FiArrowUpRight />
          </a>
          <button onClick={copyEmail} className="btn-ghost !py-3.5" aria-live="polite">
            {copied ? <FiCheck className="text-signal" /> : <FiCopy />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <ul className="mt-20 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, href, icon: Icon }) => (
            <li
              key={label}
              className="border-b border-white/10 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between px-1 py-6 text-zinc-300 transition-colors hover:text-white sm:px-6"
              >
                <span className="flex items-center gap-3 font-display text-xl font-semibold">
                  <Icon className="text-signal" /> {label}
                </span>
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p>Designed & built by me · React, GSAP, Three.js</p>
          <button onClick={() => scrollToId("home")} className="flex items-center gap-2 uppercase tracking-widest hover:text-white">
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
