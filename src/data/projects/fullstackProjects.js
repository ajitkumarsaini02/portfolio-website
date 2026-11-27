export const fullstackProjects = [
  {
    id: "retail-inventory",
    title: "Retail Inventory & Supply Chain ERP",
    badge: "Full-Stack ERP",
    featured: true,
    category: "fullstack",
    icon: "Boxes",
    image: "/assets/projects/retail-inventory.png",
    description: "An enterprise-grade Retail Inventory and Supply Chain ERP system featuring multi-hub warehouse telemetry, role-based access control, supplier procurement pipelines, and automated stock replenishment.",
    bullets: [
      "Engineered Spring Boot REST backend with stateless JWT Spring Security and granular Role-Based Access Control (Admin & Operator workspaces).",
      "Built multi-hub warehouse stock telemetry with real-time threshold reorder alerts, SKU catalog CRUD, and CSV report export.",
      "Automated end-to-end sales order fulfillment lifecycle and procurement purchase orders with direct warehouse inventory synchronization.",
      "Crafted high-performance responsive UI in React 19 + Vite + TailwindCSS v4 with dual-theme engine and instant Ctrl+K command palette.",
    ],
    tech: ["Spring Boot", "Java 17", "Spring Security", "MySQL", "React 19", "Vite", "TailwindCSS v4", "JWT Auth", "REST API"],
    links: {
      github: "https://github.com/ajitkumarsaini02/retail-inventory-management-system",
      demo: "https://rims-erp.vercel.app/login",
    },
  },
  {
    id: "codetrack",
    title: "CodeTrack",
    badge: "MERN Stack",
    featured: false,
    category: "fullstack",
    icon: "Cpu",
    image: "/assets/projects/codetrack.png",
    description: "A comprehensive full-stack MERN dashboard that syncs user ratings, solved problem counts, and daily streaks across LeetCode, Codeforces, CodeChef, GFG, and GitHub in real time.",
    bullets: [
      "Secured REST API with JWT auth, bcrypt hashing, Helmet, and rate limiting across 10 MongoDB models.",
      "Engineered parallel sync architecture for 5 platform APIs with timeouts and fallback scrapers.",
      "Curated 2,500+ problems into an interactive 22-phase, 116-topic DSA roadmap with live progress tracking.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth", "Render"],
    links: {
      github: "https://github.com/ajitkumarsaini02/codetrack",
      demo: "https://codetrack-rho.vercel.app",
    },
  },
];