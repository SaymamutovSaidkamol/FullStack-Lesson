const multer = require("multer")
require("dotenv").config()

let dest = process.env.DEST
const settings = multer.diskStorage({
    filename: (req, file, cb) =>{
        cb(null, Math.random() + file.originalname)
    },
    destination: (req, file, cb) =>{
        cb(null, dest)
    },
})

const uploadMiddleware = multer({ storage: settings })

module.exports = uploadMiddleware