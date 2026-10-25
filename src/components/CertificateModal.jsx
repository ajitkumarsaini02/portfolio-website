import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  Download, 
  Maximize2,
  CheckCircle2,
  Info
} from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  const [imageError, setImageError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle escape key and lock body scroll only when modal is open
  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Save previous overflow and lock scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div 
        className="cert-modal-backdrop" 
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          className={`cert-modal-container ${isFullscreen ? 'fullscreen' : ''}`}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          {/* Modal Header */}
          <div className="cert-modal-header">
            <div className="cert-modal-header-info">
              <span className="cert-modal-category-tag">
                <ShieldCheck size={14} /> {cert.category} • {cert.credentialType}
              </span>
              <h2 id="cert-modal-title" className="cert-modal-title">
                {cert.title}
              </h2>
            </div>
            <div className="cert-modal-actions">
              <button
                type="button"
                className="cert-modal-icon-btn"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? "Exit Fullscreen" : "Toggle Expanded View"}
                aria-label="Toggle expanded modal"
              >
                <Maximize2 size={18} />
              </button>
              <button
                type="button"
                className="cert-modal-close-btn"
                onClick={onClose}
                aria-label="Close certificate dialog"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="cert-modal-body">
            {/* Certificate Media View */}
            <div className="cert-modal-media-col">
              <div className="cert-modal-image-wrap">
                {!imageError ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} verified certificate`}
                    className="cert-modal-image"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="cert-modal-fallback-box">
                    <ShieldCheck size={48} className="cert-modal-fallback-icon" />
                    <h3>{cert.issuer}</h3>
                    <p className="cert-modal-fallback-desc">{cert.title}</p>
                    <div className="cert-modal-asset-notice">
                      <Info size={16} />
                      <span>
                        Asset mapping: Place certificate file at{' '}
                        <code>{cert.image}</code>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {cert.badgeImage && (
                <div className="cert-modal-secondary-badge">
                  <span className="cert-badge-label">Official Digital Badge:</span>
                  <img 
                    src={cert.badgeImage} 
                    alt={`${cert.title} digital badge`}
                    className="cert-badge-thumbnail"
                  />
                </div>
              )}
            </div>

            {/* Certificate Details Column */}
            <div className="cert-modal-details-col">
              <div className="cert-detail-group">
                <span className="cert-detail-label">Issuing Organization</span>
                <div className="cert-detail-value cert-issuer-highlight">
                  <ShieldCheck size={18} className="cert-verified-icon" />
                  <strong>{cert.issuer}</strong>
                </div>
              </div>

              {/* Meta items grid */}
              <div className="cert-modal-meta-grid">
                {cert.issueDate ? (
                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Date of Issue / Completion</span>
                    <div className="cert-detail-value">
                      <Calendar size={15} />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>
                ) : (
                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Certification Status</span>
                    <div className="cert-detail-value">
                      <CheckCircle2 size={15} style={{ color: 'var(--primary)' }} />
                      <span>Completed & Verified</span>
                    </div>
                  </div>
                )}

                {cert.duration && (
                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Program Duration</span>
                    <div className="cert-detail-value">
                      <Clock size={15} />
                      <span>{cert.duration}</span>
                    </div>
                  </div>
                )}

                {cert.percentile && (
                  <div className="cert-detail-group">
                    <span className="cert-detail-label">National Standing</span>
                    <div className="cert-detail-value cert-percentile-highlight">
                      <Sparkles size={15} />
                      <strong>{cert.percentile}</strong>
                    </div>
                  </div>
                )}

                {cert.credentialId && (
                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Credential / Certificate ID</span>
                    <div className="cert-detail-value">
                      <ShieldCheck size={15} style={{ color: 'var(--primary)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem' }}>{cert.credentialId}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Job simulation disclaimer */}
              {cert.isJobSimulation && (
                <div className="cert-modal-sim-alert">
                  <AlertCircle size={18} />
                  <div>
                    <strong>Virtual Job Simulation Disclosure</strong>
                    <p>{cert.simulationDisclaimer}</p>
                  </div>
                </div>
              )}

              {/* Description */}
              {cert.description && (
                <div className="cert-detail-group">
                  <span className="cert-detail-label">Overview & Competencies</span>
                  <p className="cert-modal-description">{cert.description}</p>
                </div>
              )}

              {/* Skills Learned */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="cert-detail-group">
                  <span className="cert-detail-label">Verified Skill Competencies</span>
                  <div className="cert-modal-skills-list">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="cert-modal-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification & Actions */}
              <div className="cert-modal-footer-actions">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <ExternalLink size={16} />
                    <span>
                      {cert.verificationUrl.includes('credly') 
                        ? 'Verify Credential on Credly' 
                        : cert.verificationUrl.includes('udemy') 
                          ? 'Verify Certificate on Udemy' 
                          : 'Verify Official Credential'}
                    </span>
                  </a>
                ) : (
                  <div className="cert-unverified-note">
                    <ShieldCheck size={15} />
                    <span>Verified via official academic & institutional record</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
