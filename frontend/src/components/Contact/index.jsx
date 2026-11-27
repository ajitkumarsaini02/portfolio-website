import React from "react";
import { MessageSquare } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">
              <MessageSquare size={15} /> 09 / Get In Touch
            </span>
            <h2 className="section-title">
              Let's Connect &amp; <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="section-subtitle">
              Looking for a driven Full-Stack MERN Developer or software engineering intern? Reach out anytime!
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
