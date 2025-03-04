console.time();
import express from "express"
import MainRoute from "./routes/index.js"

let app = express()

app.use(express.json())
app.use(MainRoute)

app.listen(4000, ()=>{
    console.log("Server started on port 4000🟢");
})

console.timeEnd()