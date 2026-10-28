import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Code,
  GitBranch,
  Crown,
  Linkedin,
  BookMarked,
  Briefcase,
  Code2,
  Cloud,
  BookOpen,
  Terminal,
} from "lucide-react";
import { codingProfiles } from "../data/portfolioData";
import { useLiveStats } from "../context/LiveStatsContext";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

export default function ProfilesAndCertifications() {
  const { stats: liveData } = useLiveStats();

  const profileIconMap = {
    Code: <Code size={22} />,
    GitBranch: <GitBranch size={22} />,
    Crown: <Crown size={22} />,
    Terminal: <Terminal size={22} />,
    Linkedin: <Linkedin size={22} />,
    BookMarked: <BookMarked size={22} />,
  };

  const getDynamicStat = (name, fallback) => {
    if (name === "LeetCode") {
      return `${liveData.leetcode.totalSolved} Solved • Rating ${liveData.leetcode.rating}`;
    }
    if (name === "CodeChef") {
      return `${liveData.codechef.stars}★ Coder • Rating ${liveData.codechef.rating}`;
    }
    if (name === "Codeforces") {
      return `${liveData.codeforces.totalSolved} Solved • Rating ${liveData.codeforces.rating}`;
    }
    if (name === "GitHub") {
      return `${liveData.github.publicRepos} Repos • ${liveData.github.pullRequests}`;
    }
    if (name === "GeeksforGeeks") {
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
              <Code size={15} /> 08 / Coding Profiles
            </span>
            <h2 className="section-title">
              Coding Profiles &amp;{" "}
              <span className="gradient-text">Handles</span>
            </h2>
            <p className="section-subtitle">
              Live synchronized metrics across competitive programming handles
              and developer platforms.
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
                  <span className="profile-stat-pill">
                    {getDynamicStat(p.name, p.stats)}
                  </span>
                </motion.a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
