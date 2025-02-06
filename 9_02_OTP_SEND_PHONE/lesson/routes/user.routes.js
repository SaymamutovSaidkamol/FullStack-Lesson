import {Router} from "express"
import { findAll, findOne, login, register, remove, sendOTP, update, verify_phone_token } from "../controllers/user.controller.js"
import verify from  "../middlewares/verify.js"
import verify_token from "../middlewares/verify.token.js"

let route = Router()

route.post("/register", register)
route.post("/login", verify, login)
route.post("/send-otp",sendOTP)
route.post("/verify/:phone/:token",verify_phone_token)
route.get("", verify_token, findAll)
route.get("/:id", verify_token, findOne)
route.patch("/:id", verify_token, update)
route.delete("/:id", verify_token, remove)

export default route