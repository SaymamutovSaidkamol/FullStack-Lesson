import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/comment.controller.js";
import veryfyToken from "../middlewares/verifay_token.js"


let commentRoute = Router();

commentRoute.get("/comment", veryfyToken, findAll)
commentRoute.get("/comment/:id",veryfyToken,  findOne)
commentRoute.post("/comment", veryfyToken, create)
commentRoute.patch("/comment/:id",veryfyToken,  update)
commentRoute.delete("/comment/:id",veryfyToken, remove)

export default commentRoute