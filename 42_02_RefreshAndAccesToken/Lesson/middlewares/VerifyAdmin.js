import jwt from "jsonwebtoken";
import logger from "../log/logger.js";

function VerifyAdminToken(req, res, next) {
  try {
    let token = req.header("Authorization");
    let data = jwt.verify(token, "very-secret")

    console.log(data.role);
    
    if (data.role != "Admin") {
      logger.info(`ERROR: Malumotlarni faqatgina Adminlar o'zgartira oladi;  Method ${req.method}; VerifyAdmin`);
      return res.send({error: "Malumotlarni faqatgina Adminlar o'zgartira oladi Va o'chira oladi!!!!"})
    }
    next()
  } catch (e) {
    res.send({error: "Invalid token"}); 
  }
}

export default VerifyAdminToken;
