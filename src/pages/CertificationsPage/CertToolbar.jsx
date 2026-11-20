import React from "react";
import { Search } from "lucide-react";
import { certificateCategories } from "../../data/certificatesData";

const CertToolbar = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  categoryCounts,
}) => {
  return (
    <section className="cert-toolbar-section">
      <div className="cert-category-tabs" role="tablist" aria-label="Certificate Categories">
        {certificateCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`cert-category-tab ${isActive ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="cert-category-pill">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="cert-search-box">
        <Search size={18} className="cert-search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title, issuer, skill (e.g. AWS, Python, C++)..."
          className="cert-search-input"
          aria-label="Search certificates"
        />
        {searchQuery && (
          <button
            type="button"
            className="cert-search-clear"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search query"
          >
            ✕
          </button>
        )}
      </div>
    </section>
  );
};

export default CertToolbar;
