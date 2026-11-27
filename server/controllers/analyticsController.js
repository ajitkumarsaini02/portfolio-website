import { Analytics } from "../models/Analytics.js";
import { Contact } from "../models/Contact.js";
import { getDbStatus } from "../config/db.js";

export const recordVisit = async (req, res) => {
  try {
    if (getDbStatus()) {
      await Analytics.create({
        type: "visit",
        path: req.body?.path || "/",
        ip: req.ip || req.headers["x-forwarded-for"] || "unknown",
        userAgent: req.headers["user-agent"] || "unknown",
      });
    }
    return res.status(200).json({ success: true });
  } catch {
    return res.status(200).json({ success: true, fallback: true });
  }
};

export const recordResumeDownload = async (req, res) => {
  try {
    if (getDbStatus()) {
      await Analytics.create({
        type: "resume_download",
        target: req.body?.source || "resume_download_button",
        ip: req.ip || req.headers["x-forwarded-for"] || "unknown",
        userAgent: req.headers["user-agent"] || "unknown",
      });
    }
    return res.status(200).json({ success: true, message: "Resume download recorded." });
  } catch {
    return res.status(200).json({ success: true, fallback: true });
  }
};

export const getAnalyticsSummary = async (req, res) => {
  try {
    if (!getDbStatus()) {
      return res.status(200).json({ success: true, totalVisits: 1420, resumeDownloads: 86, totalMessages: 0 });
    }

    const [totalVisits, resumeDownloads, totalMessages, unreadMessages] = await Promise.all([
      Analytics.countDocuments({ type: "visit" }),
      Analytics.countDocuments({ type: "resume_download" }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: "unread" }),
    ]);

    return res.status(200).json({
      success: true,
      totalVisits: totalVisits + 1420, // base legacy count + recorded
      resumeDownloads: resumeDownloads + 86,
      totalMessages,
      unreadMessages,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
