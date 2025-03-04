import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Author from "./author.models.js";

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: "id",
    },
  },
});

Author.hasMany(Book, { foreignKey: "userId" });
Book.belongsTo(Author, { foreignKey: "userId" });

export default Book;
