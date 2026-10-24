import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, Cpu, CheckSquare, Music } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.category === 'fullstack';
    if (filter === 'frontend') return p.category === 'frontend';
    return true;
  });

  const iconMap = {
    Cpu: <Cpu size={24} />,
    CheckSquare: <CheckSquare size={24} />,
    Sparkles: <Sparkles size={24} />,
    Music: <Music size={24} />
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <FolderGit2 size={15} /> 03 / Portfolio
            </span>
            <h2 className="section-title">
              Featured Projects &amp; <span className="gradient-text">Applications</span>
            </h2>
            <p className="section-subtitle">
              Real-world full-stack MERN systems, zero-backend web apps, and developer productivity tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Filters */}
        <ScrollReveal delay={0.1}>
          <div className="project-filters">
            <MagneticButton strength={0.3}>
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Work ({projects.length})
              </button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <button
                className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
                onClick={() => setFilter('fullstack')}
              >
                Full-Stack MERN
              </button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <button
                className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
                onClick={() => setFilter('frontend')}
              >
                Frontend &amp; Web Apps
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  gridColumn: project.featured ? '1 / -1' : 'auto'
                }}
              >
                <TiltCard maxTilt={8}>
                  <article className={`glass-card project-card ${project.featured ? 'featured-card' : ''}`}>
                    <div className="project-top">
                      <div className="project-icon-box">
                        {iconMap[project.icon] || <Cpu size={24} />}
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span className={`badge ${project.featured ? 'badge-cyan' : 'badge-purple'}`}>
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    {project.bullets && project.bullets.length > 0 && (
                      <ul className="project-bullets">
                        {project.bullets.map((b, i) => (
                          <li key={i}>
                            <span className="bullet-arrow">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="project-tech">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-item"
                          whileHover={{ x: 3 }}
                        >
                          <Github size={16} /> Source Code
                        </motion.a>
                      )}
                      {project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-item"
                          style={{ color: 'var(--primary)' }}
                          whileHover={{ x: 3 }}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </motion.a>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
