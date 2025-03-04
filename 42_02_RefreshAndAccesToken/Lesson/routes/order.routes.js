import { Router } from "express";
import {
  findAll,
  findOne,
  create,
  update,
  remove,
  Search,

} from "../controllers/order.controller.js";
import VerifyToken from "../middlewares/verify_token.js";
import VerifyAdminToken from "../middlewares/VerifyAdmin.js";

let route = Router();

route.get("/", findAll);
route.get("/search", Search);
route.get("/:id", findOne);
route.post("/", create);
route.patch("/:id",VerifyAdminToken, update);
route.delete("/:id", VerifyAdminToken, remove);

export default route;
