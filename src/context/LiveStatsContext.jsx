import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STATS_API_URL =
  'https://coding-profile-service-v2-0.onrender.com/stats?leetcode=ajitkumarsaini02&codechef=ajitsaini94&gfg=ajitkumarsaini02&codeforces=ajitkumarsaini02';
const GITHUB_API_URL = 'https://api.github.com/users/ajitkumarsaini02';

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
  codeforces: {
    totalSolved: 26,
    rating: 668,
    maxRating: 668,
    contestsParticipated: 2,
    easy: 23,
    medium: 3
  },
  github: {
    username: 'ajitkumarsaini02',
    publicRepos: 25,
    followers: 4,
    pullRequests: '10+ Merged'
  },
  totalSolvedAll: 1494
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

      // Fetch coding profile stats & github stats in parallel
      const [statsRes, githubRes] = await Promise.allSettled([
        fetch(STATS_API_URL, { signal: controller.signal }),
        fetch(GITHUB_API_URL, { signal: controller.signal })
      ]);

      clearTimeout(timeoutId);

      let parsedStats = { ...fallbackStats };

      if (statsRes.status === 'fulfilled' && statsRes.value.ok) {
        const data = await statsRes.value.json();
        if (data && Array.isArray(data.profiles)) {
          const lc = data.profiles.find((p) => p.platform === 'leetcode') || fallbackStats.leetcode;
          const cc = data.profiles.find((p) => p.platform === 'codechef') || fallbackStats.codechef;
          const gfg = data.profiles.find((p) => p.platform === 'gfg') || fallbackStats.gfg;
          const cf = data.profiles.find((p) => p.platform === 'codeforces') || fallbackStats.codeforces;

          const total =
            (lc.totalSolved || 0) +
            (cc.totalSolved || 0) +
            (gfg.totalSolved || 0) +
            (cf.totalSolved || 0);

          parsedStats = {
            ...parsedStats,
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
            codeforces: {
              totalSolved: cf.totalSolved || fallbackStats.codeforces.totalSolved,
              rating: cf.rating || fallbackStats.codeforces.rating,
              maxRating: cf.maxRating || fallbackStats.codeforces.maxRating,
              contestsParticipated: cf.contestsParticipated || fallbackStats.codeforces.contestsParticipated,
              easy: cf.questionsByType?.easy || fallbackStats.codeforces.easy,
              medium: cf.questionsByType?.medium || fallbackStats.codeforces.medium
            },
            totalSolvedAll: total || fallbackStats.totalSolvedAll
          };
          setIsLive(true);
        }
      }

      if (githubRes.status === 'fulfilled' && githubRes.value.ok) {
        const ghData = await githubRes.value.json();
        parsedStats.github = {
          username: ghData.login || 'ajitkumarsaini02',
          publicRepos: ghData.public_repos || 25,
          followers: ghData.followers || 4,
          pullRequests: '10+ Merged (GSSoC)'
        };
      }

      setStats(parsedStats);
      setLastUpdated(new Date().toLocaleTimeString());
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
