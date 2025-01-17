const mongoose = require("mongoose")

const joi = require("joi")

const BookSchema = new mongoose.Schema({
    name: String,
    year: String,
    language: String,
    aftor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aftor"
    },
    janr: []
})
const BookValidation = joi.object({
    name: joi.string().max(45).min(2).required(),
    year: joi.string().max(4).min(3).required(),
    language: joi.string().required(),
    aftor: joi.string().required(),
    janr: joi.array().required()
})

const Book = mongoose.model("Book", BookSchema)

module.exports = { BookValidation, Book }