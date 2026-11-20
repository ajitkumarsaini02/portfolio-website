import React from "react";

const FooterNav = ({ scrollToSection }) => {
  const links = [
    { name: "About Me", id: "about" },
    { name: "Skills & Tech Stack", id: "skills" },
    { name: "Featured Projects", id: "projects" },
    { name: "Open Source & Experience", id: "experience" },
    { name: "Milestones & DSA", id: "achievements" },
    { name: "Certifications & Credentials", id: "certifications" },
    { name: "Education", id: "education" },
    { name: "Coding Handles", id: "profiles" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="footer-col">
      <h4>Navigation</h4>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`/${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
