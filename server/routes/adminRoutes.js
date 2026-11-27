import express from "express";
import { adminLogin, getAdminMessages, updateMessageStatus, deleteMessage } from "../controllers/adminController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/messages", authMiddleware, getAdminMessages);
router.patch("/messages/:id", authMiddleware, updateMessageStatus);
router.delete("/messages/:id", authMiddleware, deleteMessage);

export default router;
