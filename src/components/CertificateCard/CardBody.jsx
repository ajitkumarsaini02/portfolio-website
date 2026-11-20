import React from "react";
import { ShieldCheck, CheckCircle2, Calendar, Clock, AlertCircle, Eye, ExternalLink } from "lucide-react";

const CardBody = ({ cert, onSelect }) => {
  return (
    <div className="cert-card-body">
      <div className="cert-card-meta-header">
        <span className="cert-issuer-badge">
          <ShieldCheck size={13} className="cert-verified-icon" />
          <strong className="cert-issuer-text">{cert.issuer}</strong>
        </span>
        <span className="cert-type-pill">{cert.credentialType}</span>
      </div>

      <h3 className="cert-card-title" onClick={() => onSelect(cert)} title={cert.title}>
        {cert.title}
      </h3>

      {cert.highlight && (
        <p className="cert-card-highlight">
          <CheckCircle2 size={13} className="cert-highlight-check" />
          <span>{cert.highlight}</span>
        </p>
      )}

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

      {cert.isJobSimulation && (
        <div className="cert-sim-disclaimer">
          <AlertCircle size={12} />
          <span>Virtual Job Simulation • Non-Employment Engagement</span>
        </div>
      )}

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
  );
};

export default CardBody;
