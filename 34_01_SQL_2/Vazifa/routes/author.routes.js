import { Router } from "express";
import { findAll, findOne, create, update, deleted } from "./../controllers/author.controller.js";


let authorRoute = Router()

authorRoute.get("/authors", findAll)
authorRoute.get("/author/:id", findOne)
authorRoute.post("/authors", create)
authorRoute.patch("/author/:id", update)
authorRoute.delete("/author/:id", deleted)

export default authorRoute