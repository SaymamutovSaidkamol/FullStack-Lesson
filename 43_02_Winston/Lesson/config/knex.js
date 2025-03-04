import knex from "knex";

const db = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root", // MySQL foydalanuvchi nomi
    password: "root", // MySQL paroli
    database: "n16", // MySQL bazasi nomi
  },
});

export default db;
