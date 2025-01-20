const {Router} = require("express")
const {User, UserValidation} = require("./../models/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {urtakash} = require("./../middlewares/auth.js")

require("dotenv").config()

let route = Router()

route.get("/", async(req, res)=>{
    let all = await User.find()
    res.status(201).send(all)
})

route.post("/register", async(req, res)=>{

    try {
        let {error, value} = UserValidation.validate(req.body)

        if (error) {
            res.status(501).send({error: error.details[0].message})
            return
        }
        let {password, email, username} = value

        let user = await User.findOne({email})

        if (user) {
            res.status(401).send({error: "You have accaunt"})
            return 
        }

        let hash = bcrypt.hashSync(password, 10)

        let newUser = new User({username, email, password: hash})
        await newUser.save()
    res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

})

route.post("/login", async(req, res)=>{
    
    try {
        let { error, value } = UserValidation.validate(req.body)

        if (error) {
            res.status(502).send({error: error.details[0].message})
            return
        }
    

        let {email, password } = req.body
        
        
        let user = await User.findOne({email})
        
        if (!user) {
            res.status(401).send({error: "user not found"})
            return
        }
        
        let compare = bcrypt.compareSync(password, user.password)

        if (!compare) { 
            res.status(502).send({error: "wrong password"})
            return
        }

        let token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET
        )
        res.status(201).send(token)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.delete("/:id", urtakash, async(req, res)=>{
    let {id} = req.params
    console.log(id);

    let del = await User.findByIdAndDelete({_id: id})
    res.status(302).send(del)
    
}) 

module.exports = route