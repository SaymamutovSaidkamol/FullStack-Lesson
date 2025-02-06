import { Router } from "express";
import {LoginPost, RegisterPost, findAll, findOne, update, VerifyToken, remove} from "../controllers/user.controller.js";
import adminMiddleware from "../middlewares/admins_authorization.js"
import veryfyToken from "../middlewares/verifay_token.js"


let userRoute = Router()

userRoute.post("/login", LoginPost)
userRoute.post("/register", RegisterPost)
userRoute.get("/user", adminMiddleware(["admin", "superadmin"]), findAll)
userRoute.get("/user/:id", adminMiddleware(["admin", "superadmin"]), findOne)
userRoute.patch("/user/:id", veryfyToken, update)
userRoute.get("/verify/:token", VerifyToken)
userRoute.delete("/user/:id", veryfyToken, remove)

export default userRoute