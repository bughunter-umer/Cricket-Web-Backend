import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Revenue = sequelize.define("Revenue", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  source: { type: DataTypes.STRING },
  amount: { type: DataTypes.FLOAT, allowNull: false },
});

export default Revenue;
