import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/type.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let typeRoute = Router();

typeRoute.get("/type",veryfyToken,  findAll)
typeRoute.get("/type/:id", veryfyToken, findOne)
typeRoute.post("/type",veryfyToken,  create)
typeRoute.patch("/type/:id",veryfyToken,  update)
typeRoute.delete("/type/:id",veryfyToken,  remove)


export default typeRoute