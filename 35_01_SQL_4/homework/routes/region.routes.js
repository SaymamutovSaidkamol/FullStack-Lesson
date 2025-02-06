import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/region.controller.js";

let regionRoute = Router();

regionRoute.get("/regions", findAll)
regionRoute.get("/regions/:id", findOne)
regionRoute.post("/regions", create)
regionRoute.patch("/regions/:id", update)
regionRoute.delete("/regions/:id", remove)


export default regionRoute