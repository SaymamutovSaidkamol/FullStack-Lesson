const express= require("express")
const mongoose= require("mongoose")
const http= require("http")
const {Server} = require("socket.io")
const userRoute = require("./routes/user.routes.js")

let app = express()
app.use(express.json())
app.use("/api", userRoute)

let server = http.createServer(app)

let io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket)=>{
    console.log("id", socket.id);
    
    socket.on("disconnect", ()=>{
        console.log("Left the --> ", socket.id);
    
    })
}) 



async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/chat")
        server.listen(4000, ()=>{
            console.log("Server 4000 portda ishlamoqda...");
            
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

bootstrap()