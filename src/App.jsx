import React, { useState, useEffect } from 'react';
import { LiveStatsProvider } from './context/LiveStatsContext';
import CustomCursor from './components/CustomCursor';
import ClickShockwave from './components/ClickShockwave';
import AmbientGlow from './components/AmbientGlow';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import CertificationsSection from './components/CertificationsSection';
import Education from './components/Education';
import ProfilesAndCertifications from './components/ProfilesAndCertifications';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificationsPage from './pages/CertificationsPage';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.startsWith('/certificates') ? '/certificates' : '/';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Handle client-side routing on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const isCerts = window.location.pathname.startsWith('/certificates');
      setCurrentPath(isCerts ? '/certificates' : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navigateToCertificates = () => {
    window.history.pushState({}, '', '/certificates');
    setCurrentPath('/certificates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCertificatesPage = currentPath === '/certificates';

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
