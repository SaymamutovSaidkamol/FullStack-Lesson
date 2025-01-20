const mongoose = require("mongoose")
const joi = require("joi")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const UserValidation = joi.object({
    username: joi.string().min(3).max(15),
    email: joi.string().min(13).max(20).required(),
    password: joi.string().min(3).max(100).required()
})

const User = mongoose.model("Userlar", UserSchema)
module.exports = { UserValidation, User}