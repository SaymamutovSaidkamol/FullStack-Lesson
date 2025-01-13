// const { log } = require("console")
// const http = require("http")
// const url = require("url")

// let prods = [
//     {id: 1, name: "Apple", price: 234},
//     {id: 2, name: "Banan", price: 123},
//     {id: 3, name: "Kivi", price: 543},
// ]

// const server = http.createServer((req, res)=>{

//     let path = url.parse(req.url)
    
//     if (path.pathname == "/product" && req.method == "GET") {
//         res.end(JSON.stringify(prods))
//     }else if(path.pathname == "/product" && req.method == "POST"){
//         let body = ""
//         req.on("data", (ch) => {
//             body += ch
//         })

//         req.on("end", ()=>{
//             let new_prd = JSON.parse(body);
//             new_prd = { ...new_prd, id: prods.length + 1}
//             prods.push(new_prd)
//             res.end(JSON.stringify(new_prd))
//         })
//     }else if(req.url.startsWith("/product") && req.method == "DELETE"){
//         let [, , id] = path.pathname.split("/")
//         // console.log(path.pathname);
        
//         let prd = prods.find(p => p.id == id)
//         prods = prods.filter(p => p.id != id)
//         // console.log(prods);
//         if (prd) {
//             res.end(JSON.stringify(prods))
//         }else{
//             res.end("DELETE Not found")
//         }
//     }else if(req.url.startsWith("/product") && req.method == "GET"){
//         let [, , id] = path.pathname.split("/")

//         let prd = prods.find(p => p.id == id)

//         if (prd) {
//             res.end(JSON.stringify(prd))
//         }else{
//             res.end("GET Not Found")
//         }
//     }else if(req.url.startsWith("/product") && req.method == "PATCH"){
//         let body = ""
//         let [, , id] = path.pathname.split("/")
//         let prd = prods.find(p => p.id == id)
//         // console.log(req.method);

//         req.on("data", (ch)=>{

//             body += ch
//             // console.log(body);
            
//         })
        
//         req.on("end", () => {
//             let newData = JSON.parse(body)
//             let newPrd = { ...prd, ...newData}
//             let index = prods.findIndex((p)=> p.id == id)
//             prods.splice(index, 1, newPrd)

//             res.end(JSON.stringify(newPrd))
//             // console.log(newPrd);

//         })
//     }
// })

// server.listen(5000, ()=> {
//     console.log(("5000 port server ishlamoqda"));
    
// })

// ------------------------------------------------------------------------------------------

// const http = require("http")
// const url = require("url")

// let prods = [
//     {id: 1, name: "Alex", age: 20},
//     {id: 2, name: "Karl", age: 20},
//     {id: 3, name: "John", age: 20},
//     {id: 4, name: "", age: 20},
// ]

// const server = http.createServer((req, res) => {
//     let path = url.parse(req.url)
//     console.log(path.pathname);
//     console.log(req.method);

//     if (path.pathname == "/product" && req.method == "GET") {
//         res.end(JSON.stringify(prods))
        
//     }
// })

// server.listen(5000, ()=>{
//     console.log("5000 port ishlamoqda");
    
// })