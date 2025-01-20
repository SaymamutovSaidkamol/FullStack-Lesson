const express = require("express")
const multer = require("multer")
const path = require("path")


let app = express()

let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./uploads")
    },
    filename: (req, file, cb)=> {
        let filename = path.extname(file.originalname)
        
        cb(null, `${Date.now()}${filename}`)
    }
})

let upload = multer({storage})

app.post("/book", upload.single("image"), (req, res)=>{
    let {originalname} = req.file
    let newBook = {
        ...req.body, 
        image: originalname
    }
    res.send(newBook)
})
app.listen(4000, ()=>{
    console.log("Server 4000 portda ishlamoqda...");
    
})