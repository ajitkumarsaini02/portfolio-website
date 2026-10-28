import React, { useState, useEffect } from "react";
import { LiveStatsProvider } from "./context/LiveStatsContext";
import CustomCursor from "./components/CustomCursor";
import ClickShockwave from "./components/ClickShockwave";
import AmbientGlow from "./components/AmbientGlow";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import CertificationsSection from "./components/CertificationsSection";
import Education from "./components/Education";
import ProfilesAndCertifications from "./components/ProfilesAndCertifications";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificationsPage from "./pages/CertificationsPage";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.startsWith("/certificates")
      ? "/certificates"
      : "/";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const sectionIds = [
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "certifications",
    "education",
    "profiles",
    "contact",
  ];

  // Handle client-side routing on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const isCerts = window.location.pathname.startsWith("/certificates");
      setCurrentPath(isCerts ? "/certificates" : "/");

      if (!isCerts) {
        const path = window.location.pathname.replace(/^\//, "").toLowerCase();
        if (!path || path === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (sectionIds.includes(path)) {
          const el = document.getElementById(path);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle clean URLs without '#' (e.g. /skills instead of /#skills)
  useEffect(() => {
    // 1. If loaded with a hash (e.g. /#skills), convert to clean path /skills
    if (window.location.hash) {
      const rawHash = window.location.hash.replace("#", "");
      const cleanPath = rawHash ? `/${rawHash}` : "/";
      window.history.replaceState(null, "", cleanPath);
      if (rawHash) {
        setTimeout(() => {
          const el = document.getElementById(rawHash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    } else {
      // 2. If loaded directly on a clean path like /skills or /projects
      const path = window.location.pathname.replace(/^\//, "").toLowerCase();
      if (sectionIds.includes(path)) {
        setTimeout(() => {
          const el = document.getElementById(path);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }

    // Intercept clicks on links that use /section or #section to ensure smooth scrolling
    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetId = null;
      if (href.startsWith("#")) {
        targetId = href.slice(1);
      } else if (
        href.startsWith("/") &&
        href !== "/" &&
        !href.startsWith("/certificates") &&
        !href.includes(".")
      ) {
        const potentialId = href.slice(1).toLowerCase();
        if (sectionIds.includes(potentialId)) {
          targetId = potentialId;
        }
      }

      if (targetId) {
        e.preventDefault();
        const newPath = targetId === "hero" ? "/" : `/${targetId}`;
        window.history.pushState({}, "", newPath);
        if (targetId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (href === "/" || href === "#hero") {
        if (!anchor.closest(".cert-page-wrapper")) {
          e.preventDefault();
          window.history.pushState({}, "", "/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        const raw = window.location.hash.replace("#", "");
        window.history.replaceState(null, "", raw ? `/${raw}` : "/");
      }
    };

    document.addEventListener("click", handleLinkClick);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navigateToCertificates = () => {
    window.history.pushState({}, "", "/certificates");
    setCurrentPath("/certificates");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPath("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isCertificatesPage = currentPath === "/certificates";

  return (
    <LiveStatsProvider>
      <div className="portfolio-app">
        {/* Interactive Custom Spring Cursor */}
        <CustomCursor />

        {/* Interactive Click Shockwave Waves */}
        <ClickShockwave />

        {/* Floating Cyber Ambient Glow Orbs */}
        <AmbientGlow />

        {/* Dynamic Canvas Particles with Mouse Physics */}
        <ParticleBackground theme={theme} />

        {isCertificatesPage ? (
          <>
            <CertificationsPage
              theme={theme}
              toggleTheme={toggleTheme}
              onBackToHome={navigateToHome}
            />
            <Footer />
          </>
        ) : (
          <>
            {/* Navigation Bar with Top Scroll Progress */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Main Content Sections with Viewport Animations */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <CertificationsSection />
              <Education />
              <ProfilesAndCertifications />
              <Faq />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </LiveStatsProvider>
  );
}
