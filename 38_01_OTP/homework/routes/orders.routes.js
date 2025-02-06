import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/orders.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"

let ordersRoute = Router();

ordersRoute.get("/orders", veryfyToken,  findAll)
ordersRoute.get("/orders/:id", veryfyToken,  findOne)
ordersRoute.post("/orders",  veryfyToken, create)
ordersRoute.patch("/orders/:id", veryfyToken,  update)
ordersRoute.delete("/orders/:id", veryfyToken,  remove)


export default ordersRoute