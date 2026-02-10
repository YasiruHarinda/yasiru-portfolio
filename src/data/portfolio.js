export const PROFILE = {
  name: "Yasiru Harinda Edirimanna",
  title: "Computer Engineering Undergraduate",
  location: "Colombo, Sri Lanka",
  phone: "+94 768361089",
  email: "harindayasiru@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasiru-edirimanna",
  github: "https://github.com/YasiruHarinda",
  address:"156/D, Remuna, Anuguruwathota",
  photo: "/images/profile.jpg",
  summary:
    "Computer Engineering undergraduate at the University of Peradeniya with hands-on experience building AI-driven systems, embedded platforms, and full-stack web applications. I’ve delivered real-time dashboards, ML prototypes, and an award-winning desk assistant robot (PEBO) integrating voice interaction, emotion detection, and cloud-backed services. I enjoy turning messy requirements into clean, scalable solutions combining Python, React, Flutter, MongoDB, and AWS/Azure with solid engineering practices. I’m seeking an engineering internship where I can contribute to production-ready software, learn from experienced teams, and ship features that create measurable impact.",
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
    period: "2011-2020",
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
      {
        label: "GitHub",
        href: "https://github.com/cepdnaclk/e20-3yp-P-E-BO-Desk-Companion",
      },
      {
        label: "Site",
        href: "https://cepdnaclk.github.io/e20-3yp-P-E-BO-Desk-Companion/",
      },
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
      "An interactive AI desk assistant offering emotional support, entertainment, task management, and voice assistance.",
    features: [
      "Natural conversation with PEBO",
      "Intelligent, context-aware responses to user questions",
      "Emotion-aware responses using facial expression recognition",
      "Task reminders and music playback",
      "Play Songs",
      "Compact desk-friendly design for home, office, or classrooms",
    ],
  },


  {
    title: "Mona Dashboard – Factory Production Monitoring System",
    year: "2024",
    type: "Group Project",
    image: "/images/projects/mona.jpg",
    links: [{ label: "GitHub", href: "https://github.com/cepdnaclk/e20-co227-MONA-Dashboard" },
      { label: "Site", href: "https://cepdnaclk.github.io/e20-co227-MONA-Dashboard/" },
    ],
    highlights: [],
    tech: ["MongoDB", "React", "Node.js"],
    role:
      "Designed dashboard UI, built real-time visualizations, integrated frontend with backend services for live updates and alerts.",
    description:
      "Real-time production monitoring system for  provide live updates on machine performance, send emergency alerts in cases of issues such as stuck parts, and maintain a historical record of production data.",
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
      "The Income and Asset Tracking mobile application is a Flutter-based app designed to help users record and manage their income, and assets in one place. It provides clear financial insights through visual graphs and summaries, enabling users to easily understand their spending patterns and overall financial status. The app is built using Flutter to ensure a smooth, responsive, and cross-platform user experience.",
  },
  {
    title: "AI-Driven Automated Feedback & Tutoring System (Higher Education)",
    year: "2025–present",
    type: "Group Project",
    image: "/images/projects/ai-tutoring.jpg",
    links: [{ label: "GitHub", href: "https://github.com/bhagyaseela/ai-feedback-tutoring-system" }],
    highlights: [],
    tech: ["Python", "LLM APIs", "Moodle"],
    role:
      "Conducted literature review, defined requirements, designed plugin workflow for personalized feedback generation using AI.",
    description:
      "This is my final year project. It is an AI-driven feedback and tutoring system for higher education, built as a Moodle LMS plugin. It uses a multi-agent AI engine to deliver fast, context-aware feedback and adaptive hints based on student performance.",
  },
  {
  title: "Personal Portfolio Website",
  year: "2026",
  type: "Individual Project",
  image: "/images/projects/portfolio.jpg",
  links: [
    { label: "GitHub", href: "https://github.com/YasiruHarinda/yasiru-portfolio" },
    { label: "Site", href: "https://yasiru-portfolio-blj2.vercel.app/" },
  ],
  highlights: [
    "Deployed on Vercel with CI/CD via GitHub",
    "Single-page layout with smooth scroll navigation",
    "Animated sections and responsive UI",
  ],
  tech: ["React", "Vite", "TailwindCSS", "Framer Motion", "Lenis"],
  role:
    "Designed and built the full UI, implemented section-based navigation, animations, and responsive layout, and deployed the site on Vercel.",
  description:
    "A modern one-page portfolio to showcase projects, skills, certifications, and activities with an attractive UI and smooth interactions.",
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

export const CERTIFICATIONS= [
  "DevOps and AI on AWS:Upgrading Apps with Generative AI – AWS (2026)",
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
    image: "/images/activities/competitions.jpg",
    points: [
      "ACES Coders V 11.0 (2024)",
      "ACES PreCoders V 11.0 (2024)",
      "IESL UIY – Top 10 Projects (2025)",
      "I-TO-I – UPAA–USA Innovation Award (3rd Place) (2025)",
      "PEBO showcased at Techno 2025 & Engex 2025",
    ],
  },
 
  
];

export const SKILLS = [
   "Python",
  "C",
  "Java",
  "JavaScript",
  "LLMs",
  "Prompt Engineering",
  "Machine Learning",
  "Embedded Systems",
  "React",
  "Flutter",
  "UI/UX Design",
  "AWS",
  "Azure",
  "Firebase",
  "Node.js",
  "SQL",
  "MongoDB",
  "Git",
  "MATLAB",
  "Teamwork",
  "Problem-Solving",
  "Communication",
  
];
