import { useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

export const trackResumeDownload = async (source = "general") => {
  try {
    await fetch(`${API_BASE}/api/analytics/resume`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source }),
    });
  } catch {
    // Fail silently in frontend
  }
};

export const useAnalyticsTracker = () => {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio_session_visit");
    if (!hasVisited) {
      fetch(`${API_BASE}/api/analytics/visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: window.location.pathname }),
      }).catch(() => null);
      sessionStorage.setItem("portfolio_session_visit", "true");
    }
  }, []);
};
