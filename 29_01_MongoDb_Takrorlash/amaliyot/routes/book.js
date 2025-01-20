const {Router} = require("express")
const upload = require("./../utils/multer")
const {create} = require("../controllers/book")

let route = Router()

route.post("/", upload.single("image"), create)

module.exports = route