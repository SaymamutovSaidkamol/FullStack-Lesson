import { func } from "joi"
import jwt from "jsonwebtoken"

async function findAll(req, res) {

    let accesToken = jwtServices.accesToken({
        id: 1,
        gmail: "exapml@gmail.com"
    })

    let verify = jwtServices.verifyToken(accesToken)

    res.send({accesToken, verifyData: verify})
}

export { findAll }

















export { findAll }