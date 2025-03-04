import { Router } from "express";
import moviesRoute from "./movies.routes.js";
import actorRoute from "./actor.routes.js";
import movieInfoRoute from "./movieinfo.routes.js";

let mainRoute = Router();

mainRoute.use("/movies", moviesRoute);
mainRoute.use("/actors", actorRoute);
mainRoute.use("/moviesInfo", movieInfoRoute);

export default mainRoute;
