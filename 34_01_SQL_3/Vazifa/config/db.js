import mysql from "mysql2/promise"

let db = await mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "homework"
    }
)

export default db