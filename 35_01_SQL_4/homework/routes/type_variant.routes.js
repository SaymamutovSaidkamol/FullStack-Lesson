import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/type_variant.controller.js";

let type_variantRoute = Router();

type_variantRoute.get("/type_variant", findAll)
type_variantRoute.get("/type_variant/:id", findOne)
type_variantRoute.post("/type_variant", create)
type_variantRoute.patch("/type_variant/:id", update)
type_variantRoute.delete("/type_variant/:id", remove)


export default type_variantRoute