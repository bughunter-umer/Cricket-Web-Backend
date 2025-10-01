import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import bcrypt from "bcrypt";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    allowNull: "false",
    defaultValue: "user",
  },
});

// Hash password before saving
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

export default User;



