// =============================================================================
// portfolio.ts — Single source of truth for ALL portfolio content
// Edit this file to update your site. Never touch layout/component files.
// =============================================================================

export const personal = {
  name: "Yash Saini",
  firstName: "Yash",
  lastName: "Saini",
  initials: "YS",
  title: "MERN Stack Developer",
  subtitle: "React / Node.js Engineer",
  tagline: "Software developer with nearly 3 years of experience building scalable web applications. Improved application speed by 20–30% while delivering features used by 200K+ users.",
  location: "Indore, MP, INDIA",
  email: "er.saini.yash@gmail.com",
  phone: "+91 62612-14901",
  resumeUrl: "/Yash_Saini_Resume.pdf",
  avatar: "/avatar.jpg",
  availableForWork: true,
  socials: {
    github: "https://github.com/YashSaini15",
    linkedin: "https://linkedin.com/in/sainiyash",
    email: "mailto:er.saini.yash@gmail.com",
    phone: "tel:+916261214901",
  },
  ticker: [
    "MERN Stack Developer | React / Node.js Engineer",
    "Building scalable web applications at Bestpeers",
    "Serving 200K+ users with high-performance dashboards",
    "Open-source contributor @ Renovate (18K+ ★)",
    "20–30% performance boost delivered across production apps",
    "Leveraging AI tools to ship faster & smarter 🤖",
    "250+ DSA problems solved",
    "Indore, MP, INDIA 📍",
  ],
};

export const about = {
  bio: `Software developer with nearly 3 years of experience building scalable web applications. Improved application speed by 20–30% while delivering features used by 200K+ users. Experienced in API integration, secure login systems with JWT & RBAC, state management with Redux Toolkit, and frontend optimization. Open-source contributor to the Renovate project with maintainer-reviewed PRs.`,
};

export const stats = [
  { value: 30, suffix: "%", label: "Performance Improvement" },
  { value: 200, suffix: "K+", label: "Users Supported" },
  { value: 3, suffix: " yrs", label: "Professional Experience" },
  { value: 20, suffix: "%", label: "UI Load Speed Boost" },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "ReactJS", "NextJS", "JavaScript (ES6+)", "TypeScript",
      "Redux Toolkit", "Tailwind CSS", "Material UI", "PrimeReact",
      "React Bootstrap", "HTML5", "CSS3", "Webpack", "Babel",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "NodeJS", "ExpressJS", "RESTful APIs", "JWT Authentication", "WebSocket",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB"],
  },
  {
    category: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "Unit Testing", "Code Review"],
  },
  {
    category: "Auth & Security",
    skills: ["JWT Authentication", "Google SSO"],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git", "GitHub", "GitLab", "Bitbucket",
      "GitHub Actions", "Docker", "AWS Lambda", "AWS S3",
      "CI/CD", "Vercel", "Netlify",
    ],
  },
  {
    category: "Tools",
    skills: [
      "VS Code", "Postman", "Jira", "Figma", "Confluence",
    ],
  },
  {
    category: "Methodology",
    skills: ["Agile", "SCRUM", "Code Review"],
  },
  {
    category: "AI Tools",
    skills: ["Cursor", "Claude", "ChatGPT", "GitHub Copilot"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Bestpeers Infosystem Pvt Ltd",
    location: "Indore, INDIA",
    period: "Oct 2023 – Present",
    type: "work" as const,
    bullets: [
      "Engineered scalable web applications using ReactJS, NextJS, NodeJS, and ExpressJS, improving application performance by 30%.",
      "Combined RESTful APIs with JWT-based authentication, Redux Toolkit state management, and MongoDB-backed modules.",
      "Implemented accessible and responsive UI systems with consistent cross-browser compatibility across production environments.",
      "Collaborated with cross-functional teams to deliver production-ready features within Agile workflows.",
    ],
    tags: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "MongoDB", "Redux Toolkit", "JWT Auth"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Armory Inventory Management",
    role: "Full Stack Developer",
    description:
      "Enterprise inventory management platform featuring secure backend APIs with RBAC-based protected workflows, streamlined core modules, and reusable UI components.",
    url: "https://armoryinventorymanagement.com/",
    codeUrl: "",
    tags: ["NextJS", "NodeJS", "ExpressJS", "MongoDB", "Redux Toolkit"],
    highlights: [
      "Streamlined core armory modules, increasing application performance by 30%",
      "Added secure backend APIs with RBAC-based protected workflows",
      "Developed reusable UI components and shared utilities, reducing development time by 25%",
    ],
    accent: "from-blue-500 via-sky-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Aviation Week",
    role: "Frontend Developer",
    description:
      "High-density aviation analytics dashboard visualizing 10K+ data points with interactive Highcharts and accessible multi-screen UI layouts.",
    url: "https://aviationweek.com/",
    codeUrl: "",
    tags: ["ReactJS", "Redux Toolkit", "Material UI", "Highcharts"],
    highlights: [
      "Designed an aviation analytics dashboard for visualizing 10K+ data points",
      "Implemented interactive charting solutions that improved analytical efficiency by 25%",
      "Crafted accessible UI layouts that scaled seamlessly across multiple screen sizes",
    ],
    accent: "from-indigo-500 via-blue-500 to-sky-400",
  },
];

export const achievements = [
  {
    value: 20,
    suffix: "%",
    label: "Increased UI load speed through code splitting & frontend optimization",
    icon: "⚡",
  },
  {
    value: 200,
    suffix: "K+",
    label: "Delivered scalable analytics dashboard supporting 200K+ users",
    icon: "👥",
  },
  {
    value: 30,
    suffix: "%",
    label: "Reduced unauthorized access issues via JWT & RBAC workflows",
    icon: "🛡️",
  },
  {
    value: 25,
    suffix: "%",
    label: "Optimized API & MongoDB data workflows, improving processing efficiency",
    icon: "📈",
  },
  {
    value: 250,
    suffix: "+",
    label: "DSA problems solved on LeetCode, CodeChef & HackerRank",
    icon: "🧠",
  },
];

export const ossContribution = {
  title: "Open-Source Contributor — Renovate (18K+ GitHub Stars)",
  description:
    "Contributed to Renovate by improving LibYears calculation and expanding automated test coverage through maintainer-reviewed PRs.",
  url: "https://github.com/renovatebot/renovate",
};

export const education = {
  degree: {
    title: "Bachelor of Technology in Computer Science Engineering",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) University",
    period: "2019 – 2023",
    grade: "CGPA: 8.29",
    location: "Indore, MP, INDIA",
  },
  certifications: [
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Great Learning",
      date: "Nov 2024",
    },
    {
      title: "Database Management System",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "Oct 2022",
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      date: "July 2022",
    },
    {
      title: "Java & Python Fundamentals",
      issuer: "Tap Academy",
      date: "June 2022",
    },
    {
      title: "Programming in Java",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "Apr 2022",
    },
  ],
};

export const contact = {
  heading: "Let's build something scalable & impactful.",
  subheading:
    "Open to full-time opportunities — remote and on-site. If you're looking for a dedicated MERN stack developer to drive performance and build production-grade features, let's connect.",
  formspreeId: "YOUR_FORMSPREE_ID", // Replace with your Formspree form ID from formspree.io
};

// Terminal easter egg commands
export const terminalCommands: Record<string, string> = {
  whoami:
    "Yash Saini — MERN Stack Developer | React / Node.js Engineer | Indore, MP, INDIA",
  help: "Available commands: whoami, skills, experience, projects, achievements, contact, open-to-work, clear",
  skills:
    "Frontend: ReactJS, NextJS, TypeScript, JavaScript (ES6+), Redux Toolkit, Tailwind CSS, Material UI\nBackend:  NodeJS, ExpressJS, RESTful APIs, JWT Authentication, WebSocket\nDB:       MongoDB, MySQL, PostgreSQL, DynamoDB\nTesting:  Jest, React Testing Library, Unit Testing\nDevOps:   Git, GitHub Actions, Docker, AWS, CI/CD, Vercel",
  experience:
    "Software Developer @ Bestpeers Infosystem Pvt Ltd — Oct 2023–Present\nEngineered scalable web apps with ReactJS, NextJS, NodeJS, ExpressJS, MongoDB (30% perf boost)",
  projects:
    "1. Armory Inventory Management → armoryinventorymanagement.com (NextJS, NodeJS, ExpressJS, MongoDB, Redux Toolkit)\n2. Aviation Week → aviationweek.com (ReactJS, Redux Toolkit, Material UI, Highcharts)",
  achievements:
    "• UI load speed +20% via code splitting & optimization\n• Analytics dashboard supporting 200K+ users\n• JWT auth & RBAC workflows reducing unauthorized access by 30%\n• API & MongoDB workflows efficiency +25%\n• Open-source contributor to Renovate (LibYears calculation & test coverage)",
  contact:
    "📞 Phone:    +91 62612-14901\n📧 Email:    er.saini.yash@gmail.com\n🔗 GitHub:   github.com/YashSaini15\n🔗 LinkedIn: linkedin.com/in/sainiyash",
  "open-to-work": "✅ Yes — available for full-time roles (remote & on-site)",
  clear: "__CLEAR__",
};
