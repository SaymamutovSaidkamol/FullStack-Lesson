const jvt = require("jsonwebtoken")

function ortakash(req, res, next){
    let token = req.header("Authorization")
    if (!token) {
        res.status(403).send("Token net")
        return 
    }
}