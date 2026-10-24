import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#hero" className="logo" style={{ textDecoration: 'none' }}>
            <span className="logo-tag">&lt;</span>
            <span>Ajit</span>
            <span className="logo-tag">/&gt;</span>
          </a>
          <p>
            <strong>{personalInfo.name}</strong> • Full-Stack MERN Developer and Competitive Programmer. Crafting robust software systems and intuitive digital experiences.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills &amp; Tech Stack</a></li>
            <li><a href="#projects">Projects (CodeTrack)</a></li>
            <li><a href="#experience">Open Source (GSSoC)</a></li>
            <li><a href="#achievements">Achievements &amp; DSA</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Profiles</h4>
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
                LeetCode Profile (500+)
              </a>
            </li>
            <li>
              <a href={personalInfo.socials.codechef} target="_blank" rel="noreferrer">
                CodeChef (2★ Coder)
              </a>
            </li>
            <li>
              <a href={personalInfo.socials.geeksforgeeks} target="_blank" rel="noreferrer">
                GeeksforGeeks
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p>© {new Date().getFullYear()} Ajit Kumar Saini. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="btn btn-outline btn-sm"
          style={{ gap: '6px' }}
          title="Scroll to Top"
        >
          <ArrowUp size={16} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
