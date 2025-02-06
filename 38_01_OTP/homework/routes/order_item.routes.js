import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/order_item.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let order_itemRoute = Router();

order_itemRoute.get("/order_item", veryfyToken, findAll)
order_itemRoute.get("/order_item/:id", veryfyToken, findOne)
order_itemRoute.post("/order_item", veryfyToken, create)
order_itemRoute.patch("/order_item/:id",  veryfyToken,update)
order_itemRoute.delete("/order_item/:id", veryfyToken, remove)


export default order_itemRoute