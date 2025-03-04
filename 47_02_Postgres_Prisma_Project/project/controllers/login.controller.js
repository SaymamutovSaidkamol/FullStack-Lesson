import { client } from "../main.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function login(req, res) {
  try {
    let { email, password } = req.body;

    let checkUser = await client.users.findFirst({ where: { email } });

    if (!checkUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    if (checkUser.status != "ACTIVE") {
      return res.status(400).json({ error: "Please verify your account." });
    }

    let comparePass = bcrypt.compareSync(password, checkUser.password);

    if (!comparePass) {
      return res.status(401).json({ error: "Invalid Credentials!" });
    }

    let token = jwt.sign(
      {
        id: checkUser.id,
        firstName: checkUser.firstName,
        lastName: checkUser.lastName,
        status: checkUser.status,
        role: checkUser.role,
      },
      "secret"
    );

    res.status(200).json({ message: "Login Soccessfully", data: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { login };
