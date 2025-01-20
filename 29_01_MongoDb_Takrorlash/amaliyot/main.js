const express = require("express")
const route = require("./routes/book")

let app = express()
app.use(express.json())

app.use("/book", route)

app.listen(3000, ()=>{
    console.log("Server 300 bortda ishlamoqda...");
})