import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import { navLinks, navSections } from "./navLinksData";

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 200;

      for (let s of navSections) {
        const el = document.getElementById(s);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          const targetPath = s === "hero" ? "/" : `/${s}`;
          if (window.location.pathname !== targetPath && !window.location.pathname.startsWith("/certificates")) {
            window.history.replaceState(null, "", targetPath);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const path = id === "hero" ? "/" : `/${id}`;
    window.history.pushState({}, "", path);
    const el = id === "hero" ? null : document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

export { Navbar };
export default Navbar;
