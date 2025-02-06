import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/type.controller.js";

let typeRoute = Router();

typeRoute.get("/type", findAll)
typeRoute.get("/type/:id", findOne)
typeRoute.post("/type", create)
typeRoute.patch("/type/:id", update)
typeRoute.delete("/type/:id", remove)


export default typeRoute