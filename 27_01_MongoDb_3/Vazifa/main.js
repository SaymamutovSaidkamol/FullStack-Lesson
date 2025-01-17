require("dotenv").config()
const connnectDb = require("./config/db.js")

const express = require("express")
const app = express()

const AftorRoute = require("./routes/aftor.js")
const BookRoute = require("./routes/book.js")
const Multer = require("./middlewares/multer.js")

let dest = process.env.DEST
app.use("/uploads", Multer.single('picture'), (req, res)=>{
    res.send(`http://localhost:${port}/rasm/`+req.file.filename)
})

app.use("/rasm", express.static(dest))




connnectDb()
app.use(express.json())

let port = process.env.PORT || 3001

app.use("/aftor", AftorRoute)
app.use("/book", BookRoute)

app.listen(port, ()=>{
    console.log(`Server ${port} da ishlamoqda...`);
    
})