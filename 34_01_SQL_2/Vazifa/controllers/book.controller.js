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

        const {name, year, author_id} = req.body

        const [update_book] = await db.query("UPDATE book SET name = ?, year = ? author_id = ? WHERE id = ?", [name, year, author_id])

        if (update_author.affectedRows > 0) {
            res.status(200).send({updated: `Book id ${id}`});

        }else{
            res.status(404).send({Not_found: `Book id ${id}`});

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