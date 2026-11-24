import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, FileText } from "lucide-react";
import TiltCard from "../TiltCard";

const ExperienceCard = ({ exp }) => {
  return (
    <TiltCard maxTilt={5}>
      <div className="glass-card timeline-card">
        <div className="timeline-top">
          <div>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-org">
              {exp.organization} •{" "}
              <span style={{ color: "var(--primary)" }}>{exp.type}</span>
            </p>
          </div>
          <span className="timeline-period badge badge-cyan">{exp.period}</span>
        </div>

        <ul className="timeline-points">
          {exp.points.map((pt, pIdx) => (
            <motion.li
              key={pIdx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + pIdx * 0.1 }}
            >
              <CheckCircle2
                size={16}
                style={{
                  color: "var(--primary)",
                  flexShrink: 0,
                  marginTop: "3px",
                }}
              />
              <span>{pt}</span>
            </motion.li>
          ))}
        </ul>

        {(exp.github || exp.certificate) && (
          <div
            style={{
              marginTop: "16px",
              paddingTop: "12px",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {exp.github && (
              <motion.a
                href={exp.github}
                target="_blank"
                rel="noreferrer"
                className="project-link-item"
                style={{ fontSize: "0.82rem" }}
                whileHover={{ x: 2 }}
              >
                <Github size={15} /> Source Code
              </motion.a>
            )}
            {exp.certificate && (
              <motion.a
                href={exp.certificate}
                target="_blank"
                rel="noreferrer"
                className="project-link-item project-link-demo"
                style={{ fontSize: "0.82rem" }}
                whileHover={{ x: 2 }}
              >
                <FileText size={15} /> Certificate
              </motion.a>
            )}
            {exp.certificateId && (
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  marginLeft: "auto",
                }}
              >
                ID: {exp.certificateId}
              </span>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
};

export default ExperienceCard;
