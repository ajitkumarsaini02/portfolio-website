const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Milestones", id: "achievements" },
  { name: "Certifications", id: "certifications" },
  { name: "Education", id: "education" },
  { name: "Coding Handles", id: "profiles" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

const navSections = ["hero", ...navLinks.map((l) => l.id)];

export { navLinks, navSections };
export default navLinks;
