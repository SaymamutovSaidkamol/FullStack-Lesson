import jwt from "jsonwebtoken";

function VerifyToken(req, res, next) {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.send({ error: "Token not found" });
    }

    let data = jwt.verify(token, "very-secret")

    req.user = data

    next();
  } catch (e) {
    res.send({error: "Invalid token"}); 
  }
}

export default VerifyToken;
