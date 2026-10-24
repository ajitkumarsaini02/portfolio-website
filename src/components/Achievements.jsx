import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Flame, GitPullRequest, Award, Code, RefreshCw, BookOpen, Terminal, GitBranch } from 'lucide-react';
import { useLiveStats } from '../context/LiveStatsContext';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import AnimatedCounter from './AnimatedCounter';

export default function Achievements() {
  const { stats: liveData, isLive, loading, refreshStats, lastUpdated } = useLiveStats();

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

        {/* Global Stats Summary Banner */}
        <ScrollReveal delay={0.1}>
          <div
            className="glass-card"
            style={{
              padding: '24px 28px',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '36px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(20, 184, 166, 0.08) 100%)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>TOTAL DSA SOLVED</span>
              <h3 style={{ fontSize: '2.1rem', color: 'var(--primary)', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.totalSolvedAll} suffix="+" />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LC + CC + GFG + CF</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>LEETCODE RATING</span>
              <h3 style={{ fontSize: '2.1rem', color: '#38BDF8', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.leetcode.rating} />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Peak: {liveData.leetcode.maxRating}</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CODECHEF RATING</span>
              <h3 style={{ fontSize: '2.1rem', color: '#F59E0B', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.codechef.rating} />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{liveData.codechef.stars}★ (Peak: {liveData.codechef.maxRating})</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CODEFORCES RATING</span>
              <h3 style={{ fontSize: '2.1rem', color: '#8B5CF6', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.codeforces.rating} />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{liveData.codeforces.totalSolved} Solved</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>GITHUB REPOSITORIES</span>
              <h3 style={{ fontSize: '2.1rem', color: '#10B981', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.github.publicRepos} suffix=" Repos" />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{liveData.github.pullRequests}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Detailed Profile Deep-Dive Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {/* Card 1: LeetCode */}
          <ScrollReveal direction="up" delay={0.1}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: 'var(--primary)' }}><Code size={22} /></div>
                    <h4 style={{ fontSize: '1.15rem' }}>LeetCode</h4>
                  </div>
                  <span className="badge badge-cyan">@ajitkumarsaini02</span>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <motion.div
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      border: '5px solid var(--primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px var(--primary-glow)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.leetcode.totalSolved} />
                    </span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>SOLVED</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: '#00B8D9' }}>● Easy</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.leetcode.easySolved}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: '#F59E0B' }}>● Medium</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.leetcode.mediumSolved}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: '#EF4444' }}>● Hard</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.leetcode.hardSolved}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>Contest Rating: <strong style={{ color: 'var(--primary)' }}>{liveData.leetcode.rating}</strong> (Peak {liveData.leetcode.maxRating})</div>
                  <div>Contests: <strong>{liveData.leetcode.contestsParticipated}</strong> | Global Rank: <strong>Top ~{Number(liveData.leetcode.globalRank).toLocaleString()}</strong></div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 2: CodeChef */}
          <ScrollReveal direction="up" delay={0.2}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: '#F59E0B' }}><Crown size={22} /></div>
                    <h4 style={{ fontSize: '1.15rem' }}>CodeChef</h4>
                  </div>
                  <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    {liveData.codechef.stars}★ Div 3
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <motion.div
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      border: '5px solid #F59E0B',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.codechef.rating} />
                    </span>
                    <span style={{ fontSize: '0.6rem', color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>RATING</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Peak Rating</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: '#F59E0B' }}>{liveData.codechef.maxRating}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Solved</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.codechef.totalSolved}+</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Contests</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.codechef.contestsParticipated}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>Global Rank: <strong>#{Number(liveData.codechef.globalRank).toLocaleString()}</strong></div>
                  <div>Country Rank: <strong>#{Number(liveData.codechef.countryRank).toLocaleString()}</strong></div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 3: Codeforces */}
          <ScrollReveal direction="up" delay={0.3}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: '#8B5CF6' }}><Terminal size={22} /></div>
                    <h4 style={{ fontSize: '1.15rem' }}>Codeforces</h4>
                  </div>
                  <span className="badge badge-purple">@ajitkumarsaini02</span>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <motion.div
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      border: '5px solid #8B5CF6',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.codeforces.rating} />
                    </span>
                    <span style={{ fontSize: '0.6rem', color: '#8B5CF6', fontFamily: 'var(--font-mono)' }}>RATING</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Problems Solved</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: '#8B5CF6' }}>{liveData.codeforces.totalSolved}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: '#00B8D9' }}>● Easy</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.codeforces.easy}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: '#F59E0B' }}>● Medium</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.codeforces.medium}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>Contests Participated: <strong>{liveData.codeforces.contestsParticipated} Rounds</strong></div>
                  <div>Max Rating: <strong style={{ color: '#8B5CF6' }}>{liveData.codeforces.maxRating}</strong></div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 4: GitHub */}
          <ScrollReveal direction="up" delay={0.4}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: '#10B981' }}><GitBranch size={22} /></div>
                    <h4 style={{ fontSize: '1.15rem' }}>GitHub Live</h4>
                  </div>
                  <span className="badge badge-emerald">@ajitkumarsaini02</span>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <motion.div
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      border: '5px solid #10B981',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.github.publicRepos} />
                    </span>
                    <span style={{ fontSize: '0.6rem', color: '#10B981', fontFamily: 'var(--font-mono)' }}>REPOS</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Public Repos</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.github.publicRepos}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Followers</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.github.followers}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Open Source</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: '#10B981' }}>GSSoC 2026</strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>Merged PRs: <strong>{liveData.github.pullRequests}</strong></div>
                  <div>
                    <a href="https://github.com/ajitkumarsaini02" target="_blank" rel="noreferrer" style={{ color: '#10B981', textDecoration: 'none' }}>
                      View GitHub Profile →
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
