const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db.js")
const UserRoute = require("./routes/user.js")

let port = process.env.PORT || 3000
let app = express()
app.use(express.json())
connectDb()

app.use("/user", UserRoute)

app.listen(port, ()=>{
    console.log(`Server ${port} da ishlamoqda...`);
    
})