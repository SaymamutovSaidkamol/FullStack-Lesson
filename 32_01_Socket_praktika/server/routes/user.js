const {Router} = require("express")
const {User} = require("./../models/users")
const bcrypt = require("bcrypt");


let route = Router()

route.post("/", async (req, res)=>{
    let { username, password, email} = req.body;
    try {
        let user = await User.findOne({ username });

        if (user) {
        let matchPassword = bcrypt.compareSync(password, user?.password);
        if (matchPassword) {
            res.status(200).send({ data: user });
        } else {
            res.status(203).send({ data: "wrong password" });
        }
        } else {
        let hashPassword = bcrypt.hashSync(password, 10);
        let newUser = await User.create({
            username,
            password: hashPassword,
            email
        });
        res.status(200).send({ data: newUser });
        }
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = route