import { Router } from "express";
import {
  findAll,
  findOne,
  login,
  refresh,
  register,
  remove,
  VerifyOtp,
} from "../controllers/user.controller.js";
import VerifyToken from "../middlewares/verify_token.js";
import RefreshToken from "../middlewares/refresh_token.js";
import VerifyAdminToken from "../middlewares/VerifyAdmin.js";

let route = Router();

route.get("/", findAll);
route.get("/:id", VerifyToken, findOne);
route.post("/register", register);
route.post("/login", login);
route.post("/refresh", RefreshToken, refresh);
route.delete("/:id", VerifyAdminToken, remove);
route.post("/verify", VerifyOtp);

export default route;
