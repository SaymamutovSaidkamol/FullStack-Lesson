const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    cotegory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Kategoriylar"
    }

})

const Product = mongoose.model("Produktlar", ProductSchema)

module.exports = Product