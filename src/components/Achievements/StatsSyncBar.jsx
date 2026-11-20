import React from "react";
import { motion } from "framer-motion";
import { RotateCw, CheckCircle2 } from "lucide-react";

const platforms = ["LeetCode", "CodeChef", "Codeforces", "GFG", "GitHub"];

const StatsSyncBar = ({ loading, isLive, lastUpdated, onRefresh }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "14px",
        marginBottom: "20px",
        padding: "12px 18px",
        borderRadius: "var(--radius-md)",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid var(--border-color)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: isLive ? "#10B981" : "#F59E0B",
              boxShadow: isLive ? "0 0 10px #10B981" : "none",
            }}
          />
          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>
            {loading ? "Refreshing all platforms..." : "All 5 Platforms Synced"}
          </span>
          {lastUpdated && (
            <span style={{ color: "var(--text-dim)", fontSize: "0.78rem" }}>
              • {lastUpdated}
            </span>
          )}
        </div>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {platforms.map((p) => (
            <span
              key={p}
              style={{
                fontSize: "0.68rem",
                padding: "2px 8px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {p} {isLive && "✓"}
            </span>
          ))}
        </div>
      </div>

      <motion.button
        onClick={onRefresh}
        disabled={loading}
        className="btn btn-secondary btn-sm"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 15px",
          fontSize: "0.82rem",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
        }}
        whileHover={{ scale: loading ? 1 : 1.03 }}
        whileTap={{ scale: loading ? 1 : 0.96 }}
        title="Refresh all platforms: LeetCode, CodeChef, Codeforces, GFG and GitHub"
      >
        <motion.div
          animate={{ rotate: loading ? 360 : 0 }}
          transition={{ repeat: loading ? Infinity : 0, duration: 0.9, ease: "linear" }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <RotateCw size={14} />
        </motion.div>
        <span>{loading ? "Syncing All..." : "Refresh All Stats"}</span>
      </motion.button>
    </div>
  );
};

export default StatsSyncBar;
