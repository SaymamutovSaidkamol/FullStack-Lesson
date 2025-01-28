const mongoose = require("mongoose")
require("dotenv").config()

let url = process.env.MONGO_URL

async function connectDB() {
    try {
        let connect = await mongoose.connect(url)
        console.log("connect db");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB