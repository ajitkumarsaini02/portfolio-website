import express from "express";
import rateLimit from "express-rate-limit";
import { submitContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message: "Too many contact requests from this IP, please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/", contactLimiter, submitContact);
router.get("/", getAllContacts);

export { router };
export default router;
