const express = require("express");
const connectDb = require("./config/db.js");
const UserRoute = require("./routes/user.js");

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { User } = require("./models/users.js");

let app = express();

app.use(
    cors({
        origin: "*",
        methods: "*",
    })
);

app.use(express.json());
app.use("/user", UserRoute);

let server = http.createServer(app);
let io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("Foydalanuvchi ulandi", socket.id)

    socket.on("chat message", (from_name, message, to_name)=>{
        console.log(from_name, message, to_name);
    })

    io.emit("chat message", { username: "Ali", createdAt: "12:12" });




});
console.log(User);

server.listen(3000, () => {
    console.log("Server 3000 portda ishlamoqda...");
});

connectDb();
