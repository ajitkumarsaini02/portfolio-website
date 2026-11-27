import React from "react";
import { motion } from "framer-motion";
import { Code, GitBranch, Crown, Linkedin, BookMarked, Terminal } from "lucide-react";
import { codingProfiles } from "../data/portfolioData";
import { useLiveStats } from "../context/LiveStatsContext";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const platformColors = {
  LeetCode: "#FFA116",
  GitHub: "#10B981",
  CodeChef: "#F59E0B",
  Codeforces: "#8B5CF6",
  GeeksforGeeks: "#22C55E",
  LinkedIn: "#0A66C2",
};

const ProfilesAndCertifications = () => {
  const { stats: liveData, refreshKey } = useLiveStats();

  const profileIconMap = {
    Code: <Code size={22} />,
    GitBranch: <GitBranch size={22} />,
    Crown: <Crown size={22} />,
    Terminal: <Terminal size={22} />,
    Linkedin: <Linkedin size={22} />,
    BookMarked: <BookMarked size={22} />,
  };

  const getDynamicStat = (platformName, fallback) => {
    const key = (platformName || "").toLowerCase();
    if (key === "leetcode") return `${liveData.leetcode.totalSolved} Solved • Rating ${liveData.leetcode.rating}`;
    if (key === "codechef") return `${liveData.codechef.stars}★ Coder • Rating ${liveData.codechef.rating}`;
    if (key === "codeforces") return `Rating ${liveData.codeforces.rating} • ${liveData.codeforces.totalSolved} Solved`;
    if (key === "github") return `${liveData.github.publicRepos} Repos • ${liveData.github.followers} Followers`;
    if (key.includes("geeks")) return `${liveData.gfg.totalSolved} Solved • Active Practice`;
    return fallback;
  };

  return (
    <section id="profiles" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow"><Code size={15} /> 08 / Coding Profiles</span>
            <h2 className="section-title">Coding Profiles &amp; <span className="gradient-text">Handles</span></h2>
            <p className="section-subtitle">
              Live synchronized metrics across competitive programming handles ({liveData.totalSolvedAll}+ Solved).
            </p>
          </div>
        </ScrollReveal>

        <div key={`profiles-grid-${refreshKey}`} className="profiles-grid">
          {codingProfiles.map((p, idx) => {
            const platformName = p.name || p.platform;
            const color = platformColors[platformName] || "var(--primary)";
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <TiltCard maxTilt={14}>
                  <motion.a href={p.url} target="_blank" rel="noreferrer" className="glass-card profile-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <div className="profile-icon-wrap" style={{ color: color, borderColor: `${color}40`, background: `${color}15` }}>
                      {profileIconMap[p.icon] || <Code size={22} />}
                    </div>
                    <div className="profile-info">
                      <span className="profile-platform">{platformName}</span>
                      <h3 className="profile-handle">{p.handle}</h3>
                      <p className="profile-stats">{getDynamicStat(platformName, p.stats)}</p>
                    </div>
                    <span className="profile-arrow" style={{ color: color }}>↗</span>
                  </motion.a>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfilesAndCertifications;
