import React from "react";
import { Calendar, Clock, ShieldCheck, Sparkles, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";

const ModalDetails = ({ cert }) => {
  return (
    <div className="cert-modal-details-col">
      <div className="cert-detail-group">
        <span className="cert-detail-label">Issuing Organization</span>
        <div className="cert-detail-value cert-issuer-highlight">
          <ShieldCheck size={18} className="cert-verified-icon" />
          <strong>{cert.issuer}</strong>
        </div>
      </div>

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

      {cert.isJobSimulation && (
        <div className="cert-modal-sim-alert">
          <AlertCircle size={18} />
          <div>
            <strong>Virtual Job Simulation Disclosure</strong>
            <p>{cert.simulationDisclaimer}</p>
          </div>
        </div>
      )}

      {cert.description && (
        <div className="cert-detail-group">
          <span className="cert-detail-label">Overview &amp; Competencies</span>
          <p className="cert-modal-description">{cert.description}</p>
        </div>
      )}

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

      <div className="cert-modal-footer-actions">
        {cert.verificationUrl ? (
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <ExternalLink size={16} />
            <span>
              {cert.verificationUrl.includes("credly")
                ? "Verify Credential on Credly"
                : cert.verificationUrl.includes("udemy")
                  ? "Verify Certificate on Udemy"
                  : "Verify Official Credential"}
            </span>
          </a>
        ) : (
          <div className="cert-unverified-note">
            <ShieldCheck size={15} />
            <span>Verified via official academic &amp; institutional record</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalDetails;
