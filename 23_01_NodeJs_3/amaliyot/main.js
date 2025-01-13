const { error } = require("console")
const http = require("http")
const url = require("url")

// console.log(users);



const fs = require('fs');

// readFile funksiyasi fayldan asinxron ravishda ma'lumot o'qiydi
fs.readFile('db.json', 'utf8', (err, data) => {
    let users = new String
    users = data
    if (err) {
        console.error('Faylni o‘qishda xato yuz berdi:', err);
    } else {
        console.log(users);

        const server = http.createServer((req, res)=> {

        let path = url.parse(req.url, true)

        const additionalData = '\nYangi qo\'shilgan qator.';
        if (req.url == "/users") {
            res.end(JSON.stringify(users))
        }
        
        })


        server.listen(3000, () =>{
        console.log("Muvaffaqiyatlik");

        })

    }
});




