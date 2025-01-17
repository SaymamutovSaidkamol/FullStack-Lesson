import { Router } from "express";
import productRoute from "./product.routes";

let mainRoute = Router()

mainRoute.use("/", productRoute)

export default mainRoute