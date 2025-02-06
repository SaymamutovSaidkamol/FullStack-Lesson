import { error } from "console"
import db from "../config/db.js"
import otplib from "otplib"
import axios from "axios"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const api = axios.create({
    baseURL: "https://notify.eskiz.uz/api",
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDExODc0MDQsImlhdCI6MTczODU5NTQwNCwicm9sZSI6InRlc3QiLCJzaWduIjoiYmU3OGI0NmFlZjA1Yzk1ODUxN2UyZGM2YWQyMDNkZWE4MzIzYTk1ZTlhZDg0Njg0MWQ1MGQyMDNiMTc0NGJmNSIsInN1YiI6Ijk3NDUifQ.DiaCZH6FmPRqZTWpqpVwk3bKnvYCaeuuvSm2AUBADdM"
    },
})

function SendOTP(phone, otp){
    // let req = api.post("/message/sms/send", {
    //     mobile_phone: phone,
    //     message: "Bu Eskiz dan test",
    //     from: "4546"
    // })

    return otp
}

async function register(req, res) {
    try {
        let {name, phone, password} = req.body
        
        let [result] = await db.query("select * from users where phone = ?", [phone])
        
        if (result.length) {
            res.status(401).send({error: "You have account"})
            return
        }

        let hash_password = bcrypt.hashSync(password, 10)
        
        console.log(name, phone, hash_password);
        let [user] = await db.query("insert into users(name, phone, password) values (?, ?, ?)", [name, phone, hash_password])
        
        res.status(201).send({data: "Register accepted"})

    } catch (error) {
        console.log(error.message);
        
    }
}

async function login(req, res) {
    try {
        let {phone, password} = req.body

        let [user] = await db.query("select * from users where phone = ?", [phone])

        // console.log(user);
        if (!user.length) {
            res.status(401).json({error: "User not found"})
            return
        }
        
        let hashed = bcrypt.compareSync(password, user[0].password)
        
        if (!hashed) {
            res.status(401).json({error: "Wrong password"})
            return
            
        }

        let token = jwt.sign({
            id: user[0].id,
            name: user[0].name,
            phone: user[0].phone
        }, "hello")

        res.send(token)
    } catch (error) {
        console.log(error.message);
        
    }
}

async function sendOTP(req, res) {
    try {
        let {phone} = req.body
        otplib.totp.options = {digits: 4}

        let otp = otplib.totp.generate("hello"+phone)
        SendOTP(phone, otp)

        res.send(otp)

    } catch (error) {
        
    }
}

async function verify_phone_token(req, res) {
    try {

        let {phone, token } = req.params

        let validated = otplib.totp.check(token, "hello"+phone)

        if (validated) {
            let actived = await db.query(
                "update users set verified = 'actived' where phone = ?",
                [phone]
            );
            res.status(201).send({data: "verified actived"})
            return
        }else{
            res.status(401).send({error: "verified not actived"})

        }
        
    } catch (error) {
        console.log(error.message);
        
    }
}


async function findAll(req, res) {
    try {

        let [users] = await db.query("select * from users")

        res.send(users)
    } catch (error) {
        console.log(error.message);
        
    }
}

async function findOne(req, res) {
    try {
        let {id} = req.params

        let [user] = await db.query("select * from users where id = ?", [id])
        
        if (!user.length) {
            res.send({error: "User not found"})
            return
        }

        res.status(201).send(user)
        
    } catch (error) {
        res.status(401).send({error: error.message})
    }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let keys = Object.keys(req.body);
    let values = Object.values(req.body);

    // console.log(keys.length);
    // console.log(values);

    if (keys.length == 1 && keys[0] == "password") {
        let new_password = values[0]; 
        let new_hash_password = bcrypt.hashSync(new_password, 10);
        // console.log(new_hash_password);
        values[0] = new_hash_password;
    }
    // console.log(values);

    let queryKey = keys.map((k) => (k += "=?"));

    try {
      await db.query(`UPDATE users SET ${queryKey.join(",")} where id = ?`, [
        ...values,
        id,
      ]);
      res.send({ data: "Updated" });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let [user] = await db.query("select * from users where id = ?",[id])
        
        if (!user.length) {
            res.status(401).json({error: "users not found"})
            return 
        }

        await db.query("delete from users where id = ?", [id])

        res.status(201).json({data: "Deleted users"})

    } catch (error) {
        res.status(401).send({error: error.message})
    }
}

export {register, login,  sendOTP, verify_phone_token, findAll, findOne, update, remove}