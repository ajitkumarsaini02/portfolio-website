import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  ShieldCheck, 
  Cloud, 
  Terminal, 
  BrainCircuit, 
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function CertificateCard({ cert, onSelect, index = 0 }) {
  const [imageError, setImageError] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI & Cloud':
        return <Cloud size={14} />;
      case 'Programming':
        return <Terminal size={14} />;
      case 'Data Analytics':
        return <TrendingUp size={14} />;
      case 'Achievements':
        return <Award size={14} />;
      default:
        return <ShieldCheck size={14} />;
    }
  };

  return (
    <motion.div
      className="cert-card glass-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Top Image Thumbnail Container */}
      <div 
        className="cert-card-media"
        onClick={() => onSelect(cert)}
        role="button"
        tabIndex={0}
        aria-label={`View certificate for ${cert.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(cert);
          }
        }}
      >
        {!imageError ? (
          <img
            src={cert.image}
            alt={`${cert.title} Certificate - ${cert.issuer}`}
            className="cert-card-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="cert-card-fallback">
            <div className="cert-card-fallback-glow" />
            <div className="cert-card-fallback-content">
              <span className="cert-card-fallback-icon">
                {getCategoryIcon(cert.category)}
              </span>
              <span className="cert-card-fallback-title">{cert.issuer}</span>
              <span className="cert-card-fallback-sub">{cert.title}</span>
              <span className="cert-card-fallback-tag">Verified Credential</span>
            </div>
          </div>
        )}

        {/* Hover Overlay with Quick Preview Prompt */}
        <div className="cert-card-overlay">
          <div className="cert-card-preview-btn">
            <Eye size={16} /> Quick Preview
          </div>
        </div>

        {/* Floating Top Badges */}
        <div className="cert-card-badges">
          <span className="cert-pill cert-pill-category">
            {getCategoryIcon(cert.category)}
            <span>{cert.category}</span>
          </span>

          {cert.isJobSimulation && (
            <span className="cert-pill cert-pill-sim" title="Virtual Job Simulation Experience">
              Job Simulation
            </span>
          )}

          {cert.percentile && (
            <span className="cert-pill cert-pill-percentile" title="National Percentile">
              <Sparkles size={12} /> {cert.percentile}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="cert-card-body">
        {/* Issuer and Credential Type */}
        <div className="cert-card-meta-header">
          <span className="cert-issuer-badge">
            <ShieldCheck size={13} className="cert-verified-icon" />
            <strong className="cert-issuer-text">{cert.issuer}</strong>
          </span>
          <span className="cert-type-pill">{cert.credentialType}</span>
        </div>

        {/* Title */}
        <h3 
          className="cert-card-title"
          onClick={() => onSelect(cert)}
          title={cert.title}
        >
          {cert.title}
        </h3>

        {/* Highlight Note if available */}
        {cert.highlight && (
          <p className="cert-card-highlight">
            <CheckCircle2 size={13} className="cert-highlight-check" />
            <span>{cert.highlight}</span>
          </p>
        )}

        {/* Date & Duration Info */}
        <div className="cert-card-timeline">
          {cert.issueDate ? (
            <span className="cert-timeline-item" title="Issue Date">
              <Calendar size={13} /> {cert.issueDate}
            </span>
          ) : (
            <span className="cert-timeline-item cert-timeline-verified" title="Verified Cohort Completion">
              <CheckCircle2 size={13} /> Verified Completion
            </span>
          )}

          {cert.duration && (
            <span className="cert-timeline-item" title="Course Duration">
              <Clock size={13} /> {cert.duration}
            </span>
          )}
        </div>

        {/* Job Simulation Disclaimer Pill */}
        {cert.isJobSimulation && (
          <div className="cert-sim-disclaimer">
            <AlertCircle size={12} />
            <span>Virtual Job Simulation • Non-Employment Engagement</span>
          </div>
        )}

        {/* Skills Chips */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="cert-skills-wrap">
            {cert.skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="cert-skill-tag">
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="cert-skill-tag cert-skill-more">
                +{cert.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Card Actions */}
        <div className="cert-card-footer">
          <button
            type="button"
            className="cert-action-btn cert-action-view"
            onClick={() => onSelect(cert)}
            aria-label={`View full credential preview for ${cert.title}`}
          >
            <Eye size={15} />
            <span>Preview Details</span>
          </button>

          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-action-btn cert-action-verify"
              title="Verify credential on Credly"
              aria-label={`Verify credential on Credly for ${cert.title}`}
            >
              <ExternalLink size={14} />
              <span>Verify</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
