// Architecture diagrams for the featured projects, drawn on a 640-wide canvas.
// Node flags: hot = core service (lime outline), accent = filled lime,
// store = rounded data store. Edges marked `true` are drawn in lime.

export const DIAGRAMS = {
  orderflow: {
    label:
      "OrderFlow architecture: client to Envoy and YARP gateways, to Orders and Inventory services, which exchange events over RabbitMQ with outbox pattern; Notifications consumes events; each service owns its PostgreSQL database.",
    legend: "events via transactional outbox",
    nodes: [
      { id: "client", label: "Client", x: 20, y: 160, w: 70 },
      { id: "envoy", label: "Envoy Gateway", x: 110, y: 160, w: 110 },
      { id: "yarp", label: "YARP Gateway", x: 240, y: 160, w: 104 },
      { id: "orders", label: "Orders.API", x: 380, y: 70, w: 100, hot: true },
      { id: "inventory", label: "Inventory.API", x: 380, y: 250, w: 100, hot: true },
      { id: "mq", label: "RabbitMQ", x: 380, y: 160, w: 100, accent: true },
      { id: "notify", label: "Notifications", x: 520, y: 160, w: 104 },
      { id: "pg1", label: "PostgreSQL", x: 520, y: 70, w: 104, store: true },
      { id: "pg2", label: "PostgreSQL + Redis", x: 500, y: 250, w: 130, store: true },
    ],
    edges: [
      ["client", "envoy"],
      ["envoy", "yarp"],
      ["yarp", "orders"],
      ["yarp", "inventory"],
      ["orders", "mq", true],
      ["inventory", "mq", true],
      ["mq", "notify", true],
      ["orders", "pg1"],
      ["inventory", "pg2"],
    ],
  },

  grc: {
    label:
      "WSO2 GRC Platform architecture: auditors and teams use the React Audit Hub, signed in through Asgardeo. It calls the Go backend, which uses the Compliance Entity service for MySQL and Azure Blob storage, and runs asynchronous AI validation of evidence with Claude.",
    legend: "async AI evidence validation",
    nodes: [
      { id: "users", label: "Auditors/Teams", x: 14, y: 160, w: 108 },
      { id: "web", label: "React Audit Hub", x: 138, y: 160, w: 118 },
      { id: "idp", label: "Asgardeo", x: 138, y: 70, w: 118, store: true },
      { id: "api", label: "Go Backend", x: 282, y: 160, w: 100, hot: true },
      { id: "ai", label: "AI Validation", x: 282, y: 250, w: 100, accent: true },
      { id: "llm", label: "Claude API", x: 420, y: 250, w: 100 },
      { id: "entity", label: "Compliance Entity", x: 410, y: 160, w: 130, hot: true },
      { id: "db", label: "MySQL", x: 560, y: 110, w: 70, store: true },
      { id: "blob", label: "Azure Blob", x: 554, y: 210, w: 82, store: true },
    ],
    edges: [
      ["users", "web"],
      ["web", "idp"],
      ["web", "api"],
      ["api", "idp"],
      ["api", "entity"],
      ["entity", "db"],
      ["entity", "blob"],
      ["api", "ai", true],
      ["ai", "llm", true],
    ],
  },

  minigit: {
    label:
      "Mini Git architecture: the React web view and the Node CLI share one command layer over a pure version-control engine. The engine stores objects in memory in the browser or as zlib loose objects on disk, and exported repositories are verified by real git.",
    legend: "verified against real git",
    nodes: [
      { id: "web", label: "Web X-ray (React)", x: 14, y: 90, w: 132 },
      { id: "cli", label: "CLI (Node)", x: 14, y: 230, w: 132 },
      { id: "shell", label: "Command layer", x: 172, y: 160, w: 110, hot: true },
      { id: "engine", label: "Engine", x: 306, y: 160, w: 90, accent: true },
      { id: "mem", label: "In-memory store", x: 420, y: 90, w: 124, store: true },
      { id: "fs", label: "Loose objects", x: 420, y: 230, w: 112, store: true },
      { id: "git", label: "real git", x: 556, y: 230, w: 76, hot: true },
    ],
    edges: [
      ["web", "shell"],
      ["cli", "shell"],
      ["shell", "engine"],
      ["engine", "mem"],
      ["engine", "fs"],
      ["fs", "git", true],
    ],
  },
};
