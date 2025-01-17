const mongoose = require("mongoose")
const joi = require("joi")


const AftorSchema = new mongoose.Schema({
    name: String,
    img: String,
    year: String,
    janr: []

})

const AftorValidation = joi.object({
    name: joi.string().max(40).min(3).required(),
    img: joi.string().required(),
    year: joi.string().max(4).min(3).required(),
    janr: joi.array().required()
})

const Aftor = mongoose.model("Aftor", AftorSchema)

module.exports = { AftorValidation ,Aftor }