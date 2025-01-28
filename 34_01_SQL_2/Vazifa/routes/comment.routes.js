import { Router } from "express";
import { create, deleted, findAll, findOne, update } from "./../controllers/comment.controller.js";


let commentRoute = Router()

commentRoute.get("/comment", findAll)
commentRoute.get("/comment/:id", findOne)
commentRoute.post("/comment", create)
commentRoute.patch("/comment/:id", update)
commentRoute.delete("/comment/:id", deleted)

export default commentRoute