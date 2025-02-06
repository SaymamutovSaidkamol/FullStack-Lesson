import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/user.controller.js";

let userRoute = Router();

userRoute.get("/users", findAll)
userRoute.get("/users/:id", findOne)
userRoute.post("/users", create)
userRoute.patch("/users/:id", update)
userRoute.delete("/users/:id", remove)


export default userRoute