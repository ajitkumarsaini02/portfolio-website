import React from "react";
import AnimatedCounter from "../AnimatedCounter";
import ScrollReveal from "../ScrollReveal";

const AchievementsBanner = ({ liveData }) => {
  return (
    <ScrollReveal delay={0.1}>
      <div
        className="glass-card"
        style={{
          padding: "24px 28px",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "36px",
          background:
            "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(20, 184, 166, 0.08) 100%)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            TOTAL DSA SOLVED
          </span>
          <h3 style={{ fontSize: "2.1rem", color: "var(--primary)", margin: "4px 0" }}>
            <AnimatedCounter value={liveData.totalSolvedAll} suffix="+" />
          </h3>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>LC + CC + GFG + CF</span>
        </div>

        <div style={{ height: "40px", width: "1px", background: "var(--border-subtle)" }} />

        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            LEETCODE RATING
          </span>
          <h3 style={{ fontSize: "2.1rem", color: "#38BDF8", margin: "4px 0" }}>
            <AnimatedCounter value={liveData.leetcode.rating} />
          </h3>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Peak: {liveData.leetcode.maxRating}
          </span>
        </div>

        <div style={{ height: "40px", width: "1px", background: "var(--border-subtle)" }} />

        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            CODECHEF RATING
          </span>
          <h3 style={{ fontSize: "2.1rem", color: "#F59E0B", margin: "4px 0" }}>
            <AnimatedCounter value={liveData.codechef.rating} />
          </h3>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {liveData.codechef.stars}★ (Peak: {liveData.codechef.maxRating})
          </span>
        </div>

        <div style={{ height: "40px", width: "1px", background: "var(--border-subtle)" }} />

        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            CODEFORCES RATING
          </span>
          <h3 style={{ fontSize: "2.1rem", color: "#8B5CF6", margin: "4px 0" }}>
            <AnimatedCounter value={liveData.codeforces.rating} />
          </h3>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {liveData.codeforces.totalSolved} Solved
          </span>
        </div>

        <div style={{ height: "40px", width: "1px", background: "var(--border-subtle)" }} />

        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
            GITHUB REPOSITORIES
          </span>
          <h3 style={{ fontSize: "2.1rem", color: "#10B981", margin: "4px 0" }}>
            <AnimatedCounter value={liveData.github.publicRepos} suffix=" Repos" />
          </h3>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {liveData.github.pullRequests}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AchievementsBanner;
