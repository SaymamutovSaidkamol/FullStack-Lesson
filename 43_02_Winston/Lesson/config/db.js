import { Sequelize } from "sequelize" 

let sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "root",
  database: "n16",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
