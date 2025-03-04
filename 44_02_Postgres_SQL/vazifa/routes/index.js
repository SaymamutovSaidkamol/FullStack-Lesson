import { Router } from "express"
let mainRoute = Router()

import PlayerRoute from "./player.routes.js"
import ClubRoute from "./club.routes.js"
import CantraktRoute from "./cantract.routes.js"

mainRoute.use("/player", PlayerRoute)
mainRoute.use("/cantrakt", CantraktRoute)
mainRoute.use("/club", ClubRoute)

export default mainRoute