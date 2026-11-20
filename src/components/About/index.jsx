import React from "react";
import { GraduationCap, Award, Code, MapPin, GitPullRequest } from "lucide-react";
import { useLiveStats } from "../../context/LiveStatsContext";
import ScrollReveal from "../ScrollReveal";
import AboutImage from "./AboutImage";
import AboutHighlights from "./AboutHighlights";

const About = () => {
  const { stats: liveData } = useLiveStats();

  const highlights = [
    {
      icon: GraduationCap,
      text: "Pursuing B.Tech in CSE at ABES Engineering College, Ghaziabad with 8.48/10 CGPA.",
    },
    {
      icon: Code,
      text: "Mastery in React.js, Node.js, Express, MongoDB, REST API design, and JWT authentication.",
    },
    {
      icon: Award,
      text: `Solved ${liveData.leetcode.totalSolved}+ LeetCode DSA problems (Rating ${liveData.leetcode.rating}, Peak ${liveData.leetcode.maxRating}) with 100 Days streak badge.`,
    },
    {
      icon: GitPullRequest,
      text: `${liveData.github.pullRequests} pull requests submitted and merged across active repositories in GSSoC 2026.`,
    },
    {
      icon: MapPin,
      text: "Based in Ghaziabad, Uttar Pradesh — ready for hybrid and remote developer positions.",
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
              Passionate About <span className="gradient-text">Scalable Code</span> &amp; Modern UIs
            </h2>
            <p className="section-subtitle">
              A glimpse into my background, academic standing, and engineering philosophy.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <AboutImage />
          <AboutHighlights highlights={highlights} />
        </div>
      </div>
    </section>
  );
};

export default About;
