import React, { useState } from "react";
import { ShieldCheck, Info } from "lucide-react";

const ModalMedia = ({ cert }) => {
  const [imageError, setImageError] = useState(false);

  return (
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
              <span>Asset mapping: Place certificate file at <code>{cert.image}</code></span>
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
  );
};

export default ModalMedia;
