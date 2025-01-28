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

        let keys = Object.keys(req.body)
        let values = Object.values(req.body)
        let querykey = keys.map((k) => (k += "= ?"))

        try {
            let updated = await db.query(
                `update category set ${querykey.join(",")} where id = ?`,
                [...values, id]
            )
            res.send({data: "updated"})
        } catch (error) {
            res.send({error: "error"})
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