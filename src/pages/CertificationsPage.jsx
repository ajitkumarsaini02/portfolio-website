import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Sun, 
  Moon, 
  Info, 
  Cloud, 
  Terminal, 
  TrendingUp, 
  ExternalLink 
} from 'lucide-react';
import { 
  certificatesData, 
  certificateCategories 
} from '../data/certificatesData';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';
import MagneticButton from '../components/MagneticButton';

export default function CertificationsPage({ theme, toggleTheme, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleBack = (e) => {
    e.preventDefault();
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // Filter credentials based on active category and search input
  const filteredCerts = useMemo(() => {
    return certificatesData.filter((cert) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory !== 'all') {
        matchesCategory = cert.category === selectedCategory;
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatch = cert.title.toLowerCase().includes(query);
      const issuerMatch = cert.issuer.toLowerCase().includes(query);
      const skillMatch = cert.skills && cert.skills.some(s => s.toLowerCase().includes(query));
      const typeMatch = cert.credentialType.toLowerCase().includes(query);

      return matchesCategory && (titleMatch || issuerMatch || skillMatch || typeMatch);
    });
  }, [selectedCategory, searchQuery]);

  // Dynamic category count map
  const categoryCounts = useMemo(() => {
    const counts = { all: certificatesData.length };
    certificateCategories.forEach(cat => {
      if (cat.id === 'all') return;
      counts[cat.id] = certificatesData.filter(c => c.category === cat.id).length;
    });
    return counts;
  }, []);

  return (
    <div className="cert-page-wrapper">
      {/* Top Floating Sticky Header */}
      <header className="cert-page-nav">
        <div className="container cert-page-nav-container">
          <button
            onClick={handleBack}
            className="cert-nav-back-btn"
            aria-label="Back to main portfolio"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </button>

          <div className="cert-page-nav-right">
            <MagneticButton strength={0.3}>
              <motion.button
                onClick={toggleTheme}
                className="icon-btn"
                aria-label="Toggle dark/light theme"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Main Page Container */}
      <main className="container cert-page-main">
        {/* Page Hero Header */}
        <section className="cert-page-hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cert-page-hero-inner"
          >
            <span className="section-eyebrow">
              <ShieldCheck size={16} /> Official Repository
            </span>
            <h1 className="cert-page-title">
              Certifications &amp; <span className="gradient-text">Verified Credentials</span>
            </h1>
            <p className="cert-page-subtitle">
              A curated catalog of verified industry credentials, cloud accreditations, software engineering simulations, and official course completions.
            </p>

            {/* Quick Stats Metrics */}
            <div className="cert-page-stats-strip">
              <div className="cert-stat-badge">
                <strong>{certificatesData.length}</strong>
                <span>Verified Credentials</span>
              </div>
              <div className="cert-stat-badge">
                <strong>3</strong>
                <span>Core Domains</span>
              </div>
              <div className="cert-stat-badge">
                <strong>100%</strong>
                <span>Original Documents</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filter and Search Bar Toolbar */}
        <section className="cert-toolbar-section">
          {/* Category Tabs */}
          <div className="cert-category-tabs" role="tablist" aria-label="Certificate Categories">
            {certificateCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`cert-category-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="cert-category-pill">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="cert-search-box">
            <Search size={18} className="cert-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, issuer, skill (e.g. AWS, Python, C++)..."
              className="cert-search-input"
              aria-label="Search certificates"
            />
            {searchQuery && (
              <button
                type="button"
                className="cert-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>
        </section>

        {/* Certificate Cards Grid */}
        <section className="cert-results-section">
          {filteredCerts.length > 0 ? (
            <div className="cert-grid">
              <AnimatePresence>
                {filteredCerts.map((cert, idx) => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    index={idx}
                    onSelect={setSelectedCert}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="cert-empty-state glass-card">
              <Filter size={36} className="cert-empty-icon" />
              <h3>No matching certificates found</h3>
              <p>Try resetting the search query or selecting a different category filter.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* Asset Notice Banner */}
        <section className="cert-asset-mapping-banner glass-card">
          <div className="cert-banner-icon">
            <Info size={22} />
          </div>
          <div className="cert-banner-text">
            <h4>Verified Certificate Archive</h4>
            <p>
              All {certificatesData.length} credentials feature genuine certificate documents and official verification links where available.
            </p>
          </div>
        </section>
      </main>

      {/* Detail Preview Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}
