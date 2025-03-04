import { Router } from "express";

let mainRoute = Router()
import AuthorRoute from "./author.routes.js"
import BookRoute from "./book.routes.js"

mainRoute.use("/author", AuthorRoute)
mainRoute.use("/book", BookRoute)

export default mainRoute