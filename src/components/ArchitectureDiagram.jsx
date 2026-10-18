// Draws one of the architecture diagrams in data/diagrams.js.
// Dashed links animate to suggest requests and messages moving through the system.

const W = 640;
const H = 360;
const NODE_H = 36;

const center = (n) => ({ x: n.x + n.w / 2, y: n.y + NODE_H / 2 });

export default function ArchitectureDiagram({ diagram }) {
  const { nodes, edges, legend, label } = diagram;
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox={`0 50 ${W} ${H - 60}`} className="h-auto w-full" role="img" aria-label={label}>
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.04)" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#grid)" />

      {edges.map(([a, b, highlight]) => {
        const p = center(byId[a]);
        const q = center(byId[b]);
        return (
          <line
            key={a + b}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke={highlight ? "#c6f24e" : "rgba(255,255,255,0.35)"}
            strokeWidth={highlight ? 1.5 : 1}
            strokeDasharray="6 6"
            className="animate-flow"
          />
        );
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={NODE_H}
            rx={n.store ? 18 : 8}
            fill={n.accent ? "#c6f24e" : "#16161a"}
            stroke={n.accent ? "#c6f24e" : n.hot ? "rgba(198,242,78,0.6)" : "rgba(255,255,255,0.18)"}
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + NODE_H / 2 + 4}
            textAnchor="middle"
            fontSize="11.5"
            fontFamily="JetBrains Mono, monospace"
            fill={n.accent ? "#0a0a0b" : "#e4e4e7"}
          >
            {n.label}
          </text>
        </g>
      ))}

      <line x1="340" y1="326" x2="374" y2="326" stroke="#c6f24e" strokeWidth="1.5" strokeDasharray="6 6" />
      <text x="380" y="330" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fill="#71717a">
        — {legend}
      </text>
    </svg>
  );
}
