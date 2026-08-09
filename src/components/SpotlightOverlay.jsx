export default function SpotlightOverlay({ size = 260, color = "129,140,248", opacity = 0.16 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), rgba(${color},${opacity}), transparent 70%)`,
      }}
    />
  );
}
