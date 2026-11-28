import React, { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ProjectUptimeBadge = ({ projectTitle, demoUrl }) => {
  const [uptimeData, setUptimeData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const checkUptime = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/uptime`, { signal: AbortSignal.timeout(4000) });
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json?.projects) {
            setUptimeData(json.projects);
          }
        }
      } catch {
        // Backend offline or fallback
      }
    };
    checkUptime();
    return () => { isMounted = false; };
  }, []);

  if (!uptimeData) return null;

  const isCodeTrack = (projectTitle || "").toLowerCase().includes("codetrack") || (demoUrl || "").includes("codetrack");
  const target = isCodeTrack ? uptimeData.codetrack : null;

  if (!target || !target.status) return null;

  const isOnline = target.status === "online";

  return (
    <span
      className={`uptime-badge ${isOnline ? "uptime-online" : "uptime-alert"}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "0.75rem",
        fontWeight: "600",
        padding: "3px 8px",
        borderRadius: "999px",
        backgroundColor: isOnline ? "rgba(16, 185, 129, 0.12)" : "rgba(245, 158, 11, 0.12)",
        color: isOnline ? "#10B981" : "#F59E0B",
        border: `1px solid ${isOnline ? "rgba(16, 185, 129, 0.3)" : "rgba(245, 158, 11, 0.3)"}`,
      }}
      title={`Last checked: ${target.lastChecked ? new Date(target.lastChecked).toLocaleTimeString() : "Just now"}`}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: isOnline ? "#10B981" : "#F59E0B",
          boxShadow: isOnline ? "0 0 8px #10B981" : "none",
        }}
      />
      {isOnline ? `Live (${target.latencyMs}ms)` : "Spinning Up"}
    </span>
  );
};

export default ProjectUptimeBadge;
