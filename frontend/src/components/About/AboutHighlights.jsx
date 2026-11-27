import React from "react";
import { motion } from "framer-motion";
import { useLiveStats } from "../../context/LiveStatsContext";
import ScrollReveal from "../ScrollReveal";

const AboutHighlights = ({ highlights }) => {
  const { stats: liveData } = useLiveStats();

  const bioParagraphs = [
    "I am a Computer Science undergraduate (B.Tech, CGPA 8.48) with hands-on experience building full-stack MERN applications and high-performance, responsive front-end projects.",
    `My key full-stack creation is CodeTrack — a DSA tracking platform syncing data from 5 coding platforms through a JWT-secured REST API. I have solved ${liveData.leetcode.totalSolved}+ LeetCode problems (Contest Rating: ${liveData.leetcode.rating}, Peak: ${liveData.leetcode.maxRating}), achieved ${liveData.codechef.stars}-Star status on CodeChef (Rating ${liveData.codechef.rating}), and contributed ${liveData.github.pullRequests} pull requests to open-source organizations in GSSoC 2026.`,
    "I am actively looking for software engineering internships and developer opportunities where I can build reliable, scalable web applications.",
  ];

  return (
    <ScrollReveal direction="left" delay={0.3} className="about-text">
      <h3 className="about-subtitle">
        Computer Science Undergraduate &amp; Full-Stack MERN Developer
      </h3>

      {bioParagraphs.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}

      <ul className="about-highlights">
        {highlights.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <IconComponent size={18} className="check-icon" />
              <span>{item.text}</span>
            </motion.li>
          );
        })}
      </ul>
    </ScrollReveal>
  );
};

export default AboutHighlights;
