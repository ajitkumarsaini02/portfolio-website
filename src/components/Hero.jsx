import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Globe, FileDown, ArrowRight, Sparkles, Terminal, Copy, Check, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLiveStats } from '../context/LiveStatsContext';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const { stats: liveData, isLive, loading, refreshStats } = useLiveStats();

  // Dynamic typing animation
  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const terminalCode = `const ajit = {
  name: "${personalInfo.name}",
  education: "B.Tech CSE @ ABESEC (8.48 CGPA)",
  stack: ["React.js", "Node.js", "Express", "MongoDB"],
  dsaSolved: ${liveData.leetcode.totalSolved}, // Across all: ${liveData.totalSolvedAll}+
  lcRating: ${liveData.leetcode.rating},
  codeChef: "${liveData.codechef.stars}★ (Rating ${liveData.codechef.rating})",
  featuredProject: "CodeTrack (Full-Stack MERN)"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(terminalCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const dynamicStats = [
    { label: "LeetCode Solved", value: liveData.leetcode.totalSolved, suffix: "+" },
    { label: "LeetCode Rating", value: liveData.leetcode.rating, suffix: "" },
    { label: "B.Tech CGPA", value: 8.48, isFloat: true, suffix: "/10" },
    { label: "CodeChef Rating", value: liveData.codechef.rating, suffix: "" }
  ];

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <motion.div
              className="status-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="pulse-dot"></span>
              <span>AVAILABLE FOR INTERNSHIPS &amp; ROLES</span>
            </motion.div>

            {isLive && (
              <motion.div
                className="badge badge-cyan"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ cursor: 'pointer' }}
                onClick={refreshStats}
                title="Click to sync live stats from coding-profile-service"
              >
                <RefreshCw size={11} className={loading ? 'animate-spin' : ''} style={{ marginRight: '4px' }} />
                <span>Live Synced</span>
              </motion.div>
            )}
          </div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Building Modern <span className="gradient-text">Full-Stack Web</span> Apps &amp; Solving Algorithms.
          </motion.h1>

          <div className="hero-typing">
            <span className="typing-prompt">&gt;</span>
            <span>{displayedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            I am a Computer Science student at <strong>ABES Engineering College</strong> with proven expertise
            in <strong>React.js, Node.js, Express, MongoDB</strong>, and competitive programming with <strong>{liveData.totalSolvedAll}+ total problems solved</strong> across LeetCode, CodeChef, and GFG.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href={personalInfo.resumePath}
              download="Ajit_Kumar_Saini_Resume.pdf"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <FileDown size={18} /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="LeetCode"
            >
              <Code2 size={18} />
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              href={personalInfo.socials.codechef}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              title="CodeChef"
            >
              <Globe size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {dynamicStats.map((s, idx) => (
              <div key={idx} className="stat-box">
                <span className="stat-val gradient-text">
                  <AnimatedCounter value={s.value} suffix={s.suffix} isFloat={s.isFloat} />
                </span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="terminal-card"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">developer.js</span>
              <button onClick={copyCode} className="icon-btn" style={{ width: '28px', height: '28px' }} title="Copy Code">
                {copiedCode ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              </button>
            </div>
            <pre className="terminal-body">
              <code>
                <span className="t-keyword">const</span> <span className="t-var">ajit</span> = &#123;{'\n'}
                {'  '}<span className="t-prop">role</span>: <span className="t-str">"Full-Stack MERN Developer"</span>,{'\n'}
                {'  '}<span className="t-prop">skills</span>: [<span className="t-str">"React.js"</span>, <span className="t-str">"Node.js"</span>, <span className="t-str">"Express"</span>, <span className="t-str">"MongoDB"</span>],{'\n'}
                {'  '}<span className="t-prop">dsaSolved</span>: <span className="t-num">{liveData.leetcode.totalSolved}</span>, <span className="t-prop">lcRating</span>: <span className="t-num">{liveData.leetcode.rating}</span>,{'\n'}
                {'  '}<span className="t-prop">codeChef</span>: <span className="t-str">"{liveData.codechef.stars}★ ({liveData.codechef.rating})"</span>,{'\n'}
                {'  '}<span className="t-prop">totalProblems</span>: <span className="t-num">{liveData.totalSolvedAll}</span>,{'\n'}
                {'  '}<span className="t-prop">college</span>: <span className="t-str">"ABESEC Ghaziabad (8.48 CGPA)"</span>,{'\n'}
                {'  '}<span className="t-prop">featuredProject</span>: <span className="t-str">"CodeTrack MERN Dashboard"</span>{'\n'}
                &#125;;
              </code>
            </pre>
          </motion.div>

          <motion.div
            className="profile-chip-glow"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
          >
            <Sparkles size={20} color="#00F2FE" />
            <div>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>Live Stats Synced</p>
              <p style={{ fontSize: '0.72rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>{liveData.totalSolvedAll}+ Problems Solved</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
