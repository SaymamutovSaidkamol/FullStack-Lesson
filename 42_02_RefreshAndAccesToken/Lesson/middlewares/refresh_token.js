import jwt from "jsonwebtoken";

function RefreshToken(req, res, next) {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.send({ error: "Token not found" });
    }

    let data = jwt.verify(token, "refresh-secret")

    req.token = token
    req.user = data
    next()

  } catch (e) {
    res.send({error: "Invalid token"}); 
  }
}

export default RefreshToken;
