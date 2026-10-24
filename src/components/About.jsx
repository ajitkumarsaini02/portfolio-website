import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Award, Code, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <GraduationCap size={15} /> 01 / Know Me
            </span>
            <h2 className="section-title">
              Passionate About <span className="gradient-text">Scalable Code</span> &amp; Modern UIs
            </h2>
            <p className="section-subtitle">
              A glimpse into my background, academic standing, and engineering philosophy.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal direction="right" delay={0.2} className="about-photo-wrapper">
            <motion.div
              className="photo-frame"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={personalInfo.photoPath}
                alt={personalInfo.name}
                className="photo-img"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </motion.div>
            <motion.div
              className="photo-badge"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <GraduationCap size={18} color="#00F2FE" />
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
              {[
                `Pursuing B.Tech in CSE at ABES Engineering College, Ghaziabad with 8.48/10 CGPA.`,
                `Mastery in React.js, Node.js, Express, MongoDB, REST API design, and JWT authentication.`,
                `Solved 500+ LeetCode DSA problems (Rating 1527, Peak 1577) with 100 Days streak badge.`,
                `10+ open-source pull requests submitted and merged across active repositories in GSSoC 2026.`,
                `Based in Ghaziabad, Uttar Pradesh — ready for hybrid and remote developer positions.`
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
