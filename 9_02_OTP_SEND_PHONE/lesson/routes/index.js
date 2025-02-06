import {Router} from "express"


import userRoute from "./user.routes.js"
import productRoute from "./product.routes.js"

let route = Router()


route.use("/user", userRoute)
route.use("/product", productRoute)

export default route