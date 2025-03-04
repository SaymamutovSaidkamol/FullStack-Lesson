import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./config/db.js"


dotenv.config()
let PORT  = process.env.PORT || 4000
let app = express()
app.use(express.json())

app.use(
    cors({
        origin: "*",
    })
)

async function bootstarpt() {
    try {
        //database connection
        await database.sync()
        console.log("Connect to db");
        
        app.listen(4000, ()=>{console.log("Hellor server");
        })
    } catch (error) {
        console.log(error.message);
        
    }
}


bootstarpt()