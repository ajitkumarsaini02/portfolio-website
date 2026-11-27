import { Contact } from "../models/Contact.js";
import { getDbStatus } from "../config/db.js";

const adminLogin = (req, res) => {
  const { password } = req.body || {};
  const expectedPassword = process.env.ADMIN_PASSWORD || "Ajit@Admin2026";
  const token = process.env.ADMIN_TOKEN || "ajit_admin_token_secure_2026";

  if (!password || password !== expectedPassword) {
    return res.status(401).json({ success: false, message: "Invalid admin password." });
  }

  return res.status(200).json({ success: true, token, message: "Welcome back, Ajit!" });
};

const getAdminMessages = async (req, res) => {
  try {
    if (!getDbStatus()) {
      return res.status(200).json({ success: true, messages: [], mode: "memory_only" });
    }
    const { status } = req.query;
    const filter = status && status !== "all" ? { status } : {};
    const messages = await Contact.find(filter).sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({ success: true, total: messages.length, messages });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!["unread", "read", "replied"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status value." });
    }
    const updated = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    return res.status(200).json({ success: true, message: "Status updated.", data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Message deleted successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { adminLogin, getAdminMessages, updateMessageStatus, deleteMessage };
