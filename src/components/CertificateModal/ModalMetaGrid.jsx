import React from "react";
import { Calendar, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const ModalMetaGrid = ({ cert }) => {
  return (
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
            <CheckCircle2 size={15} style={{ color: "var(--primary)" }} />
            <span>Completed &amp; Verified</span>
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
            <ShieldCheck size={15} style={{ color: "var(--primary)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.84rem" }}>
              {cert.credentialId}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalMetaGrid;
