import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

let User = sequelize.define("Userlar", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("Admin", "User"),
    defaultValue: "User"
  },
  status: {
    type: DataTypes.ENUM("Activied", "Not active"),
    defaultValue: "Not active"
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
});

export default User;
