import { Router } from "express";
import UserLogin from "../routes/users.routes.js";

let app = Router();

app.use("", UserLogin);

export default app;
