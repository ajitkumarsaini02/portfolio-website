import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, MapPin, GitPullRequest } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      text: 'Pursuing B.Tech in CSE at ABES Engineering College, Ghaziabad with 8.48/10 CGPA.',
    },
    {
      icon: Code,
      text: 'Mastery in React.js, Node.js, Express, MongoDB, REST API design, and JWT authentication.',
    },
    {
      icon: Award,
      text: 'Solved 700+ LeetCode DSA problems (Rating 1664, Peak 1679) with 100 Days streak badge.',
    },
    {
      icon: GitPullRequest,
      text: '20+ open-source pull requests submitted and merged across active repositories in GSSoC 2026.',
    },
    {
      icon: MapPin,
      text: 'Based in Ghaziabad, Uttar Pradesh — ready for hybrid and remote developer positions.',
    },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <GraduationCap size={15} /> 01 / Know Me
            </span>
            <h2 className="section-title">
              Passionate About{' '}
              <span className="gradient-text">Scalable Code</span> &amp; Modern UIs
            </h2>
            <p className="section-subtitle">
              A glimpse into my background, academic standing, and engineering philosophy.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal
            direction="right"
            delay={0.2}
            className="about-photo-wrapper"
          >
            <motion.div
              className="photo-frame"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={personalInfo.photoPath}
                alt={personalInfo.name}
                className="photo-img"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="photo-badge"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <GraduationCap size={18} color="var(--primary)" />
              <span>B.Tech CSE • 8.48 CGPA</span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3} className="about-text">
            <h3 className="about-subtitle">
              Computer Science Undergraduate &amp; Full-Stack MERN Developer
            </h3>

            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <ul className="about-highlights">
              {highlights.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <IconComponent size={18} className="check-icon" />
                    <span>{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
