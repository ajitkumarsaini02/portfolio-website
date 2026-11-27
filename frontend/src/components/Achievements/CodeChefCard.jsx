import React from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import AnimatedCounter from "../AnimatedCounter";

const CodeChefCard = ({ liveData }) => {
  return (
    <ScrollReveal direction="up" delay={0.2}>
      <TiltCard maxTilt={6}>
        <div className="glass-card" style={{ padding: "24px", borderRadius: "var(--radius-lg)", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ color: "#F59E0B" }}><Crown size={22} /></div>
              <h4 style={{ fontSize: "1.15rem" }}>CodeChef</h4>
            </div>
            <span
              className="badge"
              style={{
                background: "rgba(245, 158, 11, 0.15)",
                color: "#F59E0B",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              {liveData.codechef.stars}★ Div 3
            </span>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <motion.div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                border: "5px solid #F59E0B",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)",
              }}
              whileHover={{ scale: 1.08 }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                <AnimatedCounter value={liveData.codechef.rating} />
              </span>
              <span style={{ fontSize: "0.6rem", color: "#F59E0B", fontFamily: "var(--font-mono)" }}>
                RATING
              </span>
            </motion.div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Peak Rating</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "#F59E0B" }}>{liveData.codechef.maxRating}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Solved</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.codechef.totalSolved}+</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Contests</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.codechef.contestsParticipated}</strong>
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
            <div>Global Rank: <strong>#{Number(liveData.codechef.globalRank).toLocaleString()}</strong></div>
            <div>Country Rank: <strong>#{Number(liveData.codechef.countryRank).toLocaleString()}</strong></div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export default CodeChefCard;
