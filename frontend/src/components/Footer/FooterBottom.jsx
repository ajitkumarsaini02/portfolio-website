import React from "react";
import { ArrowUp, RotateCw, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useLiveStats } from "../../context/LiveStatsContext";

const FooterBottom = ({ scrollToTop }) => {
  const { loading, lastUpdated, refreshStats, isLive } = useLiveStats();

  return (
    <div className="container footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Ajit Kumar Saini. Crafted with modern React &amp; Vite.</p>
        <span style={{ fontSize: "0.76rem", color: "var(--text-dim)", display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255, 255, 255, 0.04)", padding: "3px 8px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: isLive ? "#10B981" : "#F59E0B" }} />
          Live Synced {lastUpdated ? `(${lastUpdated})` : ""}
        </span>
        <a href="/admin" style={{ fontSize: "0.76rem", color: "var(--text-dim)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }} title="Admin Panel">
          <Lock size={11} /> Admin
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <motion.button onClick={refreshStats} disabled={loading} className="btn btn-outline btn-sm" style={{ gap: "6px", padding: "6px 12px", fontSize: "0.8rem" }} title="Refresh All Coding Stats" aria-label="Refresh live stats" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <motion.div animate={{ rotate: loading ? 360 : 0 }} transition={{ repeat: loading ? Infinity : 0, duration: 0.9, ease: "linear" }} style={{ display: "flex", alignItems: "center" }}>
            <RotateCw size={14} />
          </motion.div>
          <span>{loading ? "Syncing..." : "Refresh Stats"}</span>
        </motion.button>

        <button onClick={scrollToTop} className="btn btn-outline btn-sm" style={{ gap: "6px" }} title="Scroll to Top" aria-label="Scroll to top of page">
          <ArrowUp size={16} /> Back to Top
        </button>
      </div>
    </div>
  );
};

export default FooterBottom;
