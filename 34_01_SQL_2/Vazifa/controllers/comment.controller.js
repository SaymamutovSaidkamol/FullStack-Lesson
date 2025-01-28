import db from "../config/db.js"
async function  findAll(req, res) {
    try {
        
        let [result , _] = await db.query("select * from comment")
        res.status(200).send({data: result})

    } catch (error) {
        console.log(error);
        
    }
}

async function findOne(req, res) {
    try {
        let {id} = req.params

        let [result, _] = await db.query("select * from comment where id = ?", [id])
        
        res.status(200).send({data: result})
    } catch (error) {
        console.log(error);
        
    }
}

async function create(req, res) {
    try {

        let { comment, user_id, star, book_id } = req.body

        console.log(star);
        

        await db.query("insert into comment(comment, user_id, star, book_id ) values (?, ?, ?, ?)",[comment, user_id, star, book_id])

        res.status(200).send({data: "comment created"})

    } catch (error) {
        console.log(error);
    
    }
}

async function update(req, res) {
    try {

        let { id } = req.params

        let {comment, user_id, star, book_id} = req.body

        let [result,_ ] = await db.query("UPDATE comment SET comment = ?, user_id = ?, star = ?, book_id = ? WHERE id = ?", [comment, user_id, star, book_id, id])

        res.status(201).send({data: "Comment updated"})

    } catch (error) {
        console.log(error);
        
    }
}

async function deleted(req, res) {
    try {
        let {id} = req.params
        console.log(id);

        let comment_deleted = await db.query("DELETE FROM comment WHERE id = ?", [id])

        res.status(200).send({data: "Comment deleted"})
        
    } catch (error) {
        console.log(error);
        
    }
}

export { findAll, findOne, create, update, deleted }