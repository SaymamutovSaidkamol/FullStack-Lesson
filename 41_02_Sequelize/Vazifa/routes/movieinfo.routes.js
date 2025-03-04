import { Router } from "express";
import { create } from "../controllers/moviesinfo.controller.js";

let movieInfoRoute = Router();

movieInfoRoute.post("/", create);

export default movieInfoRoute;
