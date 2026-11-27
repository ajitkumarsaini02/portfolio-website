const personalInfo = {
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
    codeforces: "https://codeforces.com/profile/ajitkumarsaini02",
    portfolio: "https://ajit-kumar-saini-portfolio.vercel.app/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/ajitkumarsaini02?tab=activity",
  },
  roles: [
    "Full-Stack MERN Developer",
    "React.js Specialist",
    "DSA & Competitive Programmer",
    "Open Source Contributor (GSSoC)",
  ],
  bio: [
    "I am a Computer Science undergraduate (B.Tech, CGPA 8.48) with hands-on experience building full-stack MERN applications and high-performance, responsive front-end projects.",
    "My key full-stack creation is CodeTrack — a DSA tracking platform syncing data from 5 coding platforms through a JWT-secured REST API. I have solved 710+ LeetCode problems (Contest Rating: 1664, Peak: 1679), achieved 2-Star status on CodeChef (Rating 1455), and contributed 20+ pull requests to open-source organizations in GSSoC 2026.",
    "I am actively looking for software engineering internships and developer opportunities where I can build reliable, scalable web applications.",
  ],
};

const stats = [
  { label: "LeetCode Problems", value: 711, suffix: "+", icon: "Code", highlight: "Contest Rating 1664" },
  { label: "CodeChef Rating", value: 1455, suffix: "", icon: "Crown", highlight: "2★ Coder (Peak 1461)" },
  { label: "B.Tech CGPA", value: 8.48, isFloat: true, suffix: "/10", icon: "GraduationCap", highlight: "ABES Engg College" },
  { label: "Open Source PRs", value: 20, suffix: "+", icon: "GitPullRequest", highlight: "GSSoC 2026 Contributor" },
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "ABES Engineering College, Ghaziabad (AKTU)",
    period: "2024 — Present",
    score: "CGPA: 8.48 / 10",
    details: "Key focus on Full Stack Development, Data Structures & Algorithms, Database Systems, and Operating Systems.",
  },
  {
    degree: "Senior Secondary (Class 12 – UP Board)",
    institution: "Sushil Poswal Inter College, Amroha",
    period: "Completed Apr 2023",
    score: "Percentage: 77.4%",
    details: "Science stream with Mathematics, Physics, and Chemistry.",
  },
  {
    degree: "High School (Class 10 – UP Board)",
    institution: "L.F. Academy Inter College, Sambhal",
    period: "Completed Jul 2021",
    score: "Percentage: 79.16%",
    details: "Strong foundational academics with distinction in Science and Mathematics.",
  },
];

export { personalInfo, stats, education };
