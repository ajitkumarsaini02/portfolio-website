import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const HeroStats = ({ liveData }) => {
  const dynamicStats = [
    { label: "LeetCode Solved", value: liveData.leetcode.totalSolved, suffix: "+" },
    { label: "LeetCode Rating", value: liveData.leetcode.rating, suffix: "" },
    { label: "B.Tech CGPA", value: 8.48, isFloat: true, suffix: "/10" },
    { label: "CodeChef Rating", value: liveData.codechef.rating, suffix: "" },
  ];

  return (
    <motion.div
      className="hero-stats"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {dynamicStats.map((s, idx) => (
        <div key={idx} className="stat-box">
          <span className="stat-val gradient-text">
            <AnimatedCounter value={s.value} suffix={s.suffix} isFloat={s.isFloat} />
          </span>
          <span className="stat-lbl">{s.label}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
