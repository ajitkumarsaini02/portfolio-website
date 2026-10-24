export const personalInfo = {
  name: "Ajit Kumar Saini",
  role: "Full-Stack Developer (MERN) & Competitive Programmer",
  tagline: "Building scalable full-stack web applications & solving complex DSA challenges.",
  location: "Ghaziabad, Uttar Pradesh, India",
  college: "ABES Engineering College, Ghaziabad (AKTU)",
  degree: "B.Tech in Computer Science & Engineering",
  cgpa: "8.48 / 10",
  phone: "+91-9455599322",
  email: "ajitkumarsaini02@gmail.com",
  resumePath: "/assets/Ajit_Kumar_Saini_Resume.pdf",
  photoPath: "/assets/photo.png",
  socials: {
    github: "https://github.com/ajitkumarsaini02",
    linkedin: "https://www.linkedin.com/in/ajit-kumar-saini-74340932b/",
    leetcode: "https://leetcode.com/u/ajitkumarsaini02",
    codechef: "https://www.codechef.com/users/ajitsaini94",
    portfolio: "https://ajit-kumar-saini-portfolio.netlify.app/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/ajitkumarsaini02?tab=activity"
  },
  roles: [
    "Full-Stack MERN Developer",
    "React.js Specialist",
    "DSA & Competitive Programmer",
    "Open Source Contributor (GSSoC)"
  ],
  bio: [
    "I am a Computer Science undergraduate (B.Tech, CGPA 8.48) with hands-on experience building full-stack MERN applications and high-performance, responsive front-end projects.",
    "My key full-stack creation is CodeTrack — a DSA tracking platform syncing data from 5 coding platforms through a JWT-secured REST API. I have solved 500+ LeetCode problems (Contest Rating: 1527, Peak: 1577), achieved 2-Star status on CodeChef, and contributed 10+ pull requests to open-source organizations in GSSoC 2026.",
    "I am actively looking for software engineering internships and developer opportunities where I can build reliable, scalable web applications."
  ]
};

export const stats = [
  { label: "LeetCode Problems", value: 502, suffix: "+", icon: "Code", highlight: "Contest Rating 1527" },
  { label: "CodeChef Rating", value: 1408, suffix: "", icon: "Crown", highlight: "2★ Coder (Peak 1461)" },
  { label: "B.Tech CGPA", value: 8.48, isFloat: true, suffix: "/10", icon: "GraduationCap", highlight: "ABES Engg College" },
  { label: "Open Source PRs", value: 10, suffix: "+", icon: "GitPullRequest", highlight: "GSSoC 2026 Contributor" }
];

export const skillCategories = [
  {
    category: "Web & Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 92, tag: "Core" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Language" },
      { name: "HTML5 & CSS3", level: 95, tag: "Structure" },
      { name: "DOM API & State", level: 88, tag: "Frontend" },
      { name: "Responsive UI & Animations", level: 92, tag: "Design" },
      { name: "LocalStorage & Web APIs", level: 90, tag: "Browser" }
    ]
  },
  {
    category: "Backend & Database",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 86, tag: "Runtime" },
      { name: "Express.js", level: 88, tag: "Backend Framework" },
      { name: "MongoDB & Mongoose", level: 85, tag: "NoSQL DB" },
      { name: "RESTful API Design", level: 90, tag: "Architecture" },
      { name: "JWT & Bcrypt Auth", level: 88, tag: "Security" },
      { name: "MySQL", level: 84, tag: "Relational DB" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Binary",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 92, tag: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", level: 90, tag: "Paradigm" },
      { name: "Database Management Systems (DBMS)", level: 86, tag: "Data" },
      { name: "Operating Systems (OS)", level: 85, tag: "Core" },
      { name: "Computer Networks (CN)", level: 85, tag: "Core" }
    ]
  },
  {
    category: "Languages & Tools",
    icon: "Wrench",
    skills: [
      { name: "C++", level: 92, tag: "DSA & CP" },
      { name: "Java", level: 86, tag: "OOP" },
      { name: "Python", level: 82, tag: "Scripting" },
      { name: "C", level: 88, tag: "Low-level" },
      { name: "Git & GitHub", level: 92, tag: "VCS" },
      { name: "VS Code & Chrome DevTools", level: 94, tag: "Tooling" },
      { name: "Vite, Netlify, Vercel, Render", level: 90, tag: "Deployment" }
    ]
  }
];

export const experience = [
  {
    role: "Open Source Contributor",
    organization: "GSSoC 2026 (GirlScript Summer of Code)",
    period: "2024 — Present",
    type: "Remote",
    badge: "Open Source",
    points: [
      "Submitted 10+ pull requests to open-source GitHub repositories, resolving bugs and improving overall code quality.",
      "Implemented responsive UI features, dark mode toggling, DOM optimizations, and accessibility (a11y) improvements across 5+ repositories.",
      "Reduced reported issues by 30% by collaborating with maintainers on web performance improvements and modular JavaScript architecture."
    ]
  }
];

export const projects = [
  {
    id: "codetrack",
    title: "CodeTrack",
    badge: "Featured MERN Stack",
    featured: true,
    category: "fullstack",
    icon: "Cpu",
    description:
      "A comprehensive full-stack MERN dashboard that tracks user ratings, solved problem counts, and daily streaks across 5 major coding platforms (LeetCode, Codeforces, CodeChef, GeeksforGeeks, GitHub), eliminating manual site-by-site checks.",
    bullets: [
      "Secured Node.js and Express 5 REST API with JWT authentication, bcrypt hashing (12 rounds), Helmet security headers, and rate limiting across 10 MongoDB data models.",
      "Engineered parallel sync architecture for 5 platform APIs with timeouts and fallback scrapers so external platform downtime never breaks a user's dashboard.",
      "Curated 2,500+ problems into an interactive 22-phase, 116-topic DSA roadmap with live progress tracking and leaderboard.",
      "Live deployment on Vercel (React Frontend), Render (Node Backend), and MongoDB Atlas."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth", "Vercel", "Render"],
    links: {
      github: "https://github.com/ajitkumarsaini02",
      demo: "https://github.com/ajitkumarsaini02"
    }
  },
  {
    id: "taskmaster",
    title: "TaskMaster",
    badge: "Web App",
    featured: false,
    category: "frontend",
    icon: "CheckSquare",
    description:
      "A zero-backend productivity and task management web application that stores all state and preferences locally with high performance and zero external dependencies.",
    bullets: [
      "Implemented 5+ core features: instant real-time filtering, keyword search, dark/light theme persistence, priority-based sorting, and custom tag categorization.",
      "Improved maintainability by 40% by structuring the codebase into modular JavaScript modules with clean separation of concerns.",
      "Deployed on Netlify and achieved 90+ Google Lighthouse performance scores on mobile and desktop devices."
    ],
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage", "Netlify"],
    links: {
      github: "https://github.com/ajitkumarsaini02/taskmaster",
      demo: "https://taskmaster-ajit.netlify.app"
    }
  },
  {
    id: "portfolio",
    title: "Personal Portfolio v2",
    badge: "React & Vite",
    featured: false,
    category: "frontend",
    icon: "Sparkles",
    description:
      "High-performance personal developer portfolio re-engineered into modern React with Vite, custom interactive canvas particles, live coding stats cards, theme switching, and smooth micro-interactions.",
    bullets: [
      "Built with reusable React components, custom hooks, and zero heavy bloated UI libraries.",
      "Maintains 60fps across canvas particle animations, dynamic counters, and interactive coding activity visualizers.",
      "Integrated instant contact system and direct resume downloads."
    ],
    tech: ["React.js", "Vite", "Modern CSS", "HTML5 Canvas", "Lucide Icons"],
    links: {
      github: "https://github.com/ajitkumarsaini02/portfolio-website",
      demo: "https://ajit-kumar-saini-portfolio.netlify.app/"
    }
  },
  {
    id: "echostream",
    title: "EchoStream Media Player",
    badge: "Audio App",
    featured: false,
    category: "frontend",
    icon: "Music",
    description:
      "Modern multimedia player web application featuring complete audio controls, track timeline seeking, playlist queueing, and responsive UI design.",
    bullets: [
      "Engineered responsive player controls utilizing HTML5 Web Audio API.",
      "Includes playlist state management, volume slider, timeline scrubber, and keyboard shortcuts.",
      "Responsive layout optimized across smartphone, tablet, and desktop viewports."
    ],
    tech: ["JavaScript", "HTML5 Audio API", "CSS3 Flexbox", "Netlify"],
    links: {
      github: "https://github.com/ajitkumarsaini02/EchoStream-Media-Player",
      demo: "https://echostream-media-player.netlify.app/"
    }
  }
];

export const achievements = [
  {
    title: "500+ LeetCode Solved",
    metric: "Rating 1527 (Peak 1577)",
    icon: "Trophy",
    desc: "Solved 500+ DSA problems covering Arrays, Graphs, DP, Trees, and Strings with 100 Days Streak Badge."
  },
  {
    title: "CodeChef 2-Star (1408)",
    metric: "Peak 1461 | 600+ Solved",
    icon: "Crown",
    desc: "Achieved Division 3 2-Star Coder status with active participation in global algorithmic challenges."
  },
  {
    title: "20+ Contests & Hackathons",
    metric: "Competitive Programming",
    icon: "Flame",
    desc: "Regularly competed in timed algorithmic rounds, honing fast problem formulation and debugging skills."
  },
  {
    title: "GSSoC 2026 Contributor",
    metric: "10+ Merged Pull Requests",
    icon: "GitPullRequest",
    desc: "Active open-source contributor improving accessibility, dark mode, and UI architecture in open source."
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "ABES Engineering College, Ghaziabad (AKTU)",
    period: "2024 — Present",
    score: "CGPA: 8.48 / 10",
    details: "Key focus on Full Stack Development, Data Structures & Algorithms, Database Systems, and Operating Systems."
  },
  {
    degree: "Senior Secondary (Class 12 – UP Board)",
    institution: "Sushil Poswal Inter College, Amroha",
    period: "Completed Apr 2023",
    score: "Percentage: 77.4%",
    details: "Science stream with Mathematics, Physics, and Chemistry."
  },
  {
    degree: "High School (Class 10 – UP Board)",
    institution: "L.F. Academy Inter College, Sambhal",
    period: "Completed Jul 2021",
    score: "Percentage: 79.16%",
    details: "Strong foundational academics with distinction in Science and Mathematics."
  }
];

export const certifications = [
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Forage",
    year: "2026",
    icon: "Briefcase"
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy / Python Institute",
    year: "2026",
    icon: "Code2"
  },
  {
    title: "India AI Impact Buildathon",
    issuer: "GUVI x HCL",
    year: "2026",
    icon: "Award"
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    icon: "Cloud"
  },
  {
    title: "Learn C++ Programming – Beginner to Advance",
    issuer: "Udemy",
    year: "2025",
    icon: "BookOpen"
  }
];

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "@ajitkumarsaini02",
    stats: "500+ Solved • Rating 1527",
    url: "https://leetcode.com/u/ajitkumarsaini02",
    icon: "Code"
  },
  {
    name: "GitHub",
    handle: "@ajitkumarsaini02",
    stats: "10+ Open Source PRs • MERN Projects",
    url: "https://github.com/ajitkumarsaini02",
    icon: "GitBranch"
  },
  {
    name: "CodeChef",
    handle: "@ajitsaini94",
    stats: "2★ Coder • Rating 1408",
    url: "https://www.codechef.com/users/ajitsaini94",
    icon: "Crown"
  },
  {
    name: "LinkedIn",
    handle: "ajit-kumar-saini-74340932b",
    stats: "Professional Network",
    url: "https://www.linkedin.com/in/ajit-kumar-saini-74340932b/",
    icon: "Linkedin"
  },
  {
    name: "GeeksforGeeks",
    handle: "@ajitkumarsaini02",
    stats: "Practice & Articles",
    url: "https://www.geeksforgeeks.org/profile/ajitkumarsaini02?tab=activity",
    icon: "BookMarked"
  }
];

export const faqs = [
  {
    q: "What technologies and frameworks do you work with?",
    a: "I work with the full MERN stack (React.js, Node.js, Express.js, MongoDB), along with C++, Java, Python, JavaScript (ES6+), HTML5, CSS3, REST APIs, Git, and SQL/MySQL."
  },
  {
    q: "Tell me more about your CodeTrack MERN project.",
    a: "CodeTrack is a full-stack platform built with React, Node.js, Express, and MongoDB. It aggregates user statistics, rating progressions, solved problem counts, and streaks across 5 platforms (LeetCode, CodeChef, Codeforces, GFG, GitHub) with resilient fallback scrapers and JWT security."
  },
  {
    q: "What are your competitive programming milestones?",
    a: "I have solved 500+ problems on LeetCode with a contest rating of 1527 (Peak 1577) and earned the 100 Days Badge. On CodeChef, I am a 2-Star coder (Rating 1408, Peak 1461)."
  },
  {
    q: "Are you available for software engineering internships?",
    a: "Yes! I am actively looking for software development, full-stack, and frontend internships where I can contribute to production-grade applications."
  }
];
