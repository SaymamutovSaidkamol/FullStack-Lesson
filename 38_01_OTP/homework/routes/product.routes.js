import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/product.controller.js";
import upload from "../config/multer.js";
import veryfyToken from "../middlewares/verifay_token.js"

let productRoute = Router();

productRoute.get("/product", veryfyToken, findAll)
productRoute.get("/product/:id", veryfyToken, findOne)
productRoute.post("/product", veryfyToken, upload.single("image"), create)
productRoute.patch("/product/:id", veryfyToken, update)
productRoute.delete("/product/:id",  veryfyToken,remove)

export default productRoute