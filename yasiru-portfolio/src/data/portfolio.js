export const PROFILE = {
  name: "Yasiru Edirimanna",
  title: "Computer Engineering Undergraduate",
  location: "Colombo, Sri Lanka",
  phone: "+94 768361089",
  email: "harindayasiru@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasiru-edirimanna",
  github: "https://github.com/YasiruHarinda",
  summary:
    "Computer Engineering undergraduate with hands-on experience in AI-driven systems, embedded platforms, and full-stack applications. Built award-winning robotics and real-time systems using Python, React, Flutter, and cloud services.",
};

export const EDUCATION = [
  {
    school: "University of Peradeniya",
    program: "BScEngHons specializing in Computer Engineering",
    period: "2022 – present",
    extra: "GPA: 3.40/4.00",
  },
  {
    school: "D.S. Senanayake College, Colombo 7",
    program: "GCE A/L",
    period: "2020",
    extra: "A/L: 3 A’s",
  },
];

export const PROJECTS = [
  {
    title: "PEBO – AI Desk Assistant Robot",
    year: "2025",
    type: "Group Project",
    image: "/images/projects/pebo.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/cepdnaclk/e20-3yp-P-E-BO-Desk-Companion" },
      { label: "Demo", href: "https://cepdnaclk.github.io/e20-3yp-P-E-BO-Desk-Companion/" },
    ],
    highlights: [
      "Top 10 IESL Undergraduate Project (2025)",
      "I-TO-I Innovation Competition — 3rd Place (UPAA–USA)",
      "Showcased at Techno 2025 & Engex 2025",
    ],
    tech: ["Raspberry Pi 4", "Python", "AWS", "Gemini API", "OpenCV", "AWS Rekognition"],
    role:
      "Built the voice assistant pipeline (speech-to-text + text-to-speech), supported emotion detection and user recognition integration, and contributed to AWS connectivity.",
    description:
      "An interactive desk assistant robot offering emotional support, entertainment, task management, and voice assistance.",
  },
  {
    title: "Asset & Income Tracker Mobile Application",
    year: "2024",
    type: "Individual Project",
    image: "/images/projects/income.jpg",
    links: [{ label: "GitHub", href: "https://github.com/YasiruHarinda/IncomeDashboard" }],
    highlights: [],
    tech: ["Flutter", "Dart", "Firebase", "BLoC"],
    role:
      "Designed and developed the complete app, implemented state management, integrated Firebase auth + cloud storage, and built responsive UI.",
    description:
      "Tracks income and assets with clear insights and graphs to understand spending patterns.",
  },
  {
    title: "Mona Dashboard – Factory Production Monitoring System",
    year: "2024",
    type: "Group Project",
    image: "/images/projects/mona.jpg",
    links: [{ label: "GitHub", href: "https://github.com/cepdnaclk/e20-co227-MONA-Dashboard" }],
    highlights: [],
    tech: ["MongoDB", "React", "Node.js"],
    role:
      "Designed dashboard UI, built real-time visualizations, integrated frontend with backend services for live updates and alerts.",
    description:
      "Real-time production monitoring system for plastic toy manufacturing to detect disruptions and respond quickly.",
  },
  {
    title: "AI-Driven Automated Feedback & Tutoring System (Higher Education)",
    year: "2025–present",
    type: "Group Project",
    image: "/images/projects/ai-tutoring.jpg",
    links: [],
    highlights: [],
    tech: ["Python", "LLM APIs", "Moodle"],
    role:
      "Conducted literature review, defined requirements, designed plugin workflow for personalized feedback generation using AI.",
    description:
      "Plugin concept for scalable, context-aware feedback and tutoring in higher education.",
  },
  {
    title: "Air Quality Analyser – Hybrid LSTM & Fuzzy Logic Model",
    year: "2025",
    type: "Group Project",
    image: "/images/projects/air-quality.jpg",
    links: [{ label: "GitHub", href: "https://github.com/cepdnaclk/e20-co542-Air-Quality-Analyser" }],
    highlights: [],
    tech: ["Python", "LSTM", "Fuzzy Logic"],
    role:
      "Designed the forecasting approach and defined model inputs/outputs and evaluation steps.",
    description:
      "Hybrid forecasting model combining LSTM with fuzzy logic to improve air quality prediction accuracy.",
  },
];

export const EXPERIENCE = [
  {
    title: "Casual Instructor – CO226 (Database Systems)",
    org: "Department of Computer Engineering, University of Peradeniya",
    year: "2024",
  },
];

export const CERTS = [
  "Introduction to DevOps – IBM (2026)",
  "Microsoft Azure Machine Learning for Data Scientists – Microsoft (2025)",
  "Advanced React – Meta (2024)",
  "React Basics – Meta (2024)",
  "Databases and SQL for Data Science with Python – IBM (2024)",
  "Certification Program in Microsoft – SLIIT (2021)",
  "Spoken English for Professional Excellence – Aquinas (2021)",
];

export const ACTIVITIES = [
  {
    title: "University Air Rifle Team",
    image: "/images/activities/air-rifle.jpg",
    points: [
      "SLSSSA Air Rifle and Pistol Shooting Competition (2023, 2024)",
      "Magam Open Shooting Championship (2023)",
    ],
  },
  {
    title: "Coding & Project Competitions",
    image: "/images/activities/rotaract.jpg",
    points: [
      "ACES Coders V 11.0 (2024), ACES PreCoders V 11.0 (2024)",
      "IESL UIY – Top 10 Projects (2025)",
      "I-TO-I – UPAA–USA Innovation Award (3rd Place) (2025)",
      "PEBO showcased at Techno 2025 & Engex 2025",
    ],
  },
  {
    title: "Other",
    image: "/images/activities/rotaract.jpg",
    points: [
      "Mathematics Instructor (O/L) – Arunalla Educational Program",
      "Member, Rotaract Club (2022–2025)",
    ],
  },
];

export const SKILLS = [
  "Python, C, Java, JavaScript",
  "LLMs, Prompt Engineering, ML, Embedded",
  "React, Flutter, UI/UX Design",
  "AWS, Azure, Firebase, Node.js, SQL, MongoDB",
  "Teamwork, Problem-Solving, Communication",
];
