import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import ScrollReveal from "../ScrollReveal";

const ContactForm = () => {
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
    <ScrollReveal direction="left" delay={0.3}>
      <form className="glass-card contact-form" onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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
            <span>Thank you! Your message has been prepared and sent. I'll get back to you shortly!</span>
          </motion.div>
        )}
      </form>
    </ScrollReveal>
  );
};

export default ContactForm;
