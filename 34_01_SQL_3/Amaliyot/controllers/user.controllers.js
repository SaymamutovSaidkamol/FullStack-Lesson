import db from "../config/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

import {UserValidation} from "../validations/users.valinadion.js" 

dotenv.config()

let secret = "hello"
// console.log(secret); 


async function findall(req, res) {
    try {

        let [user] = await db.query("select * from users")
        res.send(user)
        
    } catch (error) {
        console.log(error);
        
    }
}

async function register(req, res) {
    try {

        let {error,value} = UserValidation.validate(req.body)

        if (error) {
            res.send({error: error.details[0].message})
            return
        }
        
        let {username, password} = value

        let [result] = await db.query("select * from users where username = ?", [username])
        // console.log(result);

        if (result.length > 0) {
            res.status(401).send({error: "You have acount"})
            return
        }

        let hash = bcrypt.hashSync(password, 7)
        
        
        const [newUser] = await db.execute(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, hash]
        );
        // console.log(newUser);
        
        res.status(201).send(newUser)

    } catch (error) {
        console.log(error);
        
    }
}

async function login(req, res) {
    try {

        let {username, password} = req.body
        
        let [result] = await db.query("select * from users where username = ?", [username])
        
        if (result.length === 0) {
            res.status(401).send({error: "Account not found"})
            return
        }

        const user = result[0];
        console.log(user);

        let compare = bcrypt.compareSync(password, user.password)

        if (!compare) { 
            res.status(502).send({error: "wrong password"})
            return
        }

        let token = jwt.sign(
            {id: user.id, username: user.username},
            secret
        )



        res.status(201).send(token)

    } catch (error) {
        console.log(error);
        
    }
}

export {findall, register, login}