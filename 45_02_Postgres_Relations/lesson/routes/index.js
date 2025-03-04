import { Router } from "express";
import UserMainRoute from "./user.routes.js";
import PlastmassaMainRoute from "./plastmassa.routes.js";
import ColorMainRoute from "./color.routes.js";
import RegionMainRoute from "./region.routes.js";
import ClientMainRoute from "./client.routes.js";
import OrderMainRoute from "./order.routes.js";

let mainRoute = Router();

mainRoute.use("/users", UserMainRoute);
mainRoute.use("/plastic", PlastmassaMainRoute);
mainRoute.use("/color", ColorMainRoute);
mainRoute.use("/client", ClientMainRoute);
mainRoute.use("/region", RegionMainRoute);
mainRoute.use("/order", OrderMainRoute);

export default mainRoute;
