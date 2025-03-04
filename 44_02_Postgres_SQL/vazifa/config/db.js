import pkg from "pg";
const { Pool } = pkg;

let pool = new Pool({
  host: "localhost",
  database: "n16",
  password: "root",
  user: "postgres",
  port: "5432",
});

export default pool;
