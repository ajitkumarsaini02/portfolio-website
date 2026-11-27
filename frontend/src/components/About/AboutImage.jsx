import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import ScrollReveal from "../ScrollReveal";

const AboutImage = () => {
  return (
    <ScrollReveal direction="right" delay={0.2} className="about-photo-wrapper">
      <motion.div
        className="photo-frame"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={personalInfo.photoPath}
          alt={personalInfo.name}
          className="photo-img"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        className="photo-badge"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <GraduationCap size={18} color="var(--primary)" />
        <span>B.Tech CSE • 8.48 CGPA</span>
      </motion.div>
    </ScrollReveal>
  );
};

export default AboutImage;
