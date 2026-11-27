export const sectionIds = [
  "about", "skills", "projects", "experience",
  "achievements", "certifications", "education",
  "profiles", "contact",
];

export const scrollToSection = (id) => {
  if (!id || id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export const resolveTargetId = (href) => {
  if (href.startsWith("#")) return href.slice(1);
  if (href.startsWith("/") && href !== "/" && !href.startsWith("/certificates") && !href.includes(".")) {
    const potentialId = href.slice(1).toLowerCase();
    if (sectionIds.includes(potentialId)) return potentialId;
  }
  return null;
};
