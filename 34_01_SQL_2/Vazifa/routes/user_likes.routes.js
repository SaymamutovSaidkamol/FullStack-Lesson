import { Router } from "express";
import { create, deleted, findAll, findOne, update } from "../controllers/user_likes.controller.js";

let user_likesRoute = Router()

user_likesRoute.get("/user_likes", findAll)
user_likesRoute.get("/user_likes/:id", findOne)
user_likesRoute.post("/user_likes", create)
user_likesRoute.patch("/user_likes/:id", update)
user_likesRoute.delete("/user_likes/:id", deleted)

export default user_likesRoute
