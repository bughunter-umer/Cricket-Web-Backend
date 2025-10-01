import express from "express";
import { register, login } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// ✅ Endpoint to fetch current user (for frontend AuthContext)
router.get("/me", authMiddleware, (req, res) => {
  res.json(req.user);
});

export default router;
