const mongoose = require("mongoose")
require("dotenv").config()

let url = process.env.MOGO_URL

async function connectDB() {
    try {
        
        let connect = mongoose.connect(url)
        console.log("connect db");

    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = connectDB