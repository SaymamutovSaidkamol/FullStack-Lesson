import { Router } from "express";
import urtakash from "../middlewares/auth.js";
import { create, deleted, findAll, findOne, update} from "../controllers/category.controllers.js";

let route = Router()

route.get("/category", findAll)
route.get("/category/:id", findOne)
route.post("/category", urtakash, create)
route.patch("/category/:id",urtakash, update)
route.delete("/category/:id", urtakash, deleted)

export default route