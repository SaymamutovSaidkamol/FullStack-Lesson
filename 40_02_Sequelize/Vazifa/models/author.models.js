import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Author = sequelize.define("Author", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNul: false
  }

});


export default Author