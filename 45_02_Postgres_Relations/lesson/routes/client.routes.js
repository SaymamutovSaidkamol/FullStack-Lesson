import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/client.controller.js";

let route = Router()

route.get("/", findAll)
route.get("/:id", findOne)
route.post("/", create)
route.patch("/:id", update)
route.delete("/:id", remove)

export default route