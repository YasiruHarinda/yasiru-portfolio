export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="mb-12 md:mb-16" data-reveal>
      <p className="eyebrow flex items-center gap-3">
        <span className="text-zinc-500">{index}</span>
        <span className="h-px w-8 bg-signal/60" />
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,6vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
        {title}
      </h2>
      {children && <p className="mt-5 max-w-2xl text-zinc-400 md:text-lg">{children}</p>}
    </div>
  );
}
