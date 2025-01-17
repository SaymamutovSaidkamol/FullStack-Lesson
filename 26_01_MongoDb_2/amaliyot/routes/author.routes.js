import { Router } from "express"
import {
    findAll,
    create,
    findOne,
    remove,
    update
}from "../controller/author.js"


const authorRout = Router()

authorRout.get("/authors", findAll)
authorRout.get("/authors", create)
authorRout.get("/authors/:id", findOne)
authorRout.get("/authors/:id", update)
authorRout.get("/authors/:id", remove)

export default authorRout