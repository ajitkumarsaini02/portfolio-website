import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, ShieldCheck, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="#hero" className="logo" style={{ textDecoration: 'none' }}>
            <span className="logo-tag">&lt;</span>
            <span>Ajit</span>
            <span className="logo-tag">/&gt;</span>
          </a>
          <p>
            <strong>{personalInfo.name}</strong> • Full-Stack MERN Developer and Competitive Programmer. Crafting robust software systems, clean UI architectures, and intuitive digital experiences.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--primary)' }} />
            <span>9 Verified Industry &amp; Cloud Accreditations</span>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills &amp; Tech Stack</a></li>
            <li><a href="#projects">Featured Projects</a></li>
            <li><a href="#experience">Open Source &amp; Experience</a></li>
            <li><a href="#achievements">Milestones &amp; DSA</a></li>
            <li><a href="#certifications">Certifications &amp; Credentials</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#profiles">Coding Handles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Coding & Professional Profiles */}
        <div className="footer-col">
          <h4>Profiles &amp; Socials</h4>
          <ul className="footer-links">
            <li>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
                GitHub (@ajitkumarsaini02)
              </a>
            </li>
            <li>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer">
                LeetCode Profile (500+ Solved)
              </a>
            </li>
            <li>
              <a href={personalInfo.socials.codechef} target="_blank" rel="noreferrer">
                CodeChef (2★ Div 3 Coder)
              </a>
            </li>
            {personalInfo.socials.codeforces && (
              <li>
                <a href={personalInfo.socials.codeforces} target="_blank" rel="noreferrer">
                  Codeforces Profile
                </a>
              </li>
            )}
            <li>
              <a href={personalInfo.socials.geeksforgeeks} target="_blank" rel="noreferrer">
                GeeksforGeeks Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Ajit Kumar Saini. Crafted with modern React &amp; Vite.
        </p>
        <button
          onClick={scrollToTop}
          className="btn btn-outline btn-sm"
          style={{ gap: '6px' }}
          title="Scroll to Top"
          aria-label="Scroll to top of page"
        >
          <ArrowUp size={16} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
