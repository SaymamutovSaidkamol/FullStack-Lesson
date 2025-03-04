import express from "express"
import sequelize from "./config/db.js"

let app = express()

app.use(express.json())

async function initialize() {
    try {
        await sequelize.authenticate()
        console.log("Salomm dscsdcsdcsdcsd");
        
    } catch (error) {
        console.log("Error");
        
    }
}

initialize()

app.use("/praduct")

app.listen(3000, ()=>{
    console.log("Hello Server");
    
})