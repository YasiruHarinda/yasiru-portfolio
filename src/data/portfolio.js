export const PROFILE = {
  name: "Yasiru Harinda Edirimanna",
  firstName: "Yasiru",
  lastName: "Edirimanna",
  title: " Full-stack Developer",
  subtitle: "Computer Engineering Graduate · University of Peradeniya",
  location: "Colombo, Sri Lanka",
  status: "Open to full-time roles",
  email: "harindayasiru@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasiru-edirimanna",
  github: "https://github.com/YasiruHarinda",
  medium: "https://medium.com/@harindayasiru",
  photo: "/images/profile.jpg",
  summary:
    "Computer Engineering graduate with a strong interest in full-stack development, AI-driven systems, cloud computing, DevOps and embedded systems. Passionate about designing innovative, scalable solutions and exploring emerging technologies to solve real-world problems.",
  about:
    "I’m a Computer Engineering graduate who enjoys solving complex problems and building reliable, well-engineered software. I’m interested in designing systems that are secure, scalable, and practical for real-world use. I value continuous learning, taking ownership of challenges, and turning ideas into production-ready solutions.",
};


export const FOCUS_AREAS = [
  {
    title: "Full-stack Software Engineering",
    description:
      "I build features end to end: database schema, backend APIs and a typed React interface. At WSO2 I designed and built the audit module of an internal GRC platform from scratch, from Go services and MySQL to the React/TypeScript frontend.",
    proof: "WSO2 GRC Platform · DECP · Mini Git",
    tags: ["Go", "C# / .NET", "TypeScript", "React", "Node.js", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Cloud & DevOps Engineering",
    description:
      "I provision infrastructure as code, ship containers to Kubernetes through CI/CD and GitOps, and add the monitoring that shows when something breaks. OrderFlow's event-driven .NET services run on Azure AKS, and its canary releases roll back automatically when metrics go bad.",
    proof: "OrderFlow",
    tags: ["Azure (AKS)", "AWS", "Docker", "Kubernetes", "Helm", "Terraform", "Argo CD", "GitHub Actions", "RabbitMQ", "Grafana"],
  },
  {
    title: "AI Engineering",
    description:
      "I build multi-step LLM pipelines with validation and fallbacks, so AI output gets checked before anyone relies on it. At WSO2 I built an agent that validates audit evidence. For my final-year project I designed a 4-agent pipeline for rubric generation, grading, personalised feedback and validation.",
    proof: "GRC evidence-validation agent · AI Tutoring System · PEBO",
    tags: ["Python", "FastAPI", "LLM APIs", "Gemini", "Multi-agent pipelines", "Prompt engineering", "OpenCV"],
  },
];


export const EXPERIENCE = [
{
    title: "Software Engineering Intern",
    org: "WSO2 (Pvt) Ltd",
    year: "2026",
    points: [
    "Built the Audit module of WSO2's Governance, Risk & Compliance (GRC) platform from scratch to production deployment, delivering a fully functional platform now used in real-world workflows.",
    "Designed and implemented end-to-end audit workflows, including control management, evidence submission, audit trails and review processes.",
    "Designed the compliance entity model and developed an AI-powered validation agent to assess submitted audit evidence.",
    "Technologies: React, TypeScript, Go, MySQL, WSO2 Asgardeo, Choreo and Azure Storage."
  ],
},
  {
    title: "Undergraduate Teaching Assistant",
    org: "Department of Computer Engineering, University of Peradeniya",
    year: "2024",
    points: [
      "Served as a Casual Instructor coordinating laboratory sessions with instructors and assisted students.",
    ],
  },
];

export const FEATURED_PROJECTS = [
{
  title: "WSO2 GRC Platform",
  diagram: "grc",
  tagline:
    "Governance, Risk & Compliance platform for running SOC 2, HIPAA and ISO 27001 audits at WSO2, with an AI agent that checks audit evidence before a reviewer sees it.",
  description:
    "Teams submit evidence against audit controls; auditors sample, review and approve it. I designed and built the Audit Hub from scratch (Go services, data layer and React frontend) and the AI validation agent that checks every submission against the control's requirement.",
  year: "2026",
  type: "WSO2 Internship · Team",
  links: [{ label: "GitHub", href: "https://github.com/wso2-open-operations/grc-tools" }],
  stats: [
    { value: "343", label: "commits " },
    { value: "100+", label: "REST API endpoints" },
    { value: "10+", label: "evidence file types read by AI" },
    { value: "3", label: "AI verdicts: pass / fail / uncertain" },
  ],
  pillars: [
    {
      title: "Audit Hub (full-stack)",
      points: [
        "Built the audit module from scratch: frameworks, controls, evidence rounds, population & sample workflows, review and approval",
        "Go REST backend with Asgardeo JWT (JWKS) authentication and role-gated routes",
        "Designed the Compliance Entity, a Go data service that owns MySQL and Azure Blob access for the Risk and Audit hubs",
        "Audit trail, comments, notifications and reminder emails",
        "React 19 + TypeScript frontend with TanStack Query and WSO2 Oxygen UI, deployed on WSO2 Choreo",
      ],
    },
    {
      title: "AI evidence validation",
      points: [
        "Every evidence or population submission is checked asynchronously by Claude against the control's requirement and standing evidence rules",
        "Structured output through tool use: PASS / FAIL / UNCERTAIN plus severity-ranked gaps",
        "Reads PDF, Word, Excel, PowerPoint, CSV and images, including screenshots embedded in documents, within page and size budgets",
        "Prompt-injection hardening: user-supplied text is quoted as untrusted data",
        "Bursts of uploads collapse to one job; identical inputs reuse the earlier verdict at zero token cost",
        "Per-submission validation log with token accounting",
      ],
    },
  ],
  tech: [
    "Go", "React 19", "TypeScript", "MySQL", "Claude API", "Anthropic Go SDK", "LLM tool use",
    "WSO2 Asgardeo", "WSO2 Choreo", "Azure Blob Storage", "TanStack Query", "Oxygen UI", "OpenAPI",
  ],
},
{
  title: "OrderFlow",
  diagram: "orderflow",
  tagline: "Event-driven order system on .NET 10 microservices, delivered to AKS through a GitOps platform.",
  description:
    "A customer places an order; stock is reserved in another service over RabbitMQ; the order is confirmed or rejected and the customer is notified. All of it keeps working when pods, or the message broker itself, crash halfway through.",
  year: "2026",
  type: "Individual Project",
  links: [{ label: "GitHub", href: "https://github.com/YasiruHarinda/orderflow" }],
  stats: [
    { value: "3", label: "services + gateway" },
    { value: "13", label: "architecture decision records" },
    { value: "5", label: "CI/CD workflows" },
    { value: "20→100%", label: "canary rollouts" },
  ],
  pillars: [
    {
      title: ".NET engineering",
      points: [
        "Clean Architecture + DDD per service, layer rules enforced by architecture tests",
        "CQRS with a validation decorator, without MediatR",
        "MassTransit transactional outbox/inbox, retries and dead-letter queues",
        "Choreographed saga with compensation and a timeout safety net",
        "EF Core 10 optimistic concurrency, HybridCache (memory + Redis), YARP gateway with rate limiting",
      ],
    },
    {
      title: "Platform engineering",
      points: [
        "Terraform for AKS (Cilium, workload identity), private PostgreSQL and Key Vault, using OIDC with no cloud secrets",
        "Hardened Helm chart with Pod Security restricted, HPA, PDB and NetworkPolicies",
        "GitOps with ArgoCD; canary releases with Argo Rollouts and automatic rollback",
        "Supply chain: Trivy gate, SBOM, cosign keyless signing, SHA-pinned actions",
        "OpenTelemetry → Prometheus, Loki, Tempo, Grafana with SLO burn-rate alerts",
        "Testcontainers integration tests, kind e2e on every PR, k6 load test and chaos tests",
      ],
    },
  ],
  tech: [
    "C#", ".NET 10", "ASP.NET Core", "EF Core", "MassTransit", "RabbitMQ", "PostgreSQL", "Redis",
    "YARP", ".NET Aspire", "React", "TypeScript", "Docker", "Kubernetes", "Helm", "Terraform",
    "Azure AKS", "ArgoCD", "Argo Rollouts", "GitHub Actions", "OpenTelemetry", "Grafana", "k6",
  ],
},
{
  title: "PEBO",
  tagline:
    "An AI desk companion robot that recognises you, talks with you, shows emotions with its eyes and arms, and is set up from a mobile app.",
  description:
    "PEBO identifies its user by face, holds natural voice conversations, reacts to facial expressions, tracks your face as you move, plays music, sets reminders and calls other PEBOs on the network. As AI and software development lead in a team of four, I built its voice assistant pipeline and integrated recognition and emotion detection.",
  year: "2025",
  type: "Team Project · AI & software lead",
  links: [
    { label: "Project site", href: "https://cepdnaclk.github.io/e20-3yp-P-E-BO-Desk-Companion/" },
    { label: "GitHub", href: "https://github.com/cepdnaclk/e20-3yp-P-E-BO-Desk-Companion" },
  ],
  stats: [
    { value: "Top 10", label: "IESL undergraduate projects 2025" },
    { value: "3rd", label: "I-TO-I Innovation Award (UPAA–USA)" },
    { value: "2", label: "exhibitions: Techno & EngEx 2025" },
    { value: "4", label: "engineers on the team" },
  ],
  gallery: [
    { src: "/images/projects/pebo/pebo-engex.jpg", alt: "Two PEBO robots beside the companion app at EngEx 2025", caption: "Two PEBOs and the companion app at EngEx 2025" },
    { src: "/images/projects/pebo/pebo-inside.jpg", alt: "PEBO opened up showing the Raspberry Pi 4, servos and PWM controller", caption: "Inside: Raspberry Pi 4, servos and PCA9685 PWM controller" },
    { src: "/images/projects/pebo/pebo-robot.jpg", alt: "White PEBO robot with glowing eyes on a desk", caption: "PEBO at EngEx Smart City Day" },
    { src: "/images/projects/pebo/pebo-cad.jpg", alt: "Three CAD views of the PEBO enclosure", caption: "3D-printed enclosure designed in CAD", fit: "contain" },
    { src: "/images/projects/pebo/pebo-app.jpg", alt: "PEBO companion app dashboard screen", caption: "React Native companion app", fit: "contain" },
    { src: "/images/projects/pebo/pebo-demo.jpg", alt: "A visitor showing a card to PEBO", caption: "Live demo with visitors" },
  ],
  pillars: [
    {
      title: "AI & voice (my part)",
      points: [
        "Built the voice assistant pipeline: speech-to-text, Gemini for understanding and replies, and text-to-speech",
        "Voice commands for music, reminders and calls between PEBO devices",
        "Integrated AWS Rekognition user recognition so PEBO knows who it's talking to and personalises its responses",
        "Supported facial-expression emotion detection that drives emotion-aware responses",
        "Contributed to AWS backend connectivity, with profile images stored in S3",
      ],
    },
    {
      title: "Robot, cloud & app",
      points: [
        "Raspberry Pi 4 with Pi Camera, microphone and speaker",
        "Dual OLED eyes show emotions; servo arms gesture and a pan-tilt camera tracks faces in real time",
        "React Native (Expo) app: Firebase sign-in, Wi-Fi setup by QR code, tasks and device control",
        "Firebase for user profiles and device-to-device communication",
        "3D-printed enclosure designed in CAD",
      ],
    },
  ],
  tech: [
    "Raspberry Pi 4", "Python", "Gemini API", "Speech-to-text", "Text-to-speech", "AWS Rekognition",
    "Amazon S3", "OpenCV", "Firebase", "React Native", "Expo", "OLED displays", "Servo control",
  ],
},
];

export const PROJECT_FILTERS = ["All", "Full-stack", "AI / ML", "Mobile", "Hardware"];

export const PROJECTS = [
  {
    title: "AI-Driven Feedback & Tutoring System",
    year: "2025 – 2026",
    type: "Final Year Project · Team of 3",
    categories: ["AI / ML", "Full-stack"],
    image: "/images/projects/ai-tutoring.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/cepdnaclk/e20-4yp-ai-driven-automated-feedback-and-tutoring-system-for-higher-education" },
      { label: "Site", href: "https://cepdnaclk.github.io/e20-4yp-ai-driven-automated-feedback-and-tutoring-system-for-higher-education/" },
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Docker", "LLM APIs", "Embeddings", "Moodle REST API"],
    description:
      "An automated grading and feedback pipeline connected to Moodle. Submissions are ingested and checked for plagiarism by embedding similarity before the deadline. After the deadline, a multi-agent LLM pipeline grades each answer against a rubric and posts personalised feedback back to Moodle. It also tracks each student's weak concepts over time so feedback improves with their history.",
    role:
      "Conducted the literature review and designed the 4-agent LLM pipeline: rubric interpretation, rubric-based grading, personalised feedback, and a validation fallback that catches suspicious grades and generic feedback. The LLM provider is swappable (Gemini, Claude, OpenAI, Bedrock, Groq, Ollama).",
  },
  {
    title: "DECP - Department Engagement & Career Platform",
    year: "2026",
    type: "Software Architecture Project · Team of 3",
    categories: ["Full-stack", "Mobile"],
    image: "/images/projects/decp.png",
    links: [
      { label: "Live demo", href: "https://co-528-labs-oito.vercel.app/" },
      { label: "GitHub", href: "https://github.com/YasiruHarinda/CO528-Labs/tree/main/mini_project" },
      { label: "Report", href: "https://github.com/YasiruHarinda/CO528-Labs/blob/main/mini_project/decp_Mini_Project_CO528.pdf" },
    ],
    tech: ["Node.js", "Express", "Firebase (Firestore, Auth, Storage)", "JWT", "Web Push", "React Native", "Expo", "Vercel", "Render"],
    description:
      "A web and mobile platform where Computer Engineering students and alumni share photo and video posts, apply for jobs and internships, collaborate on research, message each other and follow department news. Events, news and student profiles come live from the department's own portal APIs, and an analytics dashboard tracks activity.",
    role:
      "Enterprise, Security & DevOps Architect. Designed the system architecture and built the Node.js/Express backend: 24 REST endpoints across auth, posts, jobs, research, messaging, analytics and notifications, with JWT auth and Web Push (VAPID) notifications. Scaffolded the React Native app. The web client runs on Vercel and the API on Render.",
  },
  {
    title: "CodeCity 3D - Codebase Visualiser",
    year: "2026",
    type: "Personal Project",
    categories: ["Full-stack"],
    image: "/images/projects/codecity.jpg",
    links: [
      { label: "Live demo", href: "https://yasiruharinda.github.io/codecity/" },
      { label: "GitHub", href: "https://github.com/YasiruHarinda/codecity" },
    ],
    tech: ["TypeScript", "Node.js", "Three.js", "WebGL / GLSL shaders", "Vite", "Vitest", "Git internals", "GitHub Actions"],
    description:
      "Turns any git repository into an interactive 3D city. Each file is a building (height = lines of code, colour = how often it changes), each folder is a district of streets, and imports are arcs between buildings, with circular dependencies flagged in red. A timeline replays the repo's history as buildings grow, appear and vanish, and at night windows light up and the most-changed files glow.",
    role:
      "Designed and built it end to end: a Node.js CLI that reads churn and history straight from git and parses JS/TS, Python and C# imports (cycles found with Tarjan's algorithm), and a Three.js viewer that lays the city out as a squarified treemap and keeps 10,000+ files interactive with instanced meshes and custom shaders. 104 automated tests; deployed to GitHub Pages by GitHub Actions.",
  },
  {
    title: "Mini Git - Git Internals, Visualised",
    year: "2026",
    type: "Personal Project",
    categories: ["Full-stack"],
    image: "/images/projects/minigit.jpg",
    links: [
      { label: "Live demo", href: "https://yasiruharinda.github.io/mini-git/" },
      { label: "GitHub", href: "https://github.com/YasiruHarinda/mini-git" },
    ],
    tech: ["TypeScript", "React 19", "Node.js", "Vite", "Vitest", "SHA-1", "zlib", "Git internals", "GitHub Actions"],
    description:
      "Git's object model rebuilt from scratch in TypeScript, with a web view that shows what git does inside a repository as you work: stage, commit, branch and merge, and watch the real blobs, trees and commits appear or get reused. The objects are git's own, with the same encoding and SHA-1s, verified against real git.",
    role:
      "Designed and built it end to end: a pure engine (hand-written SHA-1, LCS diff, three-way merge) that runs unchanged in the browser and in Node, a 12-command CLI, and a React view with a commit graph and object inspector. 186 tests, including differential tests against real git; no git libraries used.",
  },
  {
    title: "Mona Dashboard - Factory Production Monitoring",
    year: "2024",
    type: "Team Project · Team of 5",
    categories: ["Full-stack"],
    image: "/images/projects/mona.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/cepdnaclk/e20-co227-MONA-Dashboard" },
      { label: "Site", href: "https://cepdnaclk.github.io/e20-co227-MONA-Dashboard/" },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Chart.js", "Recharts", "ApexCharts", "MUI", "jsPDF", "Python"],
    description:
      "A real-time monitoring dashboard for a plastic-toy factory, where parts getting stuck in moulds stop production. It shows the live state of all 24 moulding machines (active, idle, off or emergency) and raises an alert the moment a part gets stuck. Other tabs track hourly production rates and product and part progress against targets, and give a production history by machine, part and product that can be exported as a PDF report.",
    role:
      "Designed and built the dashboard UI and its real-time data visualisations, and connected the frontend to the backend APIs for live machine status, production rates and alerts.",
  },
  {
    title: "Air Quality Analyser - Hybrid LSTM & Fuzzy Logic",
    year: "2025",
    type: "Team Project",
    categories: ["AI / ML"],
    image: "/images/projects/air-quality.jpg",
    links: [{ label: "GitHub", href: "https://github.com/cepdnaclk/e20-co542-Air-Quality-Analyser" }],
    tech: ["Python", "LSTM", "Fuzzy Logic"],
    description: "A forecasting model combining LSTM with fuzzy logic to improve air-quality prediction accuracy.",
    role: "Designed the forecasting approach, model inputs/outputs and evaluation steps.",
  },
  {
    title: "Asset & Income Tracker",
    year: "2024",
    type: "Individual Project",
    categories: ["Mobile"],
    image: "/images/projects/income.jpg",
    links: [{ label: "GitHub", href: "https://github.com/YasiruHarinda/IncomeDashboard" }],
    tech: ["Flutter", "Dart", "Firebase", "BLoC"],
    description:
      "Cross-platform app to record income and assets, with charts and summaries that make spending patterns and overall financial status easy to read.",
    role: "Designed and built the whole app: BLoC state management, Firebase auth and cloud storage, responsive UI.",
  },
  {
    title: "This Portfolio",
    year: "2026",
    type: "Individual Project",
    categories: ["Full-stack"],
    image: "/images/projects/portfolio.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/YasiruHarinda/yasiru-portfolio" },
      { label: "Site", href: "https://yasiru-portfolio-blj2.vercel.app/" },
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "GSAP ScrollTrigger", "Three.js", "Framer Motion", "Lenis", "Vercel"],
    description:
      "The site you're on, redesigned from scratch: a Three.js network scene in the hero, scroll-driven GSAP animations with Lenis smooth scrolling, animated SVG architecture diagrams, photo galleries and filterable project cards. All content lives in a single data file, the 3D scene is code-split and pauses off-screen, respects reduced-motion settings, and deploys to Vercel on every push.",
    role: "Design, development and deployment.",
  },
];

export const TECH_STACK = [
  { group: "Languages", items: ["C#", "TypeScript", "JavaScript", "Python", "Go", "Java", "C", "SQL", "Dart"] },
  { group: "Backend", items: [".NET / ASP.NET Core", ".NET Aspire", "Node.js", "Express", "FluentValidation"] },
  { group: "Data & Messaging", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Firebase"] },
  { group: "Cloud & DevOps", items: ["Azure (AKS, Key Vault)", "AWS", "Docker", "Kubernetes", "Helm", "Terraform", "ArgoCD", "Argo Rollouts", "GitHub Actions", "WSO2 Choreo"] },
  { group: "Observability & Quality", items: ["OpenTelemetry", "Prometheus", "Grafana", "Loki", "Tempo", "xUnit", "Testcontainers", "k6", "CodeQL", "Trivy"] },
  { group: "Frontend & Mobile", items: ["React", "React Native", "Flutter", "Tailwind CSS", "Vite", "TanStack Query"] },
  { group: "AI / ML", items: ["LLM APIs", "Prompt Engineering", "Multi-agent systems", "OpenCV", "LSTM", "Machine Learning"] },
];

export const EDUCATION = [
  {
    school: "University of Peradeniya",
    program: "BSc Eng(Hons) Computer Engineering",
    period: "2022 – 2026",
    extra: "Graduated",
  },
  {
    school: "D.S. Senanayake College, Colombo 7",
    program: "GCE Advanced Level",
    period: "2011 – 2020",
    extra: "3 A passes",
  },
];

export const CERTIFICATIONS = [
  {
    title: "WSO2 Certified Identity Server Developer - V7",
    issuer: "WSO2",
    year: "2026",
    href: "https://certification.wso2.com/certificate/CID-05606523/a09VM00000JWMosYAH",
  },
  {
    title: "WSO2 Certified Identity Server Practitioner - V7",
    issuer: "WSO2",
    year: "2026",
    href: "https://certification.wso2.com/certificate/CID-05606523/a09VM00000JWPRlYAP",
  },
  {
    title: "DevOps and AI on AWS: Upgrading Apps with Generative AI",
    issuer: "AWS",
    year: "2026",
    href: "https://www.coursera.org/account/accomplishments/verify/QHZVS7JJHQOZ",
  },
  {
    title: "Microsoft Azure Machine Learning for Data Scientists",
    issuer: "Microsoft",
    year: "2025",
    href: "https://www.coursera.org/account/accomplishments/verify/YTHKREPDOYNL",
  },
  {
    title: "Advanced React",
    issuer: "Meta",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/0HKMJ1DHVMYJ",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/DZXSRXTXNDZV",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    year: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/BGWCTRVBIQXZ",
  },
  {
    title: "Certification Program in Microsoft",
    issuer: "SLIIT",
    year: "2021",
    href: "https://www.linkedin.com/in/yasiru-edirimanna/overlay/Certifications/30661056/treasury/?profileId=ACoAAC2LquoBufcFDlPejK0Cic1RQ7GZMMw6NBI",
  },
  {
    title: "Spoken English for Professional Excellence",
    issuer: "Aquinas",
    year: "2021",
    href: "https://www.linkedin.com/in/yasiru-edirimanna/overlay/Certifications/29999680/treasury/?profileId=ACoAAC2LquoBufcFDlPejK0Cic1RQ7GZMMw6NBI",
  },
];

export const ACTIVITIES = [
  {
    title: "Coding & Project Competitions",
    image: "/images/activities/competitions.jpg",
    points: [
      "IESL UIY: Top 10 Projects (2025)",
      "I-TO-I UPAA–USA Innovation Award, 3rd place (2025)",
      "PEBO showcased at Techno 2025 & Engex 2025",
      "ACES Coders V11.0 & PreCoders V11.0 (2024)",
    ],
  },
  {
    title: "University Air Rifle Team",
    image: "/images/activities/air-rifle.jpg",
    points: [
      "SLSSSA Air Rifle & Pistol Shooting Competition (2023, 2024)",
      "Magam Open Shooting Championship (2023, 2024)",
    ],
  },
];
