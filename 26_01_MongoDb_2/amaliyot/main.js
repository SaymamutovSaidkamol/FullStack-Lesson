import express from "express"

import mongoose from "mongoose"
import config  from "config"
import mainRoute from "./routes/index.js"


const app =express()

app.use(express.json)
app.use("/api", mainRoute)

app.use("*", (req, res) => {
    res.status(404).send({ msg: "Not found this route" });
});

async function bootsarp(params) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:127017")
        console.log("Connnected db✅");
        
        app.listen(config.get("PORT", ()=>{
            console.log(`Server ${config.get("PORT")} da ishlamoqda...`);
            
        }))
    } catch (error) {
        console.log(error.message);
        
    }
}
