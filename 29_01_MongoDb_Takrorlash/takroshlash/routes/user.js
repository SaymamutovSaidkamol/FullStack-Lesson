const express = require("express")
const {User, UserValidation} = require("./../models/user.js")
const bcrypt = require("bcrypt")

let route = express.Router()

route.get("/", async (req, res)=>{
    let all = await User.find()
    res.status(200).send(all)
    
})

route.post("/", async (req, res) => {
    const {error, value} = UserValidation.validate(req.body)
    const {Username, email, password} = req.body

    let user = await User.findOne({email})

    if (error) {
        res.status(401).send({error: error.details[0].message})
        return
    }

    if (user) {
        res.send({error: "You have accaut"})
        return
    }


    let hash = bcrypt.hashSync(password, 10)
    let newUser = new User({Username, email, password: hash})
    await newUser.save()

    res.status(200).send(newUser)
})

module.exports = route