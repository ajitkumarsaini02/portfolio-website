import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Binary, Wrench, Cpu } from "lucide-react";

const iconMap = {
  Layout: <Layout size={22} />,
  Server: <Server size={22} />,
  Binary: <Binary size={22} />,
  Wrench: <Wrench size={22} />,
};

const SkillCategoryCard = ({ categoryGroup, index }) => {
  return (
    <motion.div
      className="glass-card skill-category-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
      layout
    >
      <div className="category-header">
        <div className="category-icon">
          {iconMap[categoryGroup.icon] || <Cpu size={22} />}
        </div>
        <div>
          <h3>{categoryGroup.category}</h3>
          <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            {categoryGroup.skills.length} core competencies
          </span>
        </div>
      </div>

      <div className="skills-list">
        {categoryGroup.skills.map((skill, sIdx) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-meta">
              <span className="skill-name">
                {skill.name}
                {skill.tag && <span className="skill-tag">{skill.tag}</span>}
              </span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="progress-track">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + sIdx * 0.08,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategoryCard;
