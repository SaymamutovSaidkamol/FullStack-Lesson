const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.MONGO_URL

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("connected db");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = connectDB