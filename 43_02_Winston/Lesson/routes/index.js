import { Router } from "express";
import UserRoute from "./user.routes.js"

let mainRoute = Router()

mainRoute.use("/user", UserRoute)

export default mainRoute