import { Router } from "express";
import { BuySell, create, findAll, findOne, remove, update } from "../controllers/user.controller.js";

let route = Router()

route.get("/", findAll)
route.get("/:id", findOne)
route.post("/", create)
route.patch("/:id", update)
route.delete("/:id", remove)
route.post("/buy-sell/:id", BuySell)

export default route