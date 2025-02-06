import jwt from "jsonwebtoken"

async function veryfyToken(req, res, next) {

    let token = req.header("Authorization")

    if (!token) {
        
        res.send("Not found token")
        return
    }

    try {
        let result = jwt.verify(token, 'Salom')
        req.user = result
        next()
    } catch (error) {
        res.json({error: error})
    }
}

export default veryfyToken