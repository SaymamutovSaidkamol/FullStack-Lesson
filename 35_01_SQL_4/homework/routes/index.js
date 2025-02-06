import { Router } from "express";
import regionRoute from "./region.routes.js";
import bannerRoute from "./banner.routes.js";
import banner_itemRoute from "./banner_item.routes.js";
import categoryRoute from "./category.routes.js";
import productRoute from "./product.routes.js";
import commentRoute from "./comment.routes.js";
import TypeRoute from "./type.routes.js";
import type_variantRoute from "./type_variant.routes.js";
import product_variantRoute from "./product_variant.routes.js";
import ordersRoute from "./orders.routes.js";
import order_itemRoute from "./order_item.routes.js";
import UserRoute from "./user.routes.js";

let mainRoute = Router();

mainRoute.use("", regionRoute);
mainRoute.use("", bannerRoute);
mainRoute.use("", banner_itemRoute);
mainRoute.use("", categoryRoute);
mainRoute.use("", productRoute);
mainRoute.use("", commentRoute);
mainRoute.use("", TypeRoute);
mainRoute.use("", type_variantRoute);
mainRoute.use("", product_variantRoute);
mainRoute.use("", ordersRoute);
mainRoute.use("", order_itemRoute);
mainRoute.use("", UserRoute);

export default mainRoute;
