import { Contact } from "../models/Contact.js";
import { sendContactEmails } from "../services/emailService.js";
import { getDbStatus } from "../config/db.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address." });
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || "Portfolio Inquiry",
      message: message.trim(),
      ip: req.ip || req.headers["x-forwarded-for"] || "unknown",
      userAgent: req.headers["user-agent"] || "unknown",
    };

    let savedMessage = null;
    if (getDbStatus()) {
      savedMessage = await Contact.create(contactData);
    }

    // Fire email notifications in background
    sendContactEmails(contactData).catch((err) =>
      console.warn("⚠️  [ContactController] Email dispatch error:", err.message)
    );

    return res.status(201).json({
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
      id: savedMessage?._id,
    });
  } catch (error) {
    console.error("❌ [ContactController] Submission failed:", error);
    return res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    if (!getDbStatus()) {
      return res.status(200).json({ success: true, contacts: [], mode: "memory_only" });
    }
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    return res.status(200).json({ success: true, total: contacts.length, contacts });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
