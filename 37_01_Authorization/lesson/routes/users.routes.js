import {LoginPost, RegisterPost } from "../controllers/users.controller.js"
import {Router} from "express"

let userRoute = Router()

userRoute.post("/login", LoginPost)
userRoute.post("/register", RegisterPost)

export default userRoute