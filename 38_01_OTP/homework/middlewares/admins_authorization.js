import jwt from "jsonwebtoken"

const adminMiddleware = (roles) =>
    (req, res, next)=>{
        let token = req.header("Authorization")

        if (!token) {
            res.status(401).json({error: "Token not found"})
            return
        }

        try {
            
            let data = jwt.verify(token, "Salom")
            req.user = data

            if (roles.includes(data.role)) {
                if (data.status == "actived") {
                    next()

                }else{
                    res.json({error: "You are not active"})
                    return
                }
            }else{
                res.status(401).json({error: "not allowed"})
            }

        } catch (error) {
            res.status(401).json({error: "not correct"})
        }
        
    }


export default adminMiddleware