import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

let Movies = sequelize.define(
  "Movies",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default Movies;
