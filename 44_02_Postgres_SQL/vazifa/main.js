import express from "express"
import mainRoute from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(mainRoute)


app.listen(4000, ()=>{
  console.log("Sever started on Port 4000🟢");
})