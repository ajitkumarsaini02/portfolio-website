import { getCachedStats, setCachedStats, initialStatsFallback } from "./statsCache.js";

const STATS_API =
  "https://coding-profile-service-v2-0.onrender.com/stats?leetcode=ajitkumarsaini02&codechef=ajitsaini94&gfg=ajitkumarsaini02&codeforces=ajitkumarsaini02";
const GITHUB_API = "https://api.github.com/users/ajitkumarsaini02";
const CF_API = "https://codeforces.com/api/user.info?handles=ajitkumarsaini02";

const fetchUnifiedStats = async (forceFresh = false) => {
  const cached = getCachedStats();
  if (cached && !forceFresh) return cached;

  try {
    const headers = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
    const [statsRes, ghRes, cfRes] = await Promise.allSettled([
      fetch(STATS_API, { signal: AbortSignal.timeout(10000) }),
      fetch(GITHUB_API, { headers, signal: AbortSignal.timeout(6000) }),
      fetch(CF_API, { signal: AbortSignal.timeout(6000) }),
    ]);

    const statsData = statsRes.status === "fulfilled" && statsRes.value.ok ? await statsRes.value.json() : null;
    const ghData = ghRes.status === "fulfilled" && ghRes.value.ok ? await ghRes.value.json() : null;
    const cfJson = cfRes.status === "fulfilled" && cfRes.value.ok ? await cfRes.value.json() : null;
    const cfUser = cfJson?.status === "OK" && Array.isArray(cfJson.result) ? cfJson.result[0] : null;

    const base = initialStatsFallback;
    const lcSolved = Number(statsData?.leetcode?.totalSolved || statsData?.leetcode?.solved || base.leetcode.totalSolved);
    const ccSolved = Number(statsData?.codechef?.totalSolved || statsData?.codechef?.solved || base.codechef.totalSolved);
    const cfSolved = Number(statsData?.codeforces?.totalSolved || cfUser?.totalSolved || base.codeforces.totalSolved);
    const gfgSolved = Number(statsData?.gfg?.totalSolved || statsData?.gfg?.solved || base.gfg.totalSolved);

    const unified = {
      leetcode: {
        totalSolved: lcSolved,
        rating: Number(statsData?.leetcode?.rating || base.leetcode.rating),
        maxRating: Number(statsData?.leetcode?.maxRating || statsData?.leetcode?.rating || base.leetcode.maxRating),
        badge: statsData?.leetcode?.badge || base.leetcode.badge,
        streak: base.leetcode.streak,
      },
      codechef: {
        stars: Number(statsData?.codechef?.stars?.toString().replace(/\D/g, "") || base.codechef.stars),
        rating: Number(statsData?.codechef?.rating || base.codechef.rating),
        maxRating: Number(statsData?.codechef?.highestRating || base.codechef.maxRating),
        globalRank: Number(statsData?.codechef?.globalRank || base.codechef.globalRank),
        totalSolved: ccSolved,
        contestsParticipated: Number(statsData?.codechef?.contestsParticipated || base.codechef.contestsParticipated),
      },
      codeforces: {
        rating: Number(cfUser?.rating || statsData?.codeforces?.rating || base.codeforces.rating),
        rank: cfUser?.rank || statsData?.codeforces?.rank || base.codeforces.rank,
        maxRating: Number(cfUser?.maxRating || base.codeforces.maxRating),
        totalSolved: cfSolved,
      },
      gfg: {
        totalSolved: gfgSolved,
        codingScore: Number(statsData?.gfg?.codingScore || base.gfg.codingScore),
        campusRank: Number(statsData?.gfg?.campusRank || base.gfg.campusRank),
      },
      github: {
        publicRepos: Number(ghData?.public_repos ?? base.github.publicRepos),
        followers: Number(ghData?.followers ?? base.github.followers),
        pullRequests: 20,
      },
      totalSolvedAll: lcSolved + ccSolved + cfSolved + gfgSolved,
    };

    return setCachedStats(unified);
  } catch (error) {
    console.warn("⚠️  [StatsFetcher] Fetch error, returning fallback:", error.message);
    return cached || initialStatsFallback;
  }
};

export { fetchUnifiedStats };
export default fetchUnifiedStats;
