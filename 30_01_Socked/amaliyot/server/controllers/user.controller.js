const userModel = require("../models/user.models.js")

async function login(req, res) {
    let {username, password} = req.body

    try {
        let user = await userModel.findOne({username})
        let matchPassword = bcrypt.compareSync(password, user.password)

        if (user && matchPassword) {
            res.status(200).send({data: user})
        }else{
            let hashPassword = bcrypt.hashSync(password,10)
            let newUser = await userModel.create({
                username,
                password: hashPassword
            })

            res.status(200).send({data: newUser})
        }
    } catch (error) {
        console.log(error.message);
        
    }
}