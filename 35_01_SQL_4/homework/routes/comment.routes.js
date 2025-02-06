import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/comment.controller.js";

let commentRoute = Router();

commentRoute.get("/comment", findAll)
commentRoute.get("/comment/:id", findOne)
commentRoute.post("/comment", create)
commentRoute.patch("/comment/:id", update)
commentRoute.delete("/comment/:id", remove)

export default commentRoute