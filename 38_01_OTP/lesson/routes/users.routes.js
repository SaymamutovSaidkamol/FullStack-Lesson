import {LoginPost, RegisterPost, VerifyToken, findAll, findOne, update } from "../controllers/users.controller.js"
import veryfyToken from "../middlewares/verifay_token.js"
import {Router} from "express"
import adminMiddleware from "../middlewares/admins_authorization.js"

let userRoute = Router()

userRoute.post("/login", LoginPost)
userRoute.post("/register", RegisterPost)
userRoute.get("/users", adminMiddleware(["admin"]), findAll)
userRoute.get("/users/:id", findOne)
userRoute.patch("/users/:id",veryfyToken, update)
userRoute.get("/verify/:token", VerifyToken)

export default userRoute