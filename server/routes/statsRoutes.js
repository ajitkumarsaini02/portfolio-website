import express from "express";
import { getStats, refreshStats } from "../controllers/statsController.js";

const router = express.Router();

router.get("/", getStats);
router.post("/refresh", refreshStats);

export default router;
