const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    name: String,
    year: Number,
    language: String,
    after: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Afterlar"
    },
    janr: []

})

const Book = mongoose.model("Books", BookSchema)

module.exports = Book