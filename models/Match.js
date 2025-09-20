import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Team from "./Team.js";

const Match = sequelize.define("Match", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  match_date: { type: DataTypes.DATE },
  venue: { type: DataTypes.STRING },
  team_a_score: { type: DataTypes.STRING },
  team_b_score: { type: DataTypes.STRING },
});

Team.hasMany(Match, { as: "HomeMatches", foreignKey: "team_a_id" });
Team.hasMany(Match, { as: "AwayMatches", foreignKey: "team_b_id" });
Match.belongsTo(Team, { as: "TeamA", foreignKey: "team_a_id" });
Match.belongsTo(Team, { as: "TeamB", foreignKey: "team_b_id" });
Match.belongsTo(Team, { as: "Winner", foreignKey: "winner_team_id" });

export default Match;
