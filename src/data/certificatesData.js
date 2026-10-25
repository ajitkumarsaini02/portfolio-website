/**
 * Verified Certifications Data Source
 * 
 * Contains EXACTLY the 9 approved unique certificates:
 * 1. AWS Academy Graduate – Cloud Foundations (AWS Academy)
 * 2. Python Essentials 1 (Cisco Networking Academy)
 * 3. Python Essentials 2 (Cisco Networking Academy)
 * 4. Exploratory Data Analysis (FutureSkills Prime / NASSCOM)
 * 5. Technology Job Simulation (Deloitte / Forage)
 * 6. Learn C++ Programming – Beginner to Advance: Deep Dive in C++ (Udemy - Abdul Bari)
 * 7. India AI Impact Buildathon – Certificate of Participation (GUVI / HCL)
 * 8. ViCoDathon 2026 – Certificate of Participation (AB Talks)
 * 9. HTML and CSS for Beginners From Basic to Advance (Udemy - Stephen Koel Soren)
 * 
 * All other unapproved certificates, badges, streak graphics, and duplicates have been purged.
 */

export const certificatesData = [
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    issueDate: "12 April 2025",
    duration: "20 hours",
    credentialType: "Professional Certification",
    category: "AI & Cloud",
    featured: true,
    image: "/assets/certificates/aws-cloud-foundations.png",
    badgeImage: "/assets/certificates/aws-cloud-foundations-badge.png",
    verificationUrl: "https://www.credly.com/go/lssyzYjQ",
    highlight: "20 Course Hours • AWS Cloud Architecture & Core Services",
    skills: ["Cloud Architecture", "AWS Core Services", "Security & IAM", "Compute & S3", "Cloud Economics"],
    description: "Comprehensive 20-hour foundational curriculum in cloud architecture, AWS core compute and storage services, identity and security compliance, and cloud economics."
  },
  {
    id: "cisco-python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "7 February 2026",
    duration: null,
    credentialType: "Certificate of Completion",
    category: "Programming",
    featured: true,
    image: "/assets/certificates/cisco-python-essentials-1.png",
    badgeImage: "/assets/certificates/cisco-python-essentials-1-badge.png",
    verificationUrl: null,
    highlight: "Core Algorithmic Logic & Python Syntax",
    skills: ["Python Core", "Data Types & Variables", "Control Flow", "Functions", "Algorithmic Thinking"],
    description: "Official Certificate of Completion awarded through ABES Engineering College via Cisco Networking Academy and Python Institute, certifying mastery in foundational Python programming constructs and logic."
  },
  {
    id: "cisco-python-essentials-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    issueDate: "21 February 2026",
    duration: null,
    credentialType: "Certificate of Completion",
    category: "Programming",
    featured: true,
    image: "/assets/certificates/cisco-python-essentials-2.png",
    verificationUrl: null,
    highlight: "Object-Oriented Programming & Stream I/O",
    skills: ["OOP in Python", "Custom Exceptions", "Modules & Packages", "File Streams", "Generators"],
    description: "Advanced Python certification offered through ABES Engineering College via Cisco Networking Academy & Python Institute, covering object-oriented system design, packaging, and stream operations."
  },
  {
    id: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    issuer: "FutureSkills Prime / NASSCOM",
    issueDate: "20 August 2026",
    duration: null,
    credentialType: "Professional Certification",
    category: "Data Analytics",
    featured: true,
    image: "/assets/certificates/exploratory-data-analysis.png",
    verificationUrl: null,
    highlight: "Government & NASSCOM Accredited Data Curriculum",
    skills: ["Data Wrangling", "Statistical Inference", "Distribution Analysis", "Outlier Detection", "Pandas & NumPy"],
    description: "Government-recognized technical certification by NASSCOM and FutureSkills Prime validating competencies in data cleaning, exploratory visual analysis, statistical testing, and actionable insight extraction."
  },
  {
    id: "deloitte-technology-simulation",
    title: "Technology Job Simulation",
    issuer: "Deloitte / Forage",
    issueDate: "29 March 2026",
    duration: "Virtual Simulation",
    credentialType: "Virtual Job Simulation",
    isJobSimulation: true,
    simulationDisclaimer: "Virtual Job Simulation Experience — Not an employment or commercial engagement with Deloitte.",
    category: "Data Analytics",
    featured: true,
    image: "/assets/certificates/deloitte-technology-simulation.png",
    verificationUrl: null,
    credentialId: "Enrolment: YcWPKoQoJ23CjEucT",
    highlight: "Practical Coding & Development Tasks",
    skills: ["Software Engineering", "Coding & Development", "Technology Consulting", "Client Delivery Modeling"],
    description: "Completed practical job simulation tasks in enterprise software coding and development structured by Deloitte consultants on Forage (Completed 29 March 2026)."
  },
  {
    id: "udemy-cpp-deep-dive",
    title: "Learn C++ Programming – Beginner to Advance: Deep Dive in C++",
    issuer: "Udemy",
    instructor: "Abdul Bari",
    issueDate: "5 September 2025",
    duration: "30.5 hours",
    credentialType: "Course Certificate of Completion",
    category: "Programming",
    featured: true,
    image: "/assets/certificates/udemy-cpp-deep-dive.png",
    verificationUrl: "https://www.udemy.com/certificate/UC-f7a7e0a1-30ed-4302-992e-9ee586c74622/",
    credentialId: "UC-f7a7e0a1-30ed-4302-992e-9ee586c74622",
    highlight: "30.5 Total Hours • Comprehensive Modern C++ Mastery",
    skills: ["Modern C++", "Pointers & Memory", "OOP Architecture", "Template Metaprogramming", "STL Algorithms"],
    description: "Extensive 30.5-hour deep dive masterclass in modern C++ instructed by Abdul Bari, covering memory architecture, pointers, object-oriented design, dynamic allocation, and standard library structures."
  },
  {
    id: "guvi-ai-buildathon",
    title: "India AI Impact Buildathon – Certificate of Participation",
    issuer: "GUVI / HCL",
    issueDate: "16 February 2026",
    duration: "National Buildathon",
    credentialType: "Certificate of Participation",
    category: "AI & Cloud",
    featured: true,
    image: "/assets/certificates/guvi-ai-buildathon.png",
    verificationUrl: null,
    highlight: "40,000+ Participants • India AI Impact Summit",
    skills: ["AI-Led Problem Solving", "Prototype Design", "National Impact Solutions", "Hackathon Delivery"],
    description: "Awarded for active participation in the nationwide AI innovation challenge conducted during the India AI Impact Summit 2026, building impactful AI solutions alongside 40,000+ engineering participants."
  },
  {
    id: "vicodathon-2026",
    title: "ViCoDathon 2026 – Certificate of Participation",
    issuer: "AB Talks",
    issueDate: "14 August 2026",
    duration: "Hackathon",
    credentialType: "Certificate of Participation",
    category: "AI & Cloud",
    featured: true,
    image: "/assets/certificates/vicodathon-2026.png",
    verificationUrl: null,
    credentialId: "ABT-HK-ACRF7",
    highlight: "AI Vibe Coding & Accelerated Delivery",
    skills: ["AI Vibe Coding", "Rapid Prototyping", "Agentic Workflows", "Full-Stack Deployment"],
    description: "Participated in the cutting-edge ViCoDathon 2026 hackathon exploring high-velocity software engineering through AI pair-programming, prompt engineering, and modern developer tooling."
  },
  {
    id: "udemy-html-css-beginners",
    title: "HTML and CSS for Beginners From Basic to Advance",
    issuer: "Udemy",
    instructor: "Stephen Koel Soren",
    issueDate: "11 November 2025",
    duration: "4.5 hours",
    credentialType: "Course Certificate of Completion",
    category: "Programming",
    featured: true,
    image: "/assets/certificates/udemy-html-css-beginners.png",
    verificationUrl: "https://www.udemy.com/certificate/UC-cb757a7c-1451-4f92-a98a-b82914dfce36/",
    credentialId: "UC-cb757a7c-1451-4f92-a98a-b82914dfce36",
    highlight: "Responsive Layouts, Modern CSS3 & Semantic HTML5",
    skills: ["Semantic HTML5", "CSS3 Flexbox", "CSS Grid", "Responsive Web Design", "UI Layouts"],
    description: "4.5-hour accredited web development course instructed by Stephen Koel Soren, covering semantic HTML5 architecture, modern CSS3 styling, responsive layouts, flexbox, and grid positioning."
  }
];

export const certificateCategories = [
  { id: "all", label: "All Credentials" },
  { id: "AI & Cloud", label: "AI & Cloud" },
  { id: "Programming", label: "Programming" },
  { id: "Data Analytics", label: "Data Analytics" }
];

export const getFeaturedCertifications = () => {
  return certificatesData.filter(cert => cert.featured);
};

export const getHackathonCertificates = () => {
  return certificatesData.filter(cert => cert.credentialType === "Certificate of Participation");
};

export const getCertificationsByCategory = (category) => {
  if (!category || category === "all") return certificatesData;
  return certificatesData.filter(cert => cert.category === category);
};
