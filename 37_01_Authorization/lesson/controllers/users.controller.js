import db from "../config/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

async function LoginPost(req, res) {
  try {
    let { phone, password } = req.body;

    let [user] = await db.query("select * from users where phone = ?", [phone])

    if (!user.length) {
      res.json({error: "user not found"})
      return
    }

    let hashed = bcrypt.compareSync(password, user[0].password)



    if (!hashed) {
      res.json({error: "Wrong password"})
      return
    }

    let token = jwt.sign({
      id: user[0].id,
      firstname: user[0].firstname,
      phone: user[0].phone,
      role: user[0].role
    }, "Salom"
  )

  res.json({token: token})
} catch (error) {
    console.log(error);
  }
}

async function RegisterPost(req, res) {
  try {
    let { firstname, age, phone, password, role } = req.body;

    let [result] = await db.query("select * from users where phone = ?", [
      phone,
    ]);

    if (result.length) {
        res.json({error: "You have acount"})
        return
    }

    let hash = bcrypt.hashSync(password, 10)
    let user = await db.query("insert into users(firstname, age, phone, password, role) values (?, ?, ?, ?, ?)", [firstname, age, phone, hash, role])
    
    res.json({created: user});
  } catch (error) {
    console.log(error);
  }
}

export { LoginPost, RegisterPost };