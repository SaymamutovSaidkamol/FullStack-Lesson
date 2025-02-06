import {Router} from "express"
import { create, findAll, findOne, remove, update } from "../controllers/product.controller.js"
import verify_token from "../middlewares/verify.token.js"

let route = Router()

route.get("", verify_token, findAll)
route.get("/:id", verify_token, findOne)
route.post("",update)
route.patch("/:id", verify_token, create)
route.delete("/:id", verify_token, remove)

export default route