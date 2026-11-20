import React from "react";
import MagneticButton from "../MagneticButton";
import ScrollReveal from "../ScrollReveal";

const ProjectFilters = ({ filter, setFilter, totalProjects }) => {
  return (
    <ScrollReveal delay={0.1}>
      <div className="project-filters">
        <MagneticButton strength={0.3}>
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Work ({totalProjects})
          </button>
        </MagneticButton>

        <MagneticButton strength={0.3}>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full-Stack Systems
          </button>
        </MagneticButton>

        <MagneticButton strength={0.3}>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend &amp; Web Apps
          </button>
        </MagneticButton>
      </div>
    </ScrollReveal>
  );
};

export default ProjectFilters;
