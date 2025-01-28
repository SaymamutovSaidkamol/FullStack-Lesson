import db from "../config/db.js"

async function findAll(req, res) {
    try {
        let [result, _] = await db.query(`
            SELECT 
                author.name AS Author_Name, 
                book.name AS Book_Name, 
                book.year AS Publication_Year, 
                users.name AS User_Name, 
                users.age AS User_Age, 
                comment.comment AS User_Comments, 
                comment.star AS User_Star, 
                user_likes.book_id AS Liked_Book
            FROM users
            LEFT JOIN comment ON users.id = comment.user_id
            LEFT JOIN book ON comment.book_id = book.id
            LEFT JOIN author ON book.author_id = author.id
            LEFT JOIN user_likes ON users.id = user_likes.user_id AND book.id = user_likes.book_id
            ORDER BY users.name;
        `);
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
    }
} 

export default findAll 