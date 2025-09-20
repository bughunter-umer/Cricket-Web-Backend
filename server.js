import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware/authMiddleware.js";

import teamRoutes from "./routes/teamRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import trophyRoutes from "./routes/trophyRoutes.js";
import investorRoutes from "./routes/investorRoutes.js";
import revenueRoutes from "./routes/revenueRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Public
app.use("/auth", authRoutes);

// Protected
app.use("/teams", authMiddleware, teamRoutes);
app.use("/players", authMiddleware, playerRoutes);
app.use("/matches", authMiddleware, matchRoutes);
app.use("/trophies", authMiddleware, trophyRoutes);
app.use("/investors", authMiddleware, investorRoutes);
app.use("/revenues", authMiddleware, revenueRoutes);

app.get("/", (req, res) => res.send("🏏 Cricket League API Running"));

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Database synced");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
});
