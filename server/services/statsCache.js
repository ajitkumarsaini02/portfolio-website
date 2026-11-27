import NodeCache from "node-cache";

// Cache for 30 minutes (1800 seconds) by default
const cache = new NodeCache({ stdTTL: 1800, checkperiod: 120 });
const STATS_CACHE_KEY = "live_coding_stats";

export const initialStatsFallback = {
  leetcode: { totalSolved: 746, rating: 1750, maxRating: 1750, badge: "Knight Candidate", streak: 100 },
  codechef: { stars: 2, rating: 1525, maxRating: 1525, globalRank: 18450, totalSolved: 695, contestsParticipated: 24 },
  codeforces: { rating: 1022, rank: "Newbie", maxRating: 1022, totalSolved: 36 },
  gfg: { totalSolved: 95, codingScore: 320, campusRank: 4 },
  github: { publicRepos: 23, followers: 6, pullRequests: 20 },
  totalSolvedAll: 1572,
  isLive: false,
  lastUpdated: new Date().toISOString(),
};

export const getCachedStats = () => cache.get(STATS_CACHE_KEY);

export const setCachedStats = (data) => {
  const payload = {
    ...data,
    isLive: true,
    lastUpdated: new Date().toISOString(),
  };
  cache.set(STATS_CACHE_KEY, payload);
  return payload;
};

export const clearStatsCache = () => cache.del(STATS_CACHE_KEY);
