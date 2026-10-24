import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API_URL = 'https://coding-profile-service-v2-0.onrender.com/stats?leetcode=ajitkumarsaini02&codechef=ajitsaini94&gfg=ajitkumarsaini02';

const fallbackStats = {
  leetcode: {
    totalSolved: 697,
    rating: 1664,
    easySolved: 360,
    mediumSolved: 310,
    hardSolved: 27,
    maxRating: 1679,
    contestsParticipated: 24,
    globalRank: 150622
  },
  codechef: {
    totalSolved: 682,
    rating: 1455,
    maxRating: 1461,
    contestsParticipated: 36,
    stars: 2,
    globalRank: 32846,
    countryRank: 31146
  },
  gfg: {
    totalSolved: 89,
    easySolved: 39,
    mediumSolved: 45,
    hardSolved: 5
  },
  totalSolvedAll: 1468
};

const LiveStatsContext = createContext({
  stats: fallbackStats,
  loading: false,
  isLive: false,
  lastUpdated: null,
  refreshStats: () => {}
});

export function LiveStatsProvider({ children }) {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(API_URL, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      if (data && Array.isArray(data.profiles)) {
        const lc = data.profiles.find((p) => p.platform === 'leetcode') || fallbackStats.leetcode;
        const cc = data.profiles.find((p) => p.platform === 'codechef') || fallbackStats.codechef;
        const gfg = data.profiles.find((p) => p.platform === 'gfg') || fallbackStats.gfg;

        const total = (lc.totalSolved || 0) + (cc.totalSolved || 0) + (gfg.totalSolved || 0);

        setStats({
          leetcode: {
            totalSolved: lc.totalSolved || fallbackStats.leetcode.totalSolved,
            rating: lc.rating || fallbackStats.leetcode.rating,
            easySolved: lc.easySolved || fallbackStats.leetcode.easySolved,
            mediumSolved: lc.mediumSolved || fallbackStats.leetcode.mediumSolved,
            hardSolved: lc.hardSolved || fallbackStats.leetcode.hardSolved,
            maxRating: lc.maxRating || fallbackStats.leetcode.maxRating,
            contestsParticipated: lc.contestsParticipated || fallbackStats.leetcode.contestsParticipated,
            globalRank: lc.globalRank || fallbackStats.leetcode.globalRank
          },
          codechef: {
            totalSolved: cc.totalSolved || fallbackStats.codechef.totalSolved,
            rating: cc.rating || fallbackStats.codechef.rating,
            maxRating: cc.maxRating || fallbackStats.codechef.maxRating,
            contestsParticipated: cc.contestsParticipated || fallbackStats.codechef.contestsParticipated,
            stars: cc.stars || fallbackStats.codechef.stars,
            globalRank: cc.globalRank || fallbackStats.codechef.globalRank,
            countryRank: cc.countryRank || fallbackStats.codechef.countryRank
          },
          gfg: {
            totalSolved: gfg.totalSolved || fallbackStats.gfg.totalSolved,
            easySolved: gfg.easySolved || fallbackStats.gfg.easySolved,
            mediumSolved: gfg.mediumSolved || fallbackStats.gfg.mediumSolved,
            hardSolved: gfg.hardSolved || fallbackStats.gfg.hardSolved
          },
          totalSolvedAll: total || fallbackStats.totalSolvedAll
        });

        setIsLive(true);
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.warn('Live coding stats fetch failed, using fallback cache:', err);
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
        refreshStats: fetchStats
      }}
    >
      {children}
    </LiveStatsContext.Provider>
  );
}

export function useLiveStats() {
  return useContext(LiveStatsContext);
}
