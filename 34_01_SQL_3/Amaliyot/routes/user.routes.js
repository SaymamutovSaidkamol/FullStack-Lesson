import { Router } from "express";
import { findall, register, login } from "../controllers/user.controllers.js";
import urtakash from "../middlewares/auth.js";

let route = Router()

route.get("/users", findall)
route.post("/register", register)
route.post("/login", login)

export default route