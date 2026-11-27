import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cron from "node-cron";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import { fetchUnifiedStats } from "./services/statsFetcher.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [process.env.CLIENT_URL || "http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", service: "portfolio-backend", uptime: process.uptime() });
});

// API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/stats", statsRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ success: false, message: "Invalid JSON payload" });
  }
  console.error("❌ Unhandled server error:", err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// Start Server & Background Services
const startServer = async () => {
  await connectDB();

  fetchUnifiedStats(true).catch((err) => console.warn("Cache warm-up warning:", err.message));

  // Cron Job: Refresh stats every 30 minutes
  cron.schedule("*/30 * * * *", () => {
    console.log("⏰ [Cron] Running scheduled stats refresh...");
    fetchUnifiedStats(true);
  });

  app.listen(PORT, () => {
    console.log(`🚀 [Backend] Portfolio Server running on port ${PORT}`);
    console.log(`📡 [Endpoints] Contact: http://localhost:${PORT}/api/contact | Stats: http://localhost:${PORT}/api/stats`);
  });
};

startServer();
