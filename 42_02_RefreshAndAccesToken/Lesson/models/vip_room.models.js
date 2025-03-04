import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

let VipRoom = sequelize.define("viproom", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  room_comp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
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

export default VipRoom;
