import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <Briefcase size={15} /> 04 / Experience
            </span>
            <h2 className="section-title">
              Open Source &amp; <span className="gradient-text">Contributions</span>
            </h2>
            <p className="section-subtitle">
              Hands-on collaborative development in public repositories, bug triage, and UI engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline-container">
          {experience.map((exp, idx) => (
            <ScrollReveal key={idx} delay={0.2} className="timeline-item">
              <motion.div
                className="timeline-dot"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
              <TiltCard maxTilt={5}>
                <div className="glass-card timeline-card">
                  <div className="timeline-top">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-org">
                        {exp.organization} • <span style={{ color: 'var(--primary)' }}>{exp.type}</span>
                      </p>
                    </div>
                    <span className="timeline-period badge badge-cyan">{exp.period}</span>
                  </div>

                  <ul className="timeline-points">
                    {exp.points.map((pt, pIdx) => (
                      <motion.li
                        key={pIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + pIdx * 0.1 }}
                      >
                        <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{pt}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
