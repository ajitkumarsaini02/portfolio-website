import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import AnimatedCounter from "../AnimatedCounter";

const CodeforcesCard = ({ liveData }) => {
  return (
    <ScrollReveal direction="up" delay={0.3}>
      <TiltCard maxTilt={6}>
        <div className="glass-card" style={{ padding: "24px", borderRadius: "var(--radius-lg)", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ color: "#8B5CF6" }}><Terminal size={22} /></div>
              <h4 style={{ fontSize: "1.15rem" }}>Codeforces</h4>
            </div>
            <span className="badge badge-purple">@ajitkumarsaini02</span>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <motion.div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                border: "5px solid #8B5CF6",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
              whileHover={{ scale: 1.08 }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                <AnimatedCounter value={liveData.codeforces.rating} />
              </span>
              <span style={{ fontSize: "0.6rem", color: "#8B5CF6", fontFamily: "var(--font-mono)" }}>
                RATING
              </span>
            </motion.div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Problems Solved</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "#8B5CF6" }}>{liveData.codeforces.totalSolved}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#00B8D9" }}>● Easy</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.codeforces.easy}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#F59E0B" }}>● Medium</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.codeforces.medium}</strong>
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
            <div>Contests Participated: <strong>{liveData.codeforces.contestsParticipated} Rounds</strong></div>
            <div>Max Rating: <strong style={{ color: "#8B5CF6" }}>{liveData.codeforces.maxRating}</strong></div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export default CodeforcesCard;
