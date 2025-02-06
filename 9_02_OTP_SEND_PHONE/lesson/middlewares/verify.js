import jwt from "jsonwebtoken"
import db from "../config/db.js"
import { error } from "console";


async function verify(req, res, next) {

    let {phone} = req.body

    let [user] = await db.query("select verified from users where phone = ?", [phone])

    if (user[0].verified != "actived") {
        res.status(401).json({error: "verify not actividet"})
        return
    }
    next()    

}

export default verify