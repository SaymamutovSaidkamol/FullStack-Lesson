import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/type_variant.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let type_variantRoute = Router();

type_variantRoute.get("/type_variant",veryfyToken,  findAll)
type_variantRoute.get("/type_variant/:id",veryfyToken,  findOne)
type_variantRoute.post("/type_variant",veryfyToken,  create)
type_variantRoute.patch("/type_variant/:id",veryfyToken,  update)
type_variantRoute.delete("/type_variant/:id", veryfyToken, remove)


export default type_variantRoute