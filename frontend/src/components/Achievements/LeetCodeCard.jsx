import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import AnimatedCounter from "../AnimatedCounter";

const LeetCodeCard = ({ liveData }) => {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <TiltCard maxTilt={6}>
        <div className="glass-card" style={{ padding: "24px", borderRadius: "var(--radius-lg)", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ color: "var(--primary)" }}><Code size={22} /></div>
              <h4 style={{ fontSize: "1.15rem" }}>LeetCode</h4>
            </div>
            <span className="badge badge-cyan">@ajitkumarsaini02</span>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <motion.div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                border: "5px solid var(--primary)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px var(--primary-glow)",
              }}
              whileHover={{ scale: 1.08 }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                <AnimatedCounter value={liveData.leetcode.totalSolved} />
              </span>
              <span style={{ fontSize: "0.6rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                SOLVED
              </span>
            </motion.div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#00B8D9" }}>● Easy</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.leetcode.easySolved}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#F59E0B" }}>● Medium</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.leetcode.mediumSolved}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#EF4444" }}>● Hard</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.leetcode.hardSolved}</strong>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "12px",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div>
              Contest Rating: <strong style={{ color: "var(--primary)" }}>{liveData.leetcode.rating}</strong> (Peak {liveData.leetcode.maxRating})
            </div>
            <div>
              Contests: <strong>{liveData.leetcode.contestsParticipated}</strong> | Global Rank: <strong>Top ~{Number(liveData.leetcode.globalRank).toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export default LeetCodeCard;
