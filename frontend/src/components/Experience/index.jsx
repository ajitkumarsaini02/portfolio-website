import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../../data/portfolioData";
import ScrollReveal from "../ScrollReveal";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <Briefcase size={15} /> 04 / Experience
            </span>
            <h2 className="section-title">
              Internships &amp; <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle">
              Enterprise software development, corporate internships, and open-source contributions.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline-container">
          {experience.map((exp, idx) => (
            <ScrollReveal key={idx} delay={0.2} className="timeline-item">
              <motion.div
                className="timeline-dot"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <ExperienceCard exp={exp} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
