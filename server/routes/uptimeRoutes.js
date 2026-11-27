import express from "express";
import { getUptimeStatus, pingProjects } from "../services/uptimeChecker.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getUptimeStatus();
    res.status(200).json({ success: true, ...data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/ping", async (req, res) => {
  try {
    const data = await pingProjects();
    res.status(200).json({ success: true, ...data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export { router };
export default router;
