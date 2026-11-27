import express from "express";
import { adminLogin, getAdminMessages, updateMessageStatus, deleteMessage, replyToMessage } from "../controllers/adminController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/messages", authMiddleware, getAdminMessages);
router.patch("/messages/:id", authMiddleware, updateMessageStatus);
router.delete("/messages/:id", authMiddleware, deleteMessage);
router.post("/messages/:id/reply", authMiddleware, replyToMessage);

export { router };
export default router;
