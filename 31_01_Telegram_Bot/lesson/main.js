const {Telegraf} = require("telegraf")

const mongoose = require("mongoose")
const connectDb = require("./config/db.js")
const RouteTelegram = require("./routes/tg_bot.js")

connectDb()

RouteTelegram.launch()
