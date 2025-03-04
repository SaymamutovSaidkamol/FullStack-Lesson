import { Router } from "express";
import {
  create,
  findAll,
  findBySearch,
  findOne,
  remove,
  update,
} from "../controllers/movies.controller.js";

let moviesRoute = Router();

moviesRoute.get("/", findAll);
moviesRoute.get("/:id", findOne);
moviesRoute.get("/search", findBySearch);
moviesRoute.post("/", create);
moviesRoute.patch("/:id", update);
moviesRoute.delete("/:id", remove);

export default moviesRoute;
