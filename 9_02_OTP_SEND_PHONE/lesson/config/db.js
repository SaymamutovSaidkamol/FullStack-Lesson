import mysql from "mysql2/promise"

let connectDB = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "homework"
})

export default connectDB