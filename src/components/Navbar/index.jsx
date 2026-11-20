import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "hero", "about", "skills", "projects", "experience",
        "achievements", "certifications", "education", "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            const targetPath = s === "hero" ? "/" : `/${s}`;
            if (
              window.location.pathname !== targetPath &&
              !window.location.pathname.startsWith("/certificates")
            ) {
              window.history.replaceState(null, "", targetPath);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about", id: "about" },
    { name: "Skills", href: "/skills", id: "skills" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Experience", href: "/experience", id: "experience" },
    { name: "Achievements", href: "/achievements", id: "achievements" },
    { name: "Certificates", href: "/certifications", id: "certifications" },
    { name: "Education", href: "/education", id: "education" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const path = id === "hero" ? "/" : `/${id}`;
    window.history.pushState({}, "", path);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <NavBrand handleNavClick={handleNavClick} />
          <NavLinks
            navLinks={navLinks}
            activeSection={activeSection}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            handleNavClick={handleNavClick}
          />
          <NavActions
            theme={theme}
            toggleTheme={toggleTheme}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
