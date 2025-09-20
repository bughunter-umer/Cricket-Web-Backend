import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Investor = sequelize.define("Investor", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  contribution: { type: DataTypes.FLOAT, defaultValue: 0 },
});

export default Investor;
