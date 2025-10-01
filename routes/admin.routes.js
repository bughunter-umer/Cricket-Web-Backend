// routes/admin.routes.js
import express from "express";
import { authMiddleware } from "../middleware/auth.js"; 
import User from "../models/User.js";
import Team from "../models/Team.js";
import Player from "../models/Player.js";
import Revenue from "../models/Revenue.js";

const router = express.Router();

router.get("/stats", authMiddleware, async (req, res) => {
  try {
    const users = await User.count();
    const teams = await Team.count();
    const players = await Player.count();
    const revenues = await Revenue.count();

    res.json({ users, teams, players, revenues });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

export default router;
