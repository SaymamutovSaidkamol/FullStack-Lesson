import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/banner.controller.js";

let regionRoute = Router();

regionRoute.get("/banner", findAll)
regionRoute.get("/banner/:id", findOne)
regionRoute.post("/banner", create)
regionRoute.patch("/banner/:id", update)
regionRoute.delete("/banner/:id", remove)


export default regionRoute