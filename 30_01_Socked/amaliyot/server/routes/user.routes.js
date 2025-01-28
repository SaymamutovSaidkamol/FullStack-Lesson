const { Router } = require("express");
const { login } = require("../controllers/user.controller")

let userRoute = Router

userRoute.post("/login")

module.exports = userRoute