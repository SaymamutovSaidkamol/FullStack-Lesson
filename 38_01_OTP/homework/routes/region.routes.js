import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/region.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let regionRoute = Router();

regionRoute.get("/regions",  veryfyToken, findAll)
regionRoute.get("/regions/:id",  veryfyToken, findOne)
regionRoute.post("/regions",  veryfyToken, create)
regionRoute.patch("/regions/:id", veryfyToken,  update)
regionRoute.delete("/regions/:id", veryfyToken,  remove)


export default regionRoute