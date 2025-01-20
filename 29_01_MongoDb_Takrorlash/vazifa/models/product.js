const mongoose = require("mongoose")
const joi = require("joi")

const ProductSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: String,
    image: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Categoriyalar",
    }

})

// exapm@gmail.com
const ProductValidation = joi.object({
    name: joi.string().min(4).max(15).required(),
    color: joi.string().min(3).max(20).required(),
    price: joi.string().min(3).max(10).required(),
    image: joi.string(),
    category: joi.string().required()
})
const ProductPatchValidation = joi.object({
    name: joi.string().min(4).max(15),
    color: joi.string().min(3).max(20),
    price: joi.string().min(3).max(10),
    image: joi.string(),
    category: joi.string()
})

const Product = mongoose.model("Productlar", ProductSchema)

module.exports = {Product, ProductValidation, ProductPatchValidation}
