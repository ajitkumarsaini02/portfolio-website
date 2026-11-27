import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalHeader from "./ModalHeader";
import ModalMedia from "./ModalMedia";
import ModalDetails from "./ModalDetails";

const CertificateModal = ({ cert, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="cert-modal-backdrop" onClick={onClose} role="presentation">
        <motion.div
          className={`cert-modal-container ${isFullscreen ? "fullscreen" : ""}`}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <ModalHeader
            cert={cert}
            isFullscreen={isFullscreen}
            setIsFullscreen={setIsFullscreen}
            onClose={onClose}
          />
          <div className="cert-modal-body">
            <ModalMedia cert={cert} />
            <ModalDetails cert={cert} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
