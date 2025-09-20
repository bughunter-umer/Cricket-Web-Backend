import express from "express";
import { getMatches, addMatch, updateMatch, deleteMatch } from "../controllers/matchController.js";

const router = express.Router();
router.get("/", getMatches);
router.post("/", addMatch);
router.put("/:id", updateMatch);
router.delete("/:id", deleteMatch);

export default router;
