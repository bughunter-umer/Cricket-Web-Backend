import express from "express";
import { getInvestors, addInvestor, updateInvestor, deleteInvestor } from "../controllers/investorController.js";

const router = express.Router();
router.get("/", getInvestors);
router.post("/", addInvestor);
router.put("/:id", updateInvestor);
router.delete("/:id", deleteInvestor);

export default router;
