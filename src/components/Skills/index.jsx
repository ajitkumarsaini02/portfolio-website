import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { skillCategories } from "../../data/portfolioData";
import ScrollReveal from "../ScrollReveal";
import SkillCategoryCard from "./SkillCategoryCard";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <Layers size={15} /> 02 / Tech Stack
            </span>
            <h2 className="section-title">
              Skills &amp; <span className="gradient-text">Engineering Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Specialized in modern full-stack development with React, Node.js, and core computer science fundamentals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="project-filters" style={{ marginBottom: "32px" }}>
            <button
              className={`filter-btn ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              All Skills
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.category}
                className={`filter-btn ${selectedCategory === c.category ? "active" : ""}`}
                onClick={() => setSelectedCategory(c.category)}
              >
                {c.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div className="skills-grid" layout>
          {displayedCategories.map((categoryGroup, catIdx) => (
            <SkillCategoryCard
              key={categoryGroup.category}
              categoryGroup={categoryGroup}
              index={catIdx}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
