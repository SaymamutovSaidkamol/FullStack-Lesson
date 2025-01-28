import { Router } from "express";
import { create, deleted, findAll, findOne, update } from "../controllers/user.controller.js";

let userRoute = Router()

userRoute.get("/user", findAll)
userRoute.get("/user/:id", findOne)
userRoute.post("/user", create)
userRoute.patch("/user/:id", update)
userRoute.delete("/user/:id", deleted)

export default userRoute
