const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name: String

})

const Category = mongoose.model("Kategoriyalar", CategorySchema)

module.exports = Category