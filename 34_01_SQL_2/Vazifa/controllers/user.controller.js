import db from "./../config/db.js"

async function findAll(req, res) {
    try {
        let [result, _] = await db.query("select * from users")
        res.status(200).send({data: result})

    } catch (error) {
        console.log(error);
        
    }
} 

async function findOne(req, res) {
    try {
        let {id} = req.params
        console.log(id);
        
        let [result, _] = await db.query("select * from users where id=?", [id])
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function create(req, res) {
    try {
        let {name, password, age} = req.body

        await db.query("insert into users(name, password, age) values (?, ?, ?)", [name, password, age])
        res.status(200).send({data: "user created"})

    } catch (error) {
        console.log(error);
        
    }
}

async function update(req, res) {
    try {

        const {id} = req.params

        const {name, password, age} = req.body

        const [update_author] = await db.query("UPDATE users SET name = ?, password = ?, age = ? WHERE id = ?", [name, password, age, id])

        if (update_author.affectedRows > 0) {
            res.status(200).send({updated: `user_id ${id}`});

        }else{
            res.status(404).send({Not_found: `user_id ${id}`});

        }

    } catch (error) {
        console.log(error);

    }
}

async function deleted(req, res) {
    try {
        let { id } = req.params

        let author_deleted = await db.query(`DELETE from users WHERE id = ${id}`)
        
        res.status(200).send({deleted: `User_id ${id}`}) 
        
    } catch (error) {
        console.log(error);
        
    }
}



export { findAll, findOne, create, update, deleted }