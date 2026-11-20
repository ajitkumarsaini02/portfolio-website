import React from "react";
import { ShieldCheck, Activity } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { useLiveStats } from "../../context/LiveStatsContext";

const FooterBrand = ({ scrollToSection }) => {
  const { stats: liveData, isLive } = useLiveStats();

  return (
    <div className="footer-brand">
      <a
        href="/"
        className="logo"
        style={{ textDecoration: "none" }}
        onClick={(e) => scrollToSection(e, "hero")}
      >
        <span className="logo-tag">&lt;</span>
        <span>Ajit</span>
        <span className="logo-tag">/&gt;</span>
      </a>
      <p>
        <strong>{personalInfo.name}</strong> • Full-Stack MERN Developer and
        Competitive Programmer. Crafting robust software systems, clean UI
        architectures, and intuitive digital experiences.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "12px",
          fontSize: "0.82rem",
          color: "var(--text-muted)",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <ShieldCheck size={16} style={{ color: "var(--primary)" }} />
          <span>9 Verified Industry &amp; Cloud Accreditations</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <Activity size={16} style={{ color: isLive ? "#10B981" : "#F59E0B" }} />
          <span style={{ color: "var(--text-main)" }}>
            <strong>{liveData.totalSolvedAll}+</strong> Live DSA Problems Solved Across 5 Platforms
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;
