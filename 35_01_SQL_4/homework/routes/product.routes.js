import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/product.controller.js";
import upload from "../config/multer.js";

let productRoute = Router();

productRoute.get("/product", findAll)
productRoute.get("/product/:id", findOne)
productRoute.post("/product", upload.single("image"), create)
productRoute.patch("/product/:id", update)
productRoute.delete("/product/:id", remove)

export default productRoute