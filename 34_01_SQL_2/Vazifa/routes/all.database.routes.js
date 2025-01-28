import { Router } from "express";
import findAll from "../controllers/all.database.controller.js";

let allRoute = Router()

allRoute.get("/all", findAll)

export default allRoute