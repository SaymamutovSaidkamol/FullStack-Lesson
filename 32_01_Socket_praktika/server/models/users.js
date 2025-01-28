const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    },
    { 
        versionKey: false, 
        timestamps: true, 
    })

const User = model("Userlar", UserSchema)

module.exports = {User}