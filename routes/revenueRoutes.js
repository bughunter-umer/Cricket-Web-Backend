import express from "express";
import { getRevenues, addRevenue, updateRevenue, deleteRevenue } from "../controllers/revenueController.js";

const router = express.Router();
router.get("/", getRevenues);
router.post("/", addRevenue);
router.put("/:id", updateRevenue);
router.delete("/:id", deleteRevenue);

export default router;
