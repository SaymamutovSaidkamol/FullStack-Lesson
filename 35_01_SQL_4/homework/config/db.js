import connection from "mysql2/promise";

let db = await connection.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "online_magazin",
});

export default db;
