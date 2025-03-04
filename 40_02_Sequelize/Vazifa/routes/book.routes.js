import { Router } from "express";
import { create, findAll, findBySearch, findOne, remove, update } from "../controllers/book.controller.js";

let route = Router()

route.get("/", findAll)
route.get("/:id", findOne)
route.get("/search", findBySearch)
route.post("", create)
route.patch("/:id", update)
route.delete("/:id", remove)

export default route