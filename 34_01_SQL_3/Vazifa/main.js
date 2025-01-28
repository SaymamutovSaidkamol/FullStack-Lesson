import express from "express"
import dotenv from "dotenv"

import authorRoute from "./routes/author.routes.js"
import bookRoute from "./routes/book.routes.js"
import commentRoute from "./routes/comment.routes.js"
import user_likesRoute from "./routes/user_likes.routes.js"
import userRoute from "./routes/user.routes.js"
import allRoute from "./routes/all.database.routes.js"

dotenv.config()

let port = process.env.PORT || 3000
let app = express()

app.use(express.json())

app.use("/api", authorRoute)
app.use("/api", bookRoute)
app.use("/api", commentRoute)
app.use("/api", user_likesRoute)
app.use("/api", userRoute)
app.use("/api", allRoute)

app.listen(port , ()=>{
    console.log(`Server ${port} da ishlamoqda...`);

})