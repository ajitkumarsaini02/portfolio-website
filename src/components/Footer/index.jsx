import React from "react";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const scrollToTop = () => {
    window.history.pushState({}, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
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
    <footer className="footer">
      <div className="container footer-grid">
        <FooterBrand scrollToSection={scrollToSection} />
        <FooterNav scrollToSection={scrollToSection} />
        <FooterSocials />
      </div>
      <FooterBottom scrollToTop={scrollToTop} />
    </footer>
  );
};

export default Footer;
