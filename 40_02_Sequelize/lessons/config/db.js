import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "root",
  database: "n16",
  dialect: "mysql",
});

module.exports = sequelize;