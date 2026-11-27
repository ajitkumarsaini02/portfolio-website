import express from "express";
import { recordVisit, recordResumeDownload, getAnalyticsSummary } from "../controllers/analyticsController.js";

const router = express.Router();

router.post("/visit", recordVisit);
router.post("/resume", recordResumeDownload);
router.get("/summary", getAnalyticsSummary);

export default router;
