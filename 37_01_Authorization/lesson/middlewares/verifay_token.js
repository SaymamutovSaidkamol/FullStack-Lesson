import jwt from "jsonwebtoken"

async function veryfyToken(req, res, next) {
    let header = req.header("Authorization").split(" ")

    let [_, token] = header

    if (!token) {
        
        res.send("Not found token")
        return
    }

    try {
        let result = jwt.verify(token, 'salom')
        req.user = result
        next()
    } catch (error) {
        res.json({error: error})
    }
}

export default veryfyToken