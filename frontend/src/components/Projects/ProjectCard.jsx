import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TiltCard from "../TiltCard";
import { projectIconMap } from "./projectIconMap";
import ProjectUptimeBadge from "./ProjectUptimeBadge";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="project-grid-item"
    >
      <TiltCard maxTilt={6} className="project-tilt-wrapper">
        <article className="glass-card project-card">
          <div className="project-image-wrapper">
            <img src={project.image} alt={`${project.title} Preview`} className="project-image" loading="lazy" />
            <div className="project-image-gradient" />
            <div className="project-image-badge">
              <span className="project-badge-tag">{project.badge}</span>
            </div>
          </div>

          <div className="project-card-body">
            <div className="project-top" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="project-icon-box">{projectIconMap[project.icon] || null}</div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <ProjectUptimeBadge projectTitle={project.title} demoUrl={project.links?.demo} />
            </div>

            <p className="project-desc">{project.description}</p>

            {project.bullets && project.bullets.length > 0 && (
              <ul className="project-bullets">
                {project.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="bullet-arrow">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              {project.links.github && (
                <motion.a href={project.links.github} target="_blank" rel="noreferrer" className="project-link-item" whileHover={{ x: 3 }}>
                  <Github size={16} /> Source Code
                </motion.a>
              )}
              {project.links.demo && (
                <motion.a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link-item project-link-demo" whileHover={{ x: 3 }}>
                  <ExternalLink size={16} /> Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
};

export default ProjectCard;
