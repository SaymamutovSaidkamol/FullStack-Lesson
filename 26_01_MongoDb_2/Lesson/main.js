const express = require("express")
const app = express()

const connectDb = require("./config/mongoose")
const CotegoryRote = require("./routes/cotegory")
const ProductRote = require("./routes/product")

app.use(express.json())
connectDb()

app.use("/product", ProductRote)
app.use("/cotegory", CotegoryRote)

app.listen(3001, ()=>{
    console.log("Server 300 portda ishlamoqda...");
    
})

