// const http = require("http")
// let url = require("url")

// let users = [
//     {id: 1, name: "John", age: 1981, location: "UZB"},
//     {id: 2, name: "Ali", age: 1977, location: "USA"},
//     {id: 3, name: "Vali", age: 1999, location: "China"},
//     {id: 4, name: "G'ani", age: 2002, location: "Xitoy"},
//     {id: 5, name: "Eshmat", age: 1956, location: "India"},
//     {id: 6, name: "Eshmat", age: 2006, location: "UZB"},
// ];

// const server = http.createServer((req, res) => {
    
//     let path = url.parse(req.url, true)

//     if(path.pathname == "/users" && path.query.maxage){
//         let filter = users.filter(p => 
//             2025 - p.age > path.query.maxage
//         )

//         res.end(JSON.stringify(filter))
//     }
//     else if(path.pathname == "/users" && path.query.minage){
//         let filter = users.filter(p => 
//             2025-  p.age < path.query.minage
//         )
//         res.end(JSON.stringify(filter))
//     }
//     else if(path.pathname == "/users" && path.query.pensiya){
//         if (path.query.pensiya == "true") {
//             let filter = users.filter(p => 2025 - p.age > 56)
//             res.end(JSON.stringify(filter))
//         }else{
//             res.end("Not Found")
//         }
        
//     }
//     else if(path.pathname == "/users" && path.query.id){

//         let filter = users.filter(p => p.id == path.query.id)
//         res.end(JSON.stringify(filter))
//     }
//     else{
//         res.end("Not found")
//     }
// })

// server.listen(5000, () => {
//     console.log("Server started on port 3000");
// })