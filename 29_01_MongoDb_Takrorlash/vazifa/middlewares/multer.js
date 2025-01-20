const multer = require("multer")
const path = require("path")

let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./uploads")
    },
    filename: (req, file, cb)=>{
        let filename = path.extname(file.originalname)

        cb(null, `${Date.now()}${filename}`)
    }
})

let upload = multer({storage})

module.exports = upload