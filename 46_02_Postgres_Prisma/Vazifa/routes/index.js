import { Router } from "express";

let mainRoute = Router()
import AuthorRoute from "./learningcenter.routes.js"
import BookRoute from "./student.routes.js"
import UserenrolemtnRoute from "./userenrolment.routes.js"

mainRoute.use("/learning-center", AuthorRoute)
mainRoute.use("/student", BookRoute)
mainRoute.use("/User-enrol", UserenrolemtnRoute)

export default mainRoute