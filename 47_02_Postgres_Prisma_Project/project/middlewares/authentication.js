import jwt from "jsonwebtoken";

async function authentication(req, res, next) {
  try {
    let token = req.header("Authorization");

    if (!token || !token.startsWith("Bearer")) {
      return res.status(404).json({ error: "Tokent not found" });
    }

    token = token.split(" ")[1];

    try {
      const data = jwt.verify(token, "secret");

      if (data.status == "ACTIVE") {
        req.user = data
        next()
      }
    } catch (error) {
      res.status(400).json({ error: "Wrong token" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default authentication;
