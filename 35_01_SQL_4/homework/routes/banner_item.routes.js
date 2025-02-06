import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controllers/banner_item.controller.js";

let banner_itemRoute = Router();

banner_itemRoute.get("/banner_item", findAll)
banner_itemRoute.get("/banner_item/:id", findOne)
banner_itemRoute.post("/banner_item", create)
banner_itemRoute.patch("/banner_item/:id", update)
banner_itemRoute.delete("/banner_item/:id", remove)


export default banner_itemRoute