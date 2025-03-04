import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.models.js";

let Order = sequelize.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment: {
    type: DataTypes.ENUM("Click", "Naxt"),
    defaultValue: "Naxt",
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("expected", "done", "canceled"),
    defaultValue: "expected",
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    }
  },
});

Order.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE", onUpdate: "CASCADE" });
User.hasMany(Order, {foreignKey: "userId"})

export default Order;
