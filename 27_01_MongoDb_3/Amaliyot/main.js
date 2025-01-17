import {config} from "dotenv"
import express from "express"
import mongoose from "mongoose"

config()

let app = express()

async function bootstrap() {
    mongoose.connect(process.env.PORT_URL)
    console.log("connected db✅");

    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server ${process.env.PORT} portda ishlamoqda...`);
        
    })   
}

bootstrap()