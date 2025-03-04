import pkg from "pg";
const { Pool } = pkg; 

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "n16",
  port: "5432",
});

export default pool;
