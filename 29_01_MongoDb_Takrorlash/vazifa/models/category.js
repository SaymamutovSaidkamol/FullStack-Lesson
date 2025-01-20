const mongoose = require("mongoose")
const joi = require("joi")

const CategorySchema = new mongoose.Schema({
    name: String,
    image: String
})

const CategoryValidation = joi.object({
    name: joi.string().min(2).max(10).required(),
    image: joi.string().required()
})
const CategoryPatchValidation = joi.object({
    name: joi.string().min(2).max(10),
    image: joi.string()
})

let Category = mongoose.model("Categoriyalar", CategorySchema)

module.exports = {CategoryValidation, Category, CategoryPatchValidation}