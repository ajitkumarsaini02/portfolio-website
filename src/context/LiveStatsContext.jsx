import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fallbackStats } from "./fallbackStats";
import { parseLiveStats } from "./statsParser";

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

export const LiveStatsProvider = ({ children }) => {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);
      const cacheBust = `_t=${Date.now()}`;

      const [statsRes, githubRes, cfRes] = await Promise.allSettled([
        fetch(`${STATS_API_URL}&${cacheBust}`, { signal: controller.signal, cache: "no-store" }),
        fetch(`${GITHUB_API_URL}?${cacheBust}`, { signal: controller.signal, cache: "no-store" }),
        fetch(`${CF_API_URL}&${cacheBust}`, { signal: controller.signal, cache: "no-store" }),
      ]);

      clearTimeout(timeoutId);

      const statsData = statsRes.status === "fulfilled" && statsRes.value.ok ? await statsRes.value.json() : null;
      const ghData = githubRes.status === "fulfilled" && githubRes.value.ok ? await githubRes.value.json() : null;
      const cfJson = cfRes.status === "fulfilled" && cfRes.value.ok ? await cfRes.value.json() : null;
      const cfDirect = cfJson?.status === "OK" && Array.isArray(cfJson.result) ? cfJson.result[0] : null;

      if (statsData || ghData || cfDirect) {
        setIsLive(true);
      }
      setStats(parseLiveStats(statsData, ghData, cfDirect));
      setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setRefreshKey((prev) => prev + 1);
    } catch (err) {
      console.warn("Live coding stats fetch failed, using fallback cache:", err);
      setIsLive(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <LiveStatsContext.Provider
      value={{
        stats,
        loading,
        isLive,
        lastUpdated,
        refreshKey,
        refreshStats: fetchStats,
      }}
    >
      {children}
    </LiveStatsContext.Provider>
  );
};

export const useLiveStats = () => useContext(LiveStatsContext);
