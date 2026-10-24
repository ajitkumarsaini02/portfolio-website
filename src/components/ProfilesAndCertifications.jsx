import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, GitBranch, Crown, Linkedin, BookMarked, Briefcase, Code2, Cloud, BookOpen, Terminal } from 'lucide-react';
import { codingProfiles, certifications } from '../data/portfolioData';
import { useLiveStats } from '../context/LiveStatsContext';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function ProfilesAndCertifications() {
  const { stats: liveData } = useLiveStats();

  const profileIconMap = {
    Code: <Code size={22} />,
    GitBranch: <GitBranch size={22} />,
    Crown: <Crown size={22} />,
    Terminal: <Terminal size={22} />,
    Linkedin: <Linkedin size={22} />,
    BookMarked: <BookMarked size={22} />
  };

  const certIconMap = {
    Briefcase: <Briefcase size={20} />,
    Code2: <Code2 size={20} />,
    Award: <Award size={20} />,
    Cloud: <Cloud size={20} />,
    BookOpen: <BookOpen size={20} />
  };

  const getDynamicStat = (name, fallback) => {
    if (name === 'LeetCode') {
      return `${liveData.leetcode.totalSolved} Solved • Rating ${liveData.leetcode.rating}`;
    }
    if (name === 'CodeChef') {
      return `${liveData.codechef.stars}★ Coder • Rating ${liveData.codechef.rating}`;
    }
    if (name === 'Codeforces') {
      return `${liveData.codeforces.totalSolved} Solved • Rating ${liveData.codeforces.rating}`;
    }
    if (name === 'GitHub') {
      return `${liveData.github.publicRepos} Repos • ${liveData.github.pullRequests}`;
    }
    if (name === 'GeeksforGeeks') {
      return `${liveData.gfg.totalSolved} Solved • Active Practice`;
    }
    return fallback;
  };

  return (
    <section id="profiles" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <Code size={15} /> 07 / Profiles &amp; Certs
            </span>
            <h2 className="section-title">
              Coding Profiles &amp; <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle">
              Live synchronized metrics across competitive programming handles &amp; verified industry credentials.
            </p>
          </div>
        </ScrollReveal>

        <div className="profiles-grid">
          {codingProfiles.map((p, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <TiltCard maxTilt={14}>
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card profile-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="profile-card-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {profileIconMap[p.icon] || <Code size={22} />}
                  </motion.div>
                  <h4 className="profile-name">{p.name}</h4>
                  <span className="profile-handle">{p.handle}</span>
                  <span className="profile-stat-pill">{getDynamicStat(p.name, p.stats)}</span>
                </motion.a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications Row */}
        <ScrollReveal delay={0.2}>
          <h3 style={{ fontSize: '1.4rem', marginTop: '48px', marginBottom: '20px', textAlign: 'center' }}>
            Industry Certifications &amp; Accreditations
          </h3>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
          {certifications.map((cert, idx) => (
            <ScrollReveal key={idx} delay={0.1 + idx * 0.08}>
              <TiltCard maxTilt={8}>
                <div className="glass-card" style={{ padding: '20px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {certIconMap[cert.icon] || <Award size={20} />}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', marginBottom: '4px' }}>{cert.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                      {cert.issuer} • <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>{cert.year}</span>
                    </p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
