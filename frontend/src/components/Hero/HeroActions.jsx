import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Globe, FileDown, ArrowRight } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import MagneticButton from "../MagneticButton";
import { trackResumeDownload } from "../../hooks/useAnalyticsTracker";

const HeroActions = ({ scrollToProjects }) => {
  return (
    <>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <MagneticButton>
          <motion.a href="/projects" onClick={scrollToProjects} className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            View My Work <ArrowRight size={18} />
          </motion.a>
        </MagneticButton>

        <MagneticButton>
          <motion.a
            href={personalInfo.resumePath}
            download="Ajit_Kumar_Saini_Resume.pdf"
            onClick={() => trackResumeDownload("hero_button")}
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <FileDown size={18} /> Download Resume
          </motion.a>
        </MagneticButton>
      </motion.div>

      <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
        <motion.a whileHover={{ y: -4, scale: 1.1 }} href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub">
          <Github size={18} />
        </motion.a>
        <motion.a whileHover={{ y: -4, scale: 1.1 }} href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
          <Linkedin size={18} />
        </motion.a>
        <motion.a whileHover={{ y: -4, scale: 1.1 }} href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="social-link" title="LeetCode">
          <Code2 size={18} />
        </motion.a>
        <motion.a whileHover={{ y: -4, scale: 1.1 }} href={personalInfo.socials.codechef} target="_blank" rel="noreferrer" className="social-link" title="CodeChef">
          <Globe size={18} />
        </motion.a>
      </motion.div>
    </>
  );
};

export default HeroActions;
