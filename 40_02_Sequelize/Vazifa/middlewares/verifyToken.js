import { error } from "console";
import Jwt from "jsonwebtoken";

const Authorization = (req, res, next) => {
  let Token = req.header("Authorization");
  if (!Token) {
    return res.status(404).json({ message: "Not found token" });
  }

  try {
    let data = Jwt.verify(Token, "Secret");

    if (req.params.id != data.id) {
      return res.send({error: "Siz boshqa brovni Malumotlariga tegolmaysiz"})
    }
    
    req.user = data;
    next();
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};
export { Authorization };
