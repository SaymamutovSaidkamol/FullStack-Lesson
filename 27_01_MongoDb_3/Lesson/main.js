const express = require("express")

const connectDb = require("./config/mongoose")
const CotegoryRote = require("./routes/after")
const ProductRote = require("./routes/book")
const multer = require('multer');

let port = 3001
let dest = "uploads"

const nastroyka = multer.diskStorage({
    filename: (req, file, cb)=>{
        console.log(req);
        cb(null, Math.random() + file.originalname)
    },
    destination: (req, file, cb)=> {
        cb(null, dest)
    }
})

const upload = multer({storage: nastroyka})
const app = express()

app.post("/upload", upload.single("picture"), (req, res)=>{

    res.send(req.file)
})

app.use(express.json())
app.use("/rasm", express.static(dest))

connectDb()
app.use("/book", ProductRote)
app.use("/after", CotegoryRote)
app.use("*", (req, res) =>{
    res.status(404).send({msg: "Not found this route"})
})

app.listen(port, ()=>{
    console.log(`Server ${port} portda ishlamoqda...`);
    
})

