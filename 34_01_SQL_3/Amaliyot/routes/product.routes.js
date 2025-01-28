import { Router } from "express";
import urtakash from "../middlewares/auth.js";
import { create, deleted, findAll, findOne, update} from "../controllers/product.controllers.js";
import upload from "../middlewares/multer.js"

let route = Router()

route.get("/product", findAll)
route.get("/product/:id", findOne)
route.post("/product", urtakash, upload.single("image"), create)
route.patch("/product/:id",urtakash, upload.single("image"), update)
route.delete("/product/:id", urtakash, deleted)

export default route