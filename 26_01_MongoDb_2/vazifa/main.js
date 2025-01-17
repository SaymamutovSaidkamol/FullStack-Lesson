const express = require("express")
const app = express()

const connectDb = require("./config/mongoose")
const CotegoryRote = require("./routes/after")
const ProductRote = require("./routes/book")

app.use(express.json())
connectDb()

app.use("/book", ProductRote)
app.use("/after", CotegoryRote)
app.use("*", (req, res) =>{
    res.status(404).send({msg: "Not found this route"})
})


app.listen(3000, ()=>{
    console.log("Server 300 portda ishlamoqda...");
    
})

