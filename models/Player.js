import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Team from "./Team.js";

const Player = sequelize.define("Player", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING }, // Batsman, Bowler, etc.
  base_price: { type: DataTypes.FLOAT, defaultValue: 0 },
  current_price: { type: DataTypes.FLOAT, defaultValue: 0 },
});

Team.hasMany(Player, { foreignKey: "teamId" });
Player.belongsTo(Team, { foreignKey: "teamId" });

export default Player;


