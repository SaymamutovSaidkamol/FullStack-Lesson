const mongoose = require("mongoose")

require("dotenv").config()

let url = process.env.MONGO_URL

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log("Connect db");
        
    } catch (e) {
        console.log(e);
        
    }
}

module.exports = connectDB