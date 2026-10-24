import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Flame, GitPullRequest, Award, Code, RefreshCw, BookOpen } from 'lucide-react';
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>
                <Trophy size={15} /> 05 / Milestones
              </span>
              <button
                onClick={refreshStats}
                className="badge badge-cyan"
                style={{ cursor: 'pointer', border: '1px solid rgba(0, 242, 254, 0.4)' }}
                title="Refresh stats from live API service"
              >
                <RefreshCw size={12} className={loading ? 'animate-spin' : ''} style={{ marginRight: '4px' }} />
                <span>{isLive ? `Live Synced (${lastUpdated || 'Now'})` : 'Sync Live Stats'}</span>
              </button>
            </div>
            <h2 className="section-title">
              Live Coding Profiles &amp; <span className="gradient-text">Milestones</span>
            </h2>
            <p className="section-subtitle">
              Live metrics fetched automatically from coding profiles via{' '}
              <a
                href="https://coding-profile-service-v2-0.onrender.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--primary)', textDecoration: 'underline' }}
              >
                coding-profile-service
              </a>.
            </p>
          </div>
        </ScrollReveal>

        {/* Global Stats Summary Banner */}
        <ScrollReveal delay={0.1}>
          <div
            className="glass-card"
            style={{
              padding: '20px 28px',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '36px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>TOTAL PROBLEMS SOLVED</span>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.totalSolvedAll} suffix="+" />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LeetCode + CodeChef + GFG</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>LEETCODE RATING</span>
              <h3 style={{ fontSize: '2rem', color: '#38BDF8', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.leetcode.rating} />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Peak: {liveData.leetcode.maxRating}</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CODECHEF RATING</span>
              <h3 style={{ fontSize: '2rem', color: '#F59E0B', margin: '4px 0' }}>
                <AnimatedCounter value={liveData.codechef.rating} />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{liveData.codechef.stars}★ (Peak: {liveData.codechef.maxRating})</span>
            </div>

            <div style={{ height: '40px', width: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CONTESTS PLAYED</span>
              <h3 style={{ fontSize: '2rem', color: '#10B981', margin: '4px 0' }}>
                <AnimatedCounter value={(liveData.leetcode.contestsParticipated || 0) + (liveData.codechef.contestsParticipated || 0)} suffix="+" />
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Competitive Contests</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Detailed 3-Column Profile Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Card 1: LeetCode Deep Dive */}
          <ScrollReveal direction="up" delay={0.2}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '28px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: 'var(--primary)' }}><Code size={24} /></div>
                    <h4 style={{ fontSize: '1.2rem' }}>LeetCode Live</h4>
                  </div>
                  <span className="badge badge-cyan">@ajitkumarsaini02</span>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <motion.div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '6px solid var(--primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px var(--primary-glow)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.leetcode.totalSolved} />
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>SOLVED</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#00B8D9' }}>● Easy</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.leetcode.easySolved} />
                      </strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#F59E0B' }}>● Medium</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.leetcode.mediumSolved} />
                      </strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#EF4444' }}>● Hard</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.leetcode.hardSolved} />
                      </strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Contest Rating:</span>
                    <strong style={{ color: 'var(--primary)' }}>{liveData.leetcode.rating} (Peak: {liveData.leetcode.maxRating})</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Contests Participated:</span>
                    <strong>{liveData.leetcode.contestsParticipated} Contests</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Global Rank:</span>
                    <strong>Top ~{Number(liveData.leetcode.globalRank).toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 2: CodeChef Deep Dive */}
          <ScrollReveal direction="up" delay={0.3}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '28px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#F59E0B' }}><Crown size={24} /></div>
                    <h4 style={{ fontSize: '1.2rem' }}>CodeChef Live</h4>
                  </div>
                  <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    {liveData.codechef.stars}★ Division 3
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <motion.div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '6px solid #F59E0B',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.codechef.rating} />
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>RATING</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Peak Rating</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: '#F59E0B' }}>{liveData.codechef.maxRating}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Problems Solved</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.codechef.totalSolved} suffix="+" />
                      </strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Contests Played</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{liveData.codechef.contestsParticipated}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Global Rank:</span>
                    <strong>#{Number(liveData.codechef.globalRank).toLocaleString()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Country Rank:</span>
                    <strong>#{Number(liveData.codechef.countryRank).toLocaleString()}</strong>
                  </div>
                  <div style={{ marginTop: '4px' }}>
                    <a href="https://www.codechef.com/users/ajitsaini94" target="_blank" rel="noreferrer" style={{ color: '#F59E0B', textDecoration: 'none' }}>
                      View CodeChef Profile →
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 3: GeeksForGeeks Deep Dive */}
          <ScrollReveal direction="up" delay={0.4}>
            <TiltCard maxTilt={6}>
              <div className="glass-card" style={{ padding: '28px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: '#10B981' }}><BookOpen size={24} /></div>
                    <h4 style={{ fontSize: '1.2rem' }}>GeeksForGeeks Live</h4>
                  </div>
                  <span className="badge badge-emerald">@ajitkumarsaini02</span>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <motion.div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '6px solid #10B981',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.25)'
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      <AnimatedCounter value={liveData.gfg.totalSolved} />
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#10B981', fontFamily: 'var(--font-mono)' }}>SOLVED</span>
                  </motion.div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#00B8D9' }}>● Easy</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.gfg.easySolved} />
                      </strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#F59E0B' }}>● Medium</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.gfg.mediumSolved} />
                      </strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#EF4444' }}>● Hard</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>
                        <AnimatedCounter value={liveData.gfg.hardSolved} />
                      </strong>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Practice Activity:</span>
                    <strong style={{ color: '#10B981' }}>Active Solver</strong>
                  </div>
                  <div style={{ marginTop: '4px' }}>
                    <a href="https://www.geeksforgeeks.org/profile/ajitkumarsaini02?tab=activity" target="_blank" rel="noreferrer" style={{ color: '#10B981', textDecoration: 'none' }}>
                      View GeeksForGeeks Profile →
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
