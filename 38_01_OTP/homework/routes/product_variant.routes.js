import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/product_variant.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let product_variantRoute = Router();

product_variantRoute.get("/product_variant", veryfyToken ,findAll)
product_variantRoute.get("/product_variant/:id",veryfyToken , findOne)
product_variantRoute.post("/product_variant", veryfyToken ,create)
product_variantRoute.patch("/product_variant/:id",veryfyToken , update)
product_variantRoute.delete("/product_variant/:id",veryfyToken , remove)


export default product_variantRoute