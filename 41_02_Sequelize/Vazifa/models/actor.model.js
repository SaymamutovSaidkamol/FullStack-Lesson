import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

let Actor = sequelize.define("Actor", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Actor;
