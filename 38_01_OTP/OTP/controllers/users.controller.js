import db from "../config/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {totp} from "otplib"
import nodemailer from "nodemailer"

let transpodatarter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saymamutovsaidkamol6@gmail.com",
    pass: "elhx txxs pdhn ggvs"
  }
})

async function RegisterPost(req, res) {
  try {
    let { firstname, age, email, password, role } = req.body;

    let [result] = await db.query("select * from users where email = ?", [
      email,
    ]);

    // if (result.length) {
    //     res.json({error: "You have acount"})
    //     return
    // }

    let hash = bcrypt.hashSync(password, 10)
    let user = await db.query("insert into users(firstname, age, email, password, role, status) values (?, ?, ?, ?, ?, ?)", [firstname, age, email, hash, role, "passive"])
    
    let otp = totp.generate("qanaqadur"+email)
    let isValid = totp.check(otp,"qanaqadur"+email ) 

    console.log(isValid);
    

    let data = await transpodatarter.sendMail({
      to: email,
      subject: "activate account",
      text: `Plase activate your acount ${email}`,
      html: otp
      })
    
    res.send("Registered plase activate your account")

  } catch (error) {
    console.log(error);
  }
}

async function Otp(req, res) {
  try {

    let {token, email} = req.params
    let valid = totp.verify({token, secret: "qanaqadur"+email})


    console.log(valid);
    
    let [users] = await db.query("select * from users where email = ?" ,[email]) 
    

    let actived = await db.query("update users set status = 'actived' where email = ?", [email])
    console.log(users);
    res.send(users)


  } catch (error) {
    console.log(error);
    
  }
}

async function VerifyToken(req, res) {
  try {
    let {token} = req.params;

    let valid = jwt.verify(token, "email-activate")

    let [users] = await db.query("select * from users where email = ?" ,[data.email]) 
    

    let actived = await db.query("update users set status = 'actived' where email = ?", [data.email])
    console.log(users);
    res.send(users)
    
  } catch (error) {
    console.log(error);
    
  }
}


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

async function findAll(req, res) {
  try {
    let [all_users] = await db.query("select * from users")

    res.send(all_users)
  } catch (error) {
    console.log(error);
    
  }
}

async function findOne(req, res) {
  try {

    let {id} = req.params

    let [all_users] = await db.query("select * from users where id = ?", [id])

    res.send(all_users)
  } catch (error) {
    console.log(error);
    
  }
}


async function update(req, res) {
  try {

    let {id} = req.params


    let keys = Object.keys(req.body)
    let values = Object.values(req.body)

    let queryKey = keys.map((k) => (k += "=?"))

    try {
      await db.query(`UPDATE users SET ${queryKey.join(",")} where id = ?`, [
        ...values,
        id,
      ]);
      res.send({ data: "Updated" });
    } catch (error) {
      console.log(error);
      
    }
    let [all_users] = await db.query("select * from users where id = ?", [id])

    res.send(all_users)
  } catch (error) {
    console.log(error);
    
  }
}

export { LoginPost, RegisterPost, findAll, findOne, update, VerifyToken, Otp };