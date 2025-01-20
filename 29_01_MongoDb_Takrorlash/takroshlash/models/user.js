const mongoose = require("mongoose")
const joi = require("joi")

const UserSchema = new mongoose.Schema({
    Username: String,
    email: String,
    password: String
})

//exaple@gmail.com 

const UserValidation = joi.object({
    Username: joi.string().min(3).max(15).required(),
    email: joi.string().min(15).max(25).required(),
    password: joi.string().min(4).max(10).required()
})

const User = mongoose.model("Userlar", UserSchema)

module.exports = { UserValidation, User }