import { Router } from "express";
import { findAll, findOne, create, update, deleted } from "./../controllers/book.controller.js";


let authorRoute = Router()

authorRoute.get("/book", findAll)
authorRoute.get("/book/:id", findOne)
authorRoute.post("/book", create)
authorRoute.patch("/book/:id", update)
authorRoute.delete("/book/:id", deleted)

export default authorRoute