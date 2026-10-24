import React, { useState, useEffect } from 'react';
import { LiveStatsProvider } from './context/LiveStatsContext';
import CustomCursor from './components/CustomCursor';
import AmbientGlow from './components/AmbientGlow';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ProfilesAndCertifications from './components/ProfilesAndCertifications';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <LiveStatsProvider>
      <div className="portfolio-app">
        {/* Interactive Custom Spring Cursor */}
        <CustomCursor />

        {/* Floating Cyber Ambient Glow Orbs */}
        <AmbientGlow />

        {/* Dynamic Canvas Particles with Mouse Physics */}
        <ParticleBackground theme={theme} />

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
          <Education />
          <ProfilesAndCertifications />
          <Faq />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LiveStatsProvider>
  );
}
