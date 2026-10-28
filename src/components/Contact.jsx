import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti burst!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <MessageSquare size={15} /> 09 / Get In Touch
            </span>
            <h2 className="section-title">
              Let's Connect &amp;{" "}
              <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="section-subtitle">
              Looking for a driven Full-Stack MERN Developer or software
              engineering intern? Reach out anytime!
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal direction="right" delay={0.2}>
            <TiltCard maxTilt={6}>
              <div className="glass-card contact-info-card">
                <div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                    Direct Communication
                  </h3>
                  <p
                    style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}
                  >
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
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-dim)",
                          display: "block",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        PHONE / WHATSAPP
                      </span>
                      <a href={`tel:${personalInfo.phone}`}>
                        {personalInfo.phone}
                      </a>
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
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-dim)",
                          display: "block",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        EMAIL
                      </span>
                      <a href={`mailto:${personalInfo.email}`}>
                        {personalInfo.email}
                      </a>
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
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-dim)",
                          display: "block",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
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
                  <p
                    style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
                  >
                    ⚡ <strong>Quick Response Guarantee:</strong> Emails sent to{" "}
                    <span style={{ color: "var(--primary)" }}>
                      {personalInfo.email}
                    </span>{" "}
                    receive a reply within 24 hours.
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3}>
            <form className="glass-card contact-form" onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Software Role / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Hello Ajit, we would love to connect with you regarding..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.div
                  className="form-alert alert-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 size={18} />
                  <span>
                    Thank you! Your message has been prepared and sent. I'll get
                    back to you shortly!
                  </span>
                </motion.div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
