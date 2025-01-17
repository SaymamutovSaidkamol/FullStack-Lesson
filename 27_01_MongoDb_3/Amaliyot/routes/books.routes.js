import {Router} from "express"

import {
    findAll,
    findOne,
    create,
    update,
    remove
}from "../controllers/author.controllers.js"

const authorRoute = Router()

authorRoute.get("/authors", findAll)
authorRoute.get("/authors", findOne)
authorRoute.get("/authors/:id", create)
authorRoute.get("/authors/:id", update)
authorRoute.get("/authors/:id", remove)

export default authorRoute;