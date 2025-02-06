import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/order_item.controller.js";

let order_itemRoute = Router();

order_itemRoute.get("/order_item", findAll)
order_itemRoute.get("/order_item/:id", findOne)
order_itemRoute.post("/order_item", create)
order_itemRoute.patch("/order_item/:id", update)
order_itemRoute.delete("/order_item/:id", remove)


export default order_itemRoute