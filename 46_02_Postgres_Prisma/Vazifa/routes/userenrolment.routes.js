import { Router } from "express";
import { create, remove } from "../controllers/userenrolment.controller.js";

let route = Router();

route.post("/", create);
route.delete("/:id", remove);

export default route;
