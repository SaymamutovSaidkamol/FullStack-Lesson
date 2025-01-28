const mongoose = require("mongoose")

const TelegramSchema = new mongoose.Schema({
    username: String,
    telegramID: String,
    userLanguage: String,
    isPrimium: Boolean
})

const TelegramU = mongoose.model("TgUserlar", TelegramSchema)

module.exports = TelegramU