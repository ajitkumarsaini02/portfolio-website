import React, { useState } from "react";
import { Eye, Sparkles, Cloud, Terminal, TrendingUp, Award, ShieldCheck } from "lucide-react";

export function getCategoryIcon(category) {
  switch (category) {
    case "AI & Cloud":
      return <Cloud size={14} />;
    case "Programming":
      return <Terminal size={14} />;
    case "Data Analytics":
      return <TrendingUp size={14} />;
    case "Achievements":
      return <Award size={14} />;
    default:
      return <ShieldCheck size={14} />;
  }
}

const CardMedia = ({ cert, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="cert-card-media"
      onClick={() => onSelect(cert)}
      role="button"
      tabIndex={0}
      aria-label={`View certificate for ${cert.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
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

      <div className="cert-card-overlay">
        <div className="cert-card-preview-btn">
          <Eye size={16} /> Quick Preview
        </div>
      </div>

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
  );
};

export default CardMedia;
