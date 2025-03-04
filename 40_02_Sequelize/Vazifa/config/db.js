import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  database: "n16",
  password: "root",
  username: "root",
  dialect: "mysql",
});

export default sequelize;
