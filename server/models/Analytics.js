import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["visit", "resume_download", "project_click"],
      required: true,
      index: true,
    },
    target: {
      type: String,
      default: "general",
    },
    ip: {
      type: String,
      default: "unknown",
    },
    userAgent: {
      type: String,
      default: "unknown",
    },
    path: {
      type: String,
      default: "/",
    },
  },
  { timestamps: true }
);

const Analytics = mongoose.model("Analytics", analyticsSchema);

export { Analytics };
export default Analytics;
