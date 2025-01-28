import db from "./../config/db.js"

async function findAll(req, res) {
    try {
        let [result, _] = await db.query("select * from user_likes")
        res.status(200).send({data: result})

    } catch (error) {
        console.log(error);
        
    }
} 

async function findOne(req, res) {
    try {
        let {id} = req.params
        console.log(id);
        
        let [result, _] = await db.query("select * from user_likes where id=?", [id])
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function create(req, res) {
    try {
        let {book_id, user_id} = req.body
        await db.query("insert into user_likes(book_id, user_id) values (?, ?)", [book_id, user_id])
        res.status(200).send({data: "author created"})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function update(req, res) {
    try {

        const {id} = req.params

        const {book_id, user_id} = req.body

        const [update_author] = await db.query("UPDATE user_likes SET book_id = ?, user_id = ? WHERE id = ?", [book_id, user_id, id])

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

        let author_deleted = await db.query(`DELETE from user_likes WHERE id = ${id}`)
        
        res.status(200).send({deleted: `User_id ${id}`}) 
        
    } catch (error) {
        console.log(error);
        
    }
}



export { findAll, findOne, create, update, deleted }