import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            const targetPath = s === 'hero' ? '/' : `/${s}`;
            if (window.location.pathname !== targetPath && !window.location.pathname.startsWith('/certificates')) {
              window.history.replaceState(null, '', targetPath);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Skills', href: '/skills', id: 'skills' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Experience', href: '/experience', id: 'experience' },
    { name: 'Achievements', href: '/achievements', id: 'achievements' },
    { name: 'Certificates', href: '/certifications', id: 'certifications' },
    { name: 'Education', href: '/education', id: 'education' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const path = id === 'hero' ? '/' : `/${id}`;
    window.history.pushState({}, '', path);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Animated Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <motion.a
            href="/"
            className="logo"
            onClick={(e) => handleNavClick(e, 'hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-tag">&lt;</span>
            <span>Ajit</span>
            <span className="logo-tag">/&gt;</span>
          </motion.a>

          {/* Desktop & Mobile Links */}
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Displayed ONLY inside the open mobile dropdown drawer */}
            {mobileMenuOpen && (
              <li className="mobile-only-resume">
                <a
                  href={personalInfo.resumePath}
                  download="Ajit_Kumar_Saini_Resume.pdf"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', marginTop: '8px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={16} /> Download Resume
                </a>
              </li>
            )}
          </ul>

          <div className="nav-actions">
            <MagneticButton strength={0.4}>
              <motion.button
                onClick={toggleTheme}
                className="icon-btn"
                aria-label="Toggle dark/light theme"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>
            </MagneticButton>

            {/* Single primary Resume button */}
            <MagneticButton strength={0.25}>
              <motion.a
                href={personalInfo.resumePath}
                download="Ajit_Kumar_Saini_Resume.pdf"
                className="btn btn-primary btn-sm desktop-resume-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={16} /> Resume
              </motion.a>
            </MagneticButton>

            <button
              className="icon-btn mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
