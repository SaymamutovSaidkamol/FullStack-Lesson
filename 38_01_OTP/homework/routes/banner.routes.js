import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/banner.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let regionRoute = Router();

regionRoute.get("/banner",veryfyToken,  findAll)
regionRoute.get("/banner/:id", veryfyToken, findOne)
regionRoute.post("/banner", veryfyToken, create)
regionRoute.patch("/banner/:id",veryfyToken,  update)
regionRoute.delete("/banner/:id",veryfyToken,  remove)


export default regionRoute