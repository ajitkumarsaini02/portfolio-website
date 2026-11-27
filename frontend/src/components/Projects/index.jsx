import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projects } from "../../data/portfolioData";
import ScrollReveal from "../ScrollReveal";
import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "fullstack") return p.category === "fullstack";
    if (filter === "frontend") return p.category === "frontend";
    return true;
  });

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <FolderGit2 size={15} /> 03 / Portfolio
            </span>
            <h2 className="section-title">
              Featured Projects &amp; <span className="gradient-text">Applications</span>
            </h2>
            <p className="section-subtitle">
              Enterprise full-stack systems, MERN dashboards, and modern web applications.
            </p>
          </div>
        </ScrollReveal>

        <ProjectFilters
          filter={filter}
          setFilter={setFilter}
          totalProjects={projects.length}
        />

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
