import React from "react";
import { Trophy } from "lucide-react";
import { useLiveStats } from "../../context/LiveStatsContext";
import ScrollReveal from "../ScrollReveal";
import AchievementsBanner from "./AchievementsBanner";
import StatsSyncBar from "./StatsSyncBar";
import LeetCodeCard from "./LeetCodeCard";
import CodeChefCard from "./CodeChefCard";
import CodeforcesCard from "./CodeforcesCard";
import GfgCard from "./GfgCard";
import GitHubCard from "./GitHubCard";

const Achievements = () => {
  const { stats: liveData, loading, isLive, lastUpdated, refreshKey, refreshStats } = useLiveStats();

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <Trophy size={15} /> 05 / Milestones
            </span>
            <h2 className="section-title">
              Coding Profiles &amp; <span className="gradient-text">Milestones</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive problem solving and contest performance across competitive programming platforms.
            </p>
          </div>
        </ScrollReveal>

        <StatsSyncBar
          loading={loading}
          isLive={isLive}
          lastUpdated={lastUpdated}
          onRefresh={refreshStats}
        />

        <AchievementsBanner key={`banner-${refreshKey}`} liveData={liveData} />

        <div
          key={`cards-${refreshKey}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          <LeetCodeCard liveData={liveData} />
          <CodeChefCard liveData={liveData} />
          <CodeforcesCard liveData={liveData} />
          <GfgCard liveData={liveData} />
          <GitHubCard liveData={liveData} />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
