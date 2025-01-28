import exp from "constants"
import multer from "multer"
import path from "path"

let storage = multer.diskStorage(
    {
        destination: (req, file, cb)=>{
            cb(null, "./uploads")
        },
        filename: (req, file, cb)=>{
            let filename = path.extname(file.originalname)

            cb(null, `${Date.now()} ${filename}`)
        }
    }
)

let upload = multer({storage})

export default upload