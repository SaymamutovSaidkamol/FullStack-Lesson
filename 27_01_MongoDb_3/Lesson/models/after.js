const mongoose = require("mongoose")

const AfterSchema = new mongoose.Schema({
    name: String,
    year: String,
    janr: []

})

const After = mongoose.model("Afterlar", AfterSchema)
module.exports = After