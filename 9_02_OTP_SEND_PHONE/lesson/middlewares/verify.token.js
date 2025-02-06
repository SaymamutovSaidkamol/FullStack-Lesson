import jwt from "jsonwebtoken"

async function veryfyToken(req, res, next) {

    let token = req.header("Authorization")    

    if (!token) {
        res.status(401).json({data: "Not found token"})
        return
    }

    try {
        let result = jwt.verify(token, 'hello')
        req.user = result

        next()
    } catch (error) {
        res.json({error: error})
    }
}

export default veryfyToken