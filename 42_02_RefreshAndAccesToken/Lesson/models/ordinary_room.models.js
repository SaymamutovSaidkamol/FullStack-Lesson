import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

let OrdernaryRoom = sequelize.define("ordernaryroom", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  compNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("Strong", "Weak"),
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(["Empty", "Busy"]),
    allowNull: false,
  },
  Characteristics: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default OrdernaryRoom;
