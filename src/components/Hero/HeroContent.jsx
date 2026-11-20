import React from "react";
import { motion } from "framer-motion";

const HeroContent = ({ displayedText, totalSolvedAll }) => {
  return (
    <>
      <motion.div
        className="status-pill"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="status-ping-wrapper">
          <span className="status-ping"></span>
          <span className="status-dot"></span>
        </span>
        <span className="status-text">Available for Internships &amp; Full-Time Roles</span>
      </motion.div>

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
        I am a Computer Science student at <strong>ABES Engineering College</strong> with proven expertise in{" "}
        <strong>React.js, Node.js, Express, MongoDB</strong>, and competitive programming with{" "}
        <strong>{totalSolvedAll}+ total problems solved</strong> across LeetCode, CodeChef, Codeforces, and GFG.
      </motion.p>
    </>
  );
};

export default HeroContent;
