import React from "react";
import { FileText } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const NavLinks = ({
  navLinks,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick,
}) => {
  return (
    <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, link.id)}
          >
            {link.name}
          </a>
        </li>
      ))}

      {mobileMenuOpen && (
        <li className="mobile-only-resume">
          <a
            href={personalInfo.resumePath}
            download="Ajit_Kumar_Saini_Resume.pdf"
            className="btn btn-primary btn-sm"
            style={{ width: "100%", marginTop: "8px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText size={16} /> Download Resume
          </a>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
