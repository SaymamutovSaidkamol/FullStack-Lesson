const mongoose = require("mongoose")
require("dotenv").config()

let url = process.env.MONGO_URL

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("connect db");
        
    } catch (error) {
        console.log(error.message);

    }
}

module.exports = connectDB