import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controller/club.controller.js";

let route = Router()

route.get("/", findAll)
route.get("/:id", findOne)
route.post("/", create)
route.patch("/:id", update)
route.delete("/:id", remove)

export default route