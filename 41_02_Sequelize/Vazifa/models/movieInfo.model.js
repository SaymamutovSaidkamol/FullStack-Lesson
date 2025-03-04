import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Actor from "./actor.model.js";
import Movies from "./movies.model.js";

let MoviesInfo = sequelize.define("Moviesinfo", {
  actorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Actor,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Movies,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

Actor.belongsToMany(Movies, {
  through: MoviesInfo,
  foreignKey: "id",
});
Movies.belongsToMany(Actor, {
  through: MoviesInfo,
  foreignKey: "id",
});

export default MoviesInfo;
