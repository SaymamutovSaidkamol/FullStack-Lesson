import { Router } from "express";

import userRoute from "./user.routes.js";
import orderRoute from "./order.routes.js";
import ordinary_roomRoute from "./ordinary_room.routes.js";
import vip_roomRoute from "./vip_room.routes.js";

let mainRoute = Router();

mainRoute.use("/users", userRoute);
mainRoute.use("/order", orderRoute);
mainRoute.use("/order-room", ordinary_roomRoute);
mainRoute.use("/vip-room", vip_roomRoute);

export default mainRoute;
