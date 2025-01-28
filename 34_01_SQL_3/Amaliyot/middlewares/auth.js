import { error } from "console"
import jwt from "jsonwebtoken"

let secret = "hello"


function urtakash(req, res, next){
    let token = req.header("Authorization")

    if (!token) {
        res.send({error: "Token yuq!!!"})
        return
    }

    try {
        let data = jwt.verify(token, secret)
        req.malumot = data

        
        next()
    } catch (error) {
        res.send({error: "Soxta token"})
    }
}

export default urtakash