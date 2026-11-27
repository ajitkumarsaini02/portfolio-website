import React from "react";
import { personalInfo } from "../../data/portfolioData";
import { useLiveStats } from "../../context/LiveStatsContext";

const FooterSocials = () => {
  const { stats: liveData } = useLiveStats();

  return (
    <div className="footer-col">
      <h4>Profiles &amp; Socials</h4>
      <ul className="footer-links">
        <li>
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
            GitHub (@ajitkumarsaini02 • {liveData.github.publicRepos} Repos)
          </a>
        </li>
        <li>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer">
            LeetCode ({liveData.leetcode.totalSolved}+ Solved • Rating {liveData.leetcode.rating})
          </a>
        </li>
        <li>
          <a href={personalInfo.socials.codechef} target="_blank" rel="noreferrer">
            CodeChef ({liveData.codechef.stars}★ • Rating {liveData.codechef.rating})
          </a>
        </li>
        {personalInfo.socials.codeforces && (
          <li>
            <a href={personalInfo.socials.codeforces} target="_blank" rel="noreferrer">
              Codeforces (Rating {liveData.codeforces.rating} • {liveData.codeforces.totalSolved} Solved)
            </a>
          </li>
        )}
        <li>
          <a href={personalInfo.socials.geeksforgeeks} target="_blank" rel="noreferrer">
            GeeksforGeeks ({liveData.gfg.totalSolved} Solved)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocials;
