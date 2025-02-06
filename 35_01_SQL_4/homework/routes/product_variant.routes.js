import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/product_variant.controller.js";

let product_variantRoute = Router();

product_variantRoute.get("/product_variant", findAll)
product_variantRoute.get("/product_variant/:id", findOne)
product_variantRoute.post("/product_variant", create)
product_variantRoute.patch("/product_variant/:id", update)
product_variantRoute.delete("/product_variant/:id", remove)


export default product_variantRoute