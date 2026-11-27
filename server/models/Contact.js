import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxLength: 150,
    },
    subject: {
      type: String,
      trim: true,
      default: "Portfolio Inquiry",
      maxLength: 200,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      maxLength: 3000,
    },
    ip: {
      type: String,
      default: "unknown",
    },
    userAgent: {
      type: String,
      default: "unknown",
    },
    status: {
      type: String,
      enum: ["unread", "read", "replied"],
      default: "unread",
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
