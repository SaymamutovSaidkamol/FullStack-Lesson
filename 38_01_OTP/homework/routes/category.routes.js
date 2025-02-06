import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/category.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"

let categoryRoute = Router();

categoryRoute.get("/category", veryfyToken, findAll)
categoryRoute.get("/category/:id", veryfyToken, findOne)
categoryRoute.post("/category", veryfyToken, create)
categoryRoute.patch("/category/:id",veryfyToken,  update)
categoryRoute.delete("/category/:id",veryfyToken,  remove)

export default categoryRoute