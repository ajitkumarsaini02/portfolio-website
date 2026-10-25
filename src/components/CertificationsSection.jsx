import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { getFeaturedCertifications } from '../data/certificatesData';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';
import ScrollReveal from './ScrollReveal';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const certs = getFeaturedCertifications();

  return (
    <section id="certifications" className="section section-alt cert-section-wrapper">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <ShieldCheck size={15} /> 06 / Verified Credentials
            </span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle">
              Industry-standard accreditations, cloud certifications, and technical proficiencies verified by leading organizations.
            </p>
          </div>
        </ScrollReveal>

        {/* All 9 Certificates Unified Grid */}
        <div className="cert-grid">
          {certs.map((cert, idx) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={idx}
              onSelect={setSelectedCert}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog for Certificate Preview */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
