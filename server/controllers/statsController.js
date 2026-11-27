import { fetchUnifiedStats } from "../services/statsFetcher.js";

export const getStats = async (req, res) => {
  try {
    const stats = await fetchUnifiedStats(false);
    return res.status(200).json({ success: true, stats });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to load stats", error: error.message });
  }
};

export const refreshStats = async (req, res) => {
  try {
    const stats = await fetchUnifiedStats(true);
    return res.status(200).json({ success: true, refreshed: true, stats });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to refresh stats", error: error.message });
  }
};
