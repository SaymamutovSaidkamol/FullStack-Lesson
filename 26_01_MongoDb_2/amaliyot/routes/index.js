import { Router } from "express";
import authorRout from "./author.routes.js";

const mainRoute = Router()

mainRoute.use("/", authorRout)

export default mainRoute