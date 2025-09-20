import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Team from "./Team.js";

const Trophy = sequelize.define("Trophy", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  season: { type: DataTypes.STRING },
  times_won: { type: DataTypes.INTEGER, defaultValue: 1 },
});

Trophy.belongsTo(Team, { as: "Winner", foreignKey: "winner_team_id" });

export default Trophy;
