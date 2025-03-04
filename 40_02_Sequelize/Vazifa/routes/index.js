import { Router } from "express";

let route = Router()

import AuthorRoute from "./author.routes.js"
import BookRoute from "./book.routes.js"

route.use("/author", AuthorRoute)
route.use("/book", BookRoute)

export default route