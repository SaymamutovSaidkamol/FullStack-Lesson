import { Sequelize } from "sequelize";

let database = new Sequelize({
    database: "n16",
    host: "localhost",
    username: "root",
    password: "root",
    dialect: "mysql"
})

export default database