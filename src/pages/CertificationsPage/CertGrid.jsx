import React from "react";
import { AnimatePresence } from "framer-motion";
import { Filter, Info } from "lucide-react";
import CertificateCard from "../../components/CertificateCard";

const CertGrid = ({
  filteredCerts,
  totalCount,
  onSelectCert,
  onResetFilters,
}) => {
  return (
    <>
      <section className="cert-results-section">
        {filteredCerts.length > 0 ? (
          <div className="cert-grid">
            <AnimatePresence>
              {filteredCerts.map((cert, idx) => (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  index={idx}
                  onSelect={onSelectCert}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="cert-empty-state glass-card">
            <Filter size={36} className="cert-empty-icon" />
            <h3>No matching certificates found</h3>
            <p>Try resetting the search query or selecting a different category filter.</p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={onResetFilters}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      <section className="cert-asset-mapping-banner glass-card">
        <div className="cert-banner-icon">
          <Info size={22} />
        </div>
        <div className="cert-banner-text">
          <h4>Verified Certificate Archive</h4>
          <p>
            All {totalCount} credentials feature genuine certificate documents and official verification links where available.
          </p>
        </div>
      </section>
    </>
  );
};

export default CertGrid;
