const Product = require("../models/category")

const express = require("express")

const route = express.Router()

route.get("/", async (req, res)=>{
    let all = await Product.find()
    res.send(all)
    console.log("Salom");
})

route.post("/", async (req, res)=>{
    let newItem = new Product(req.body)
    await newItem.save()
    res.send(newItem)
})

module.exports = route

