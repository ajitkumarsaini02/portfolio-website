import React from "react";
import { X, Maximize2, ShieldCheck } from "lucide-react";

const ModalHeader = ({ cert, isFullscreen, setIsFullscreen, onClose }) => {
  return (
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
  );
};

export default ModalHeader;
