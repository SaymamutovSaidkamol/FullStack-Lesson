const { Schema, model } = require("mongoose");

let userSchema = new Schema({
    username: {
        type: String,
        required: true,
        uniquie: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    versionKey: false, timestamps: true
})

let userModel = model("user", userSchema)

module.exports = userModel