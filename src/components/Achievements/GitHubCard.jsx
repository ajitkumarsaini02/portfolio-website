import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import AnimatedCounter from "../AnimatedCounter";

const GitHubCard = ({ liveData }) => {
  return (
    <ScrollReveal direction="up" delay={0.4}>
      <TiltCard maxTilt={6}>
        <div className="glass-card" style={{ padding: "24px", borderRadius: "var(--radius-lg)", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ color: "#10B981" }}><GitBranch size={22} /></div>
              <h4 style={{ fontSize: "1.15rem" }}>GitHub Live</h4>
            </div>
            <span className="badge badge-emerald">@ajitkumarsaini02</span>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <motion.div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                border: "5px solid #10B981",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)",
              }}
              whileHover={{ scale: 1.08 }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                <AnimatedCounter value={liveData.github.publicRepos} />
              </span>
              <span style={{ fontSize: "0.6rem", color: "#10B981", fontFamily: "var(--font-mono)" }}>
                REPOS
              </span>
            </motion.div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Public Repos</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.github.publicRepos}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Followers</span>
                <strong style={{ fontFamily: "var(--font-mono)" }}>{liveData.github.followers}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Open Source</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "#10B981" }}>GSSoC 2026</strong>
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
            <div>Merged PRs: <strong>{liveData.github.pullRequests}</strong></div>
            <div>
              <a
                href="https://github.com/ajitkumarsaini02"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#10B981", textDecoration: "none" }}
              >
                View GitHub Profile →
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export default GitHubCard;
