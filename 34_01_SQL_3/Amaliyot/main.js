import express from "express"

import UserRoute from "./routes/user.routes.js"
import CategoryRoute from "./routes/category.routes.js"
import ProductRoute from "./routes/product.routes.js"


let app = express()

app.use(express.json())

app.use("/api", UserRoute)
app.use("/api", CategoryRoute)
app.use("/api", ProductRoute)

app.listen(3000, ()=>{
    console.log("Server 4000 portda ishlamoqda...");
    
})