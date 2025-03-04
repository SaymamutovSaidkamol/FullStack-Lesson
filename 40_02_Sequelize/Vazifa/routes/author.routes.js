import { Router } from "express";
import { create, findAll, findBySearch, findOne, remove, update, VerifyPassword } from "../controllers/author.controller.js";
import { Authorization } from "../middlewares/verifyToken.js";

let route = Router()

route.get("/", findAll)
route.get("/:id", findOne)
route.get("/search", findBySearch)
route.post("", create)
route.post("/verify", VerifyPassword)
route.patch("/:id",Authorization, update)
route.delete("/:id", Authorization, remove)

export default route