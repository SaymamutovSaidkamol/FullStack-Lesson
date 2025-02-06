import {LoginPost, Otp, RegisterPost, VerifyToken, findAll, findOne, update } from "../controllers/users.controller.js"
import veryfyToken from "../middlewares/verifay_token.js"
import {Router} from "express"

let userRoute = Router()

userRoute.post("/login", LoginPost)
userRoute.post("/register", RegisterPost)
userRoute.get("/users", findAll)
userRoute.get("/users/:id", findOne)
userRoute.patch("/users/:id",veryfyToken, update)
userRoute.get("/verify/:token", VerifyToken)
userRoute.get("/otp/:token/:email", Otp)

export default userRoute