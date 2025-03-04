import { Router } from "express";
import {
    findAll,
    findOne,
    create,
    Search,
    update,
    remove,
} from "../controllers/vip_room.controller.js";
import VerifyToken from "../middlewares/verify_token.js";
import upload from '../config/multer.js';
import VerifyAdminToken from "../middlewares/VerifyAdmin.js";


let route = Router();

route.get("/", findAll);
route.get("/search", Search);
route.get("/:id", findOne);
route.post("/", upload.single("img"), create);
route.patch("/:id", VerifyAdminToken, update);
route.delete("/:id", VerifyAdminToken, remove);


export default route;
