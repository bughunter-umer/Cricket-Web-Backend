import express from "express";
import { getTrophies, addTrophy, deleteTrophy } from "../controllers/trophyController.js";

const router = express.Router();
router.get("/", getTrophies);
router.post("/", addTrophy);
router.delete("/:id", deleteTrophy);

export default router;
