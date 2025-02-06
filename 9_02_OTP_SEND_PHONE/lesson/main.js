import express from "express"
import dotenv from "dotenv"
import AllRoutes from "./routes/index.js"
dotenv.config()

let port = process.env.PORT || 3000

let app = express()
app.use(express.json())

app.use("", AllRoutes)

app.listen(port, ()=>{
    console.log(`Server ${port} da ishlamoqda...`);
    
})