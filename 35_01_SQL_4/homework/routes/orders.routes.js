import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/orders.controller.js";

let ordersRoute = Router();

ordersRoute.get("/orders", findAll)
ordersRoute.get("/orders/:id", findOne)
ordersRoute.post("/orders", create)
ordersRoute.patch("/orders/:id", update)
ordersRoute.delete("/orders/:id", remove)


export default ordersRoute