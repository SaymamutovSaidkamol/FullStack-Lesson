const { error } = require("console")
const jwt = require("jsonwebtoken")

function urtakash(req, res, next){
    let token = req.header("Authorization")

    if (!token) {
        res.send({error: "Token net"})
        return
    }

    try {
        let data = jwt.verify(token, process.env.JWT_SECRET)
        req.malumot = data
        next()
    } catch (error) {
        res.send({error: "Token invalid"})
    }
}

module.exports = {urtakash}