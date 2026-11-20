import React from "react";
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import AnimatedCounter from "../AnimatedCounter";

const GfgCard = ({ liveData }) => {
  return (
    <ScrollReveal direction="up" delay={0.35}>
      <TiltCard maxTilt={6}>
        <div className="glass-card" style={{ padding: "24px", borderRadius: "var(--radius-lg)", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ color: "#22C55E" }}><BookMarked size={22} /></div>
              <h4 style={{ fontSize: "1.15rem" }}>GeeksforGeeks</h4>
            </div>
            <span
              className="badge"
              style={{
                background: "rgba(34, 197, 94, 0.15)",
                color: "#22C55E",
                border: "1px solid rgba(34, 197, 94, 0.3)",
              }}
            >
              @ajitkumarsaini02
            </span>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <motion.div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                border: "5px solid #22C55E",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)",
              }}
              whileHover={{ scale: 1.08 }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                <AnimatedCounter value={liveData.gfg.totalSolved} />
              </span>
              <span style={{ fontSize: "0.6rem", color: "#22C55E", fontFamily: "var(--font-mono)" }}>
                SOLVED
              </span>
            </motion.div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#00B8D9" }}>● Easy</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.gfg.easySolved}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#F59E0B" }}>● Medium</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.gfg.mediumSolved}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "#EF4444" }}>● Hard</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.gfg.hardSolved}</strong>
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
            <div>Coding Practice: <strong style={{ color: "#22C55E" }}>Active Problem Solver</strong></div>
            <div>
              <a
                href="https://www.geeksforgeeks.org/profile/ajitkumarsaini02?tab=activity"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#22C55E", textDecoration: "none" }}
              >
                View GFG Profile →
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export default GfgCard;
