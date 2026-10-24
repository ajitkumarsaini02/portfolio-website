import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Binary, Wrench, Cpu, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    Layout: <Layout size={22} />,
    Server: <Server size={22} />,
    Binary: <Binary size={22} />,
    Wrench: <Wrench size={22} />
  };

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <Layers size={15} /> 02 / Tech Stack
            </span>
            <h2 className="section-title">
              Skills &amp; <span className="gradient-text">Engineering Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Specialized in modern full-stack development with React, Node.js, and core computer science fundamentals.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="project-filters" style={{ marginBottom: '32px' }}>
            <button
              className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Skills
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.category}
                className={`filter-btn ${selectedCategory === c.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(c.category)}
              >
                {c.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div className="skills-grid" layout>
          {displayedCategories.map((categoryGroup, catIdx) => (
            <motion.div
              key={categoryGroup.category}
              className="glass-card skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              layout
            >
              <div className="category-header">
                <div className="category-icon">
                  {iconMap[categoryGroup.icon] || <Cpu size={22} />}
                </div>
                <div>
                  <h3>{categoryGroup.category}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {categoryGroup.skills.length} core competencies
                  </span>
                </div>
              </div>

              <div className="skills-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">
                        {skill.name}
                        {skill.tag && <span className="skill-tag">{skill.tag}</span>}
                      </span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + sIdx * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
