import db from "../config/db.js"

async function findAll(req, res) {
    try {
        let [result, _] = await db.query("select * from author")
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
} 

async function findOne(req, res) {
    try {
        let {id} = req.params
        console.log(id);
        
        let [result, _] = await db.query("select * from author where id=?", [id])
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function create(req, res) {
    try {
        let {name, age} = req.body
        await db.query("insert into author(name, age) values (?, ?)", [name, age])
        res.status(200).send({data: "author created"})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function update(req, res) {
    try {

        const {id} = req.params

        const {name, age} = req.body

        const [update_author] = await db.query("UPDATE author SET name = ?, age = ? WHERE id = ?", [name, age, id])

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

        let author_deleted = await db.query(`DELETE from author WHERE id = ${id}`)
        console.log(author_deleted);
        
        res.status(200).send({deleted: `User_id ${id}`}) 
        
    } catch (error) {
        console.log(error);
        
    }
}

export { findAll, findOne, create, update, deleted }