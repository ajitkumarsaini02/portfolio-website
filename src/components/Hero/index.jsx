import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { useLiveStats } from "../../context/LiveStatsContext";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import TerminalCard from "./TerminalCard";
import ProfileChip from "./ProfileChip";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { stats: liveData, refreshKey } = useLiveStats();

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

  const scrollToProjects = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", "/projects");
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroContent displayedText={displayedText} totalSolvedAll={liveData.totalSolvedAll} />
          <HeroActions scrollToProjects={scrollToProjects} />
          <HeroStats key={`hero-stats-${refreshKey}`} liveData={liveData} />
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <TerminalCard key={`terminal-${refreshKey}`} liveData={liveData} />
          <ProfileChip totalProblems={liveData.totalSolvedAll} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
