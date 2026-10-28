import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { education } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <GraduationCap size={15} /> 06 / Academics
            </span>
            <h2 className="section-title">
              Education &amp;{" "}
              <span className="gradient-text">Academic Journey</span>
            </h2>
            <p className="section-subtitle">
              Formal educational background in Computer Science &amp;
              Engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline-container">
          {education.map((edu, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.15}
              className="timeline-item"
            >
              <motion.div
                className="timeline-dot"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: idx * 0.8,
                  ease: "easeInOut",
                }}
              />
              <TiltCard maxTilt={5}>
                <div className="glass-card timeline-card">
                  <div className="timeline-top">
                    <div>
                      <h3 className="timeline-role">{edu.degree}</h3>
                      <p className="timeline-org">
                        <School
                          size={16}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                            marginRight: "6px",
                            color: "var(--primary)",
                          }}
                        />
                        {edu.institution}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <span className="badge badge-emerald">{edu.score}</span>
                      <span className="timeline-period badge badge-cyan">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.92rem",
                      marginTop: "10px",
                    }}
                  >
                    {edu.details}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
