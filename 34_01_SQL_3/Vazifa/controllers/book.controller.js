import db from "../config/db.js"

async function findAll(req, res) {
    try {
        let [result, _] = await db.query("select * from book")
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
} 

async function findOne(req, res) {
    try {
        let {id} = req.params
        console.log(id);
        
        let [result, _] = await db.query("select * from book where id=?", [id])
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function create(req, res) {
    try {
        let {name, year, author_id} = req.body
        await db.query("insert into book(name, year, author_id) values (?, ?, ?)", [name, year, author_id])
        res.status(200).send({data: "book created"})
        
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

        let author_deleted = await db.query(`DELETE from book WHERE id = ${id}`)
        console.log(author_deleted);
        
        res.status(200).send({deleted: `Book id ${id}`}) 
        
    } catch (error) {
        console.log(error);
        
    }
}

export { findAll, findOne, create, update, deleted }