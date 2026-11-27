import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fallbackStats } from "./fallbackStats";
import { parseLiveStats } from "./statsParser";

const API_BASE = import.meta.env.VITE_API_URL || "";
const STATS_API_URL =
  "https://coding-profile-service-v2-0.onrender.com/stats?leetcode=ajitkumarsaini02&codechef=ajitsaini94&gfg=ajitkumarsaini02&codeforces=ajitkumarsaini02";
const GITHUB_API_URL = "https://api.github.com/users/ajitkumarsaini02";
const CF_API_URL = "https://codeforces.com/api/user.info?handles=ajitkumarsaini02";

const LiveStatsContext = createContext({
  stats: fallbackStats,
  loading: false,
  isLive: false,
  lastUpdated: null,
  refreshKey: 0,
  refreshStats: () => {},
});

const LiveStatsProvider = ({ children }) => {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const bRes = await fetch(`${API_BASE}/api/stats`, { signal: AbortSignal.timeout(3000) }).catch(() => null);
      if (bRes?.ok) {
        const bJson = await bRes.json().catch(() => null);
        if (bJson?.success && bJson?.stats) {
          setStats(bJson.stats);
          setIsLive(true);
          setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
          setRefreshKey((k) => k + 1);
          return;
        }
      }

      const bust = `_t=${Date.now()}`;
      const [statsRes, ghRes, cfRes] = await Promise.allSettled([
        fetch(`${STATS_API_URL}&${bust}`, { signal: AbortSignal.timeout(10000) }),
        fetch(`${GITHUB_API_URL}?${bust}`, { signal: AbortSignal.timeout(5000) }),
        fetch(`${CF_API_URL}&${bust}`, { signal: AbortSignal.timeout(5000) }),
      ]);

      const statsData = statsRes.status === "fulfilled" && statsRes.value.ok ? await statsRes.value.json() : null;
      const ghData = ghRes.status === "fulfilled" && ghRes.value.ok ? await ghRes.value.json() : null;
      const cfJson = cfRes.status === "fulfilled" && cfRes.value.ok ? await cfRes.value.json() : null;
      const cfDirect = cfJson?.status === "OK" && Array.isArray(cfJson.result) ? cfJson.result[0] : null;

      if (statsData || ghData || cfDirect) setIsLive(true);
      setStats(parseLiveStats(statsData, ghData, cfDirect));
      setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setRefreshKey((k) => k + 1);
    } catch (err) {
      console.warn("Live stats fetch failed, using fallback:", err);
      setIsLive(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <LiveStatsContext.Provider value={{ stats, loading, isLive, lastUpdated, refreshKey, refreshStats: fetchStats }}>
      {children}
    </LiveStatsContext.Provider>
  );
};

const useLiveStats = () => useContext(LiveStatsContext);

export { LiveStatsContext, LiveStatsProvider, useLiveStats };
export default LiveStatsProvider;
