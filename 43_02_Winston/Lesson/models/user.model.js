import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Users = sequelize.define("User", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Users
