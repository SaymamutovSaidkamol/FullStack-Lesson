import { Router } from "express";
import { create, findAll, findOne, remove, Search, update } from "../controllers/learningcenter.controller.js";

let route  =Router()

route.get("/", findAll)
route.get("/search", Search)
route.get("/:id", findOne)
route.post("/", create)
route.patch("/:id", update)
route.delete("/:id", remove)

export default route