import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Award } from "lucide-react";

const CertPageHeader = ({ totalCount }) => {
  return (
    <section className="cert-page-hero">
      <motion.div
        className="cert-page-hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="cert-hero-eyebrow">
          <ShieldCheck size={16} /> Official Repository
        </span>
        <h1 className="cert-page-title">
          Certifications &amp; <span className="gradient-text">Verified Credentials</span>
        </h1>
        <p className="cert-page-subtitle">
          A curated catalog of verified industry credentials, cloud accreditations, software engineering simulations, and official course completions.
        </p>

        <div className="cert-page-stats-strip">
          <div className="cert-stat-badge">
            <Award size={15} style={{ color: "var(--primary)" }} />
            <span><strong>{totalCount}</strong> Verified Records</span>
          </div>
          <div className="cert-stat-badge">
            <Sparkles size={15} style={{ color: "#F59E0B" }} />
            <span>Top 10% National Rank</span>
          </div>
          <div className="cert-stat-badge">
            <ShieldCheck size={15} style={{ color: "#38BDF8" }} />
            <span>AWS &amp; Cisco Accredited</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CertPageHeader;
