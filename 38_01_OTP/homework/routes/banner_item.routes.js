import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/banner_item.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let banner_itemRoute = Router();

banner_itemRoute.get("/banner_item", veryfyToken,findAll)
banner_itemRoute.get("/banner_item/:id",veryfyToken, findOne)
banner_itemRoute.post("/banner_item",veryfyToken, create)
banner_itemRoute.patch("/banner_item/:id",veryfyToken, update)
banner_itemRoute.delete("/banner_item/:id",veryfyToken, remove)


export default banner_itemRoute