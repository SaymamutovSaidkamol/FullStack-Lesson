import { Router } from "express";
import UserRoute from "./user.routes.js";
import RegionRoute from "./region.routes.js";
import CommentRoute from "./comment.routes.js";
import UploadImgRoute from "./uploadImg.routes.js";
import CategoryRoute from "./category.routes.js";
import BannersRoute from "./banner.routes.js";
import LikesRoute from "./likes.routes.js";
import TranzactionRoute from "./tranzaction.routes.js";
import RegionBunnerItemRoute from "./regionbannerItem.routes.js";

let mainRoute = Router();

mainRoute.use("/users", UserRoute);
mainRoute.use("/region", RegionRoute);
mainRoute.use("/comment", CommentRoute);
mainRoute.use("/upload-img", UploadImgRoute);
mainRoute.use("/categ", CategoryRoute);
mainRoute.use("/banner", BannersRoute);
mainRoute.use("/likes", LikesRoute);
mainRoute.use("/tranzaction", TranzactionRoute);
mainRoute.use("/regionbanneritems", RegionBunnerItemRoute);

export default mainRoute;