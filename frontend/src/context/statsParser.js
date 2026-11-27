import { fallbackStats } from "./fallbackStats";

export const parseLiveStats = (statsData, githubData, cfDirectData) => {
  let parsed = { ...fallbackStats };

  if (statsData && Array.isArray(statsData.profiles)) {
    const lc = statsData.profiles.find((p) => p.platform === "leetcode") || fallbackStats.leetcode;
    const cc = statsData.profiles.find((p) => p.platform === "codechef") || fallbackStats.codechef;
    const gfg = statsData.profiles.find((p) => p.platform === "gfg") || fallbackStats.gfg;
    const cf = statsData.profiles.find((p) => p.platform === "codeforces") || fallbackStats.codeforces;

    const total =
      (lc.totalSolved || fallbackStats.leetcode.totalSolved) +
      (cc.totalSolved || fallbackStats.codechef.totalSolved) +
      (gfg.totalSolved || fallbackStats.gfg.totalSolved) +
      (cf.totalSolved || fallbackStats.codeforces.totalSolved);

    parsed = {
      ...parsed,
      leetcode: {
        totalSolved: lc.totalSolved || fallbackStats.leetcode.totalSolved,
        rating: lc.rating || fallbackStats.leetcode.rating,
        easySolved: lc.easySolved || fallbackStats.leetcode.easySolved,
        mediumSolved: lc.mediumSolved || fallbackStats.leetcode.mediumSolved,
        hardSolved: lc.hardSolved || fallbackStats.leetcode.hardSolved,
        maxRating: lc.maxRating || fallbackStats.leetcode.maxRating,
        contestsParticipated: lc.contestsParticipated || fallbackStats.leetcode.contestsParticipated,
        globalRank: lc.globalRank || fallbackStats.leetcode.globalRank,
      },
      codechef: {
        totalSolved: cc.totalSolved || fallbackStats.codechef.totalSolved,
        rating: cc.rating || fallbackStats.codechef.rating,
        maxRating: cc.maxRating || fallbackStats.codechef.maxRating,
        contestsParticipated: cc.contestsParticipated || fallbackStats.codechef.contestsParticipated,
        stars: cc.stars || fallbackStats.codechef.stars,
        globalRank: cc.globalRank || fallbackStats.codechef.globalRank,
        countryRank: cc.countryRank || fallbackStats.codechef.countryRank,
      },
      gfg: {
        totalSolved: gfg.totalSolved || fallbackStats.gfg.totalSolved,
        easySolved: gfg.easySolved || fallbackStats.gfg.easySolved,
        mediumSolved: gfg.mediumSolved || fallbackStats.gfg.mediumSolved,
        hardSolved: gfg.hardSolved || fallbackStats.gfg.hardSolved,
      },
      codeforces: {
        totalSolved: cf.totalSolved || fallbackStats.codeforces.totalSolved,
        rating: cfDirectData?.rating || cf.rating || fallbackStats.codeforces.rating,
        maxRating: cfDirectData?.maxRating || cf.maxRating || fallbackStats.codeforces.maxRating,
        contestsParticipated: cf.contestsParticipated || fallbackStats.codeforces.contestsParticipated,
        easy: cf.questionsByType?.easy || fallbackStats.codeforces.easy,
        medium: cf.questionsByType?.medium || fallbackStats.codeforces.medium,
      },
      totalSolvedAll: total || fallbackStats.totalSolvedAll,
    };
  }

  if (githubData) {
    parsed.github = {
      username: githubData.login || fallbackStats.github.username,
      publicRepos: githubData.public_repos ?? fallbackStats.github.publicRepos,
      followers: githubData.followers ?? fallbackStats.github.followers,
      pullRequests: fallbackStats.github.pullRequests,
    };
  }

  return parsed;
};
