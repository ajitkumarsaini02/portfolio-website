import React, { useState, useMemo } from "react";
import { certificatesData, certificateCategories } from "../../data/certificatesData";
import CertificateModal from "../../components/CertificateModal";
import CertPageNav from "./CertPageNav";
import CertPageHeader from "./CertPageHeader";
import CertToolbar from "./CertToolbar";
import CertGrid from "./CertGrid";

const CertificationsPage = ({ theme, toggleTheme, onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const handleBack = (e) => {
    e.preventDefault();
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const filteredCerts = useMemo(() => {
    return certificatesData.filter((cert) => {
      let matchesCategory = true;
      if (selectedCategory !== "all") {
        matchesCategory = cert.category === selectedCategory;
      }

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatch = cert.title.toLowerCase().includes(query);
      const issuerMatch = cert.issuer.toLowerCase().includes(query);
      const skillMatch =
        cert.skills && cert.skills.some((s) => s.toLowerCase().includes(query));
      const typeMatch = cert.credentialType.toLowerCase().includes(query);

      return (
        matchesCategory &&
        (titleMatch || issuerMatch || skillMatch || typeMatch)
      );
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts = { all: certificatesData.length };
    certificateCategories.forEach((cat) => {
      if (cat.id === "all") return;
      counts[cat.id] = certificatesData.filter((c) => c.category === cat.id).length;
    });
    return counts;
  }, []);

  return (
    <div className="cert-page-wrapper">
      <CertPageNav handleBack={handleBack} theme={theme} toggleTheme={toggleTheme} />
      <main className="cert-page-main container">
        <CertPageHeader totalCount={certificatesData.length} />
        <CertToolbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryCounts={categoryCounts}
        />
        <CertGrid
          filteredCerts={filteredCerts}
          totalCount={certificatesData.length}
          onSelectCert={setSelectedCert}
          onResetFilters={() => {
            setSelectedCategory("all");
            setSearchQuery("");
          }}
        />
      </main>
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
};

export default CertificationsPage;
