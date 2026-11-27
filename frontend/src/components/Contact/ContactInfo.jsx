import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import ScrollReveal from "../ScrollReveal";
import TiltCard from "../TiltCard";

const ContactInfo = () => {
  return (
    <ScrollReveal direction="right" delay={0.2}>
      <TiltCard maxTilt={6}>
        <div className="glass-card contact-info-card">
          <div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
              Direct Communication
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              I am actively open to internship opportunities, full-stack
              projects, open-source initiatives, and hackathons.
            </p>
          </div>

          <ul className="contact-details-list">
            <li className="contact-item">
              <motion.div
                className="icon-btn"
                style={{ flexShrink: 0 }}
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <Phone size={18} color="var(--primary)" />
              </motion.div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", display: "block", fontFamily: "var(--font-mono)" }}>
                  PHONE / WHATSAPP
                </span>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </li>

            <li className="contact-item">
              <motion.div
                className="icon-btn"
                style={{ flexShrink: 0 }}
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <Mail size={18} color="var(--primary)" />
              </motion.div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", display: "block", fontFamily: "var(--font-mono)" }}>
                  EMAIL
                </span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </li>

            <li className="contact-item">
              <motion.div
                className="icon-btn"
                style={{ flexShrink: 0 }}
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <MapPin size={18} color="var(--primary)" />
              </motion.div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", display: "block", fontFamily: "var(--font-mono)" }}>
                  LOCATION
                </span>
                <span>{personalInfo.location}</span>
              </div>
            </li>
          </ul>

          <div
            style={{
              padding: "16px",
              background: "rgba(16, 185, 129, 0.06)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-color)",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              ⚡ <strong>Quick Response Guarantee:</strong> Emails sent to{" "}
              <span style={{ color: "var(--primary)" }}>{personalInfo.email}</span>{" "}
              receive a reply within 24 hours.
            </p>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export default ContactInfo;
