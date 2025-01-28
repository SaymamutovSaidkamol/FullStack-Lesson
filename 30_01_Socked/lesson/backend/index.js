const express = require("express")
const {createServer} = require("http")
const {Server} = require("socket.io")
const cors = require("cors")
const { emit } = require("process")

const app = express()
app.use(cors())

const server = createServer(app)
const io = new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
})

io.on("connection", (socked)=>{
    socked.on("send-message", (data)=>{
        io.emit("from-server", data)
    })
})  

server.listen(3000, ()=>{
    console.log("Server 300 portda ishlamoqda...");
    
})