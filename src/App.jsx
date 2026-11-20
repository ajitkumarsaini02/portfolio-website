import React, { useState, useEffect } from "react";
import { LiveStatsProvider } from "./context/LiveStatsContext";
import { usePortfolioRouting } from "./hooks/usePortfolioRouting";
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

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const { isCertificatesPage, navigateToHome } = usePortfolioRouting();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <LiveStatsProvider>
      <div className="portfolio-app">
        <CustomCursor />
        <ClickShockwave />
        <AmbientGlow />
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
            <Navbar theme={theme} toggleTheme={toggleTheme} />
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
            <Footer />
          </>
        )}
      </div>
    </LiveStatsProvider>
  );
};

export default App;
