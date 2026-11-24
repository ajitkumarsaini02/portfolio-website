import React from "react";
import { ShieldCheck, AlertCircle, ExternalLink } from "lucide-react";
import ModalMetaGrid from "./ModalMetaGrid";

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

      <ModalMetaGrid cert={cert} />

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
