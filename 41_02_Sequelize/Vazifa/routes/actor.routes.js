import { Router } from "express";
import {
  create,
  findAll,
  findBySearch,
  findOne,
  remove,
  update,
} from "../controllers/actor.controller.js";

let actorRoute = Router();

actorRoute.get("/", findAll);
actorRoute.get("/:id", findOne);
actorRoute.get("/search", findBySearch);
actorRoute.post("/", create);
actorRoute.patch("/:id", update);
actorRoute.delete("/:id", remove);

export default actorRoute;
