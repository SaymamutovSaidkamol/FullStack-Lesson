const express = require("express")
const multer = require("multer")
const path = require("path")

// const {upload} = require("./middlewares/multer.js")
const RouteCategory = require("./routes/category.js")
const RouteProduct = require("./routes/product.js")
const RouteUser = require("./routes/user.js")
const connectDb = require("./config/db.js")

connectDb()

let app = express()
app.use(express.json())

app.use("/category", RouteCategory)
app.use("/product", RouteProduct)
app.use("/user", RouteUser)

app.listen(4000, ()=>{
    console.log("Server 4000 portda ishlamoqda...");
    
})