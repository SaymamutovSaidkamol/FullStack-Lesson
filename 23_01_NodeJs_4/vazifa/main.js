// FILELARSIZ ISHLANGAN UYGA VAZIFA

// const http = require("http")
// const url = require("url")

// let category = [
//     {id: 1, name: "TV"},
//     {id: 2, name: "Phone"},
//     {id: 3, name: "Car"},
//     {id: 4, name: "Food"},
// ]

// let prods = [
//     {id: 1, name: "Artel", price: 1000, category: 1},
//     {id: 2, name: "Samsung", price: 1500, category: 1},
//     {id: 3, name: "Iphone", price: 2000, category: 2},
//     {id: 4, name: "REDMI", price: 1000, category: 2},
//     {id: 5, name: "BMW", price: 10000, category: 3},
//     {id: 6, name: "MERS", price: 10000, category: 3},
//     {id: 7, name: "Lavash", price: 100, category: 3},
//     {id: 8, name: "KFC", price: 500, category: 4},
// ]

// // console.log(category);
// // console.log(prods);


// const server = http.createServer((req, res)=>{

//         let path = url.parse(req.url)


//     if (path.pathname == "/category" && req.method == "GET") {
//         res.end(JSON.stringify(category))
//     }else if(req.url.startsWith("/category") && req.method == "GET"){
//         let [, , id] = path.pathname.split("/")
//         // console.log(id);
//         let prd = prods.find(p => p.id == id)
//         res.end(JSON.stringify(prd))
        
//     }else if(req.url.startsWith("/category") && req.method == "POST"){
//         let body = ""
//         req.on("data", (ch) =>{
//             body += ch
//             console.log(body);
            
//         })
//         req.on("end", ()=>{
//             let new_prd = JSON.parse(body)
//             new_prd = { ...new_prd}
//             category.push(new_prd)
//             res.end(JSON.stringify(category))
//         })
//     }else if(req.url.startsWith("/category") && req.method == "DELETE"){
//         let [, , id] = path.pathname.split("/")
//         // console.log(id);
//         let prd = category.find((p) => p.id == id)
//         // console.log(prd);
        
//         let coteg = category.filter((p) => p.id != id)
//         // console.log(coteg);
//         category = coteg
//         if (prd) {
//             res.end(JSON.stringify(category))
//         }else{
//             res.end(JSON.stringify("Not Found"))
//         }
        
//     }else if(req.url.startsWith("/category") && req.method == "PATCH"){
//         let body = ""
//         let [, , id] = path.pathname.split("/")

//         let prd = category.find((p) => p.id == id)

//         req.on("data", (ch) => {
//             body += ch
//         })

//         req.on("end", ()=>{
//             let new_Data= JSON.parse(body)
//             let new_Categ = { ...prd, ...new_Data}
//             let index = category.findIndex((p) => p.id == id)
//             category.splice(index, 1, new_Categ)
//             res.end(JSON.stringify(category))
//         })
//     }

//     if(path.pathname == "/prods" && req.method == "GET"){
//         res.end(JSON.stringify(prods))
//     }else if(req.url.startsWith("/prods") && req.method == "GET"){
//         let [, , id] = path.pathname.split("/")

//         let prd = prods.filter((p) => p.id == id)
//         res.end(JSON.stringify(prd))
        
//     }else if(req.url.startsWith("/productbycategory") && req.method == "GET"){
//         let [, , id] = path.pathname.split("/")

//         let prd = prods.filter((p) => p.category == id)
//         res.end(JSON.stringify(prd))
        
//     }else if(req.url.startsWith("/prods") && req.method == "POST"){
//         let body = ""
        
//         req.on("data",(ch)=>{
//             body+=ch
//         })
        
//         req.on("end", ()=>{
//             let new_prd = JSON.parse(body)

//             new_prd = { ...new_prd}
//             prods.push(new_prd)
//             res.end(JSON.stringify(prods))
//             console.log(new_prd);

//         })
//     }else if(req.url.startsWith("/prods") && req.method == "PATCH"){
//         let body = ""
//         let [, , id] = path.pathname.split("/")

//         let prd = prods.find((p) => p.id == id)
        
//         req.on("data", (ch)=>{
//             body += ch
//             console.log(body);
            
//         })

//         req.on("end", ()=>{
//             let new_prd = JSON.parse(body)

//             let new_prods = { ...prd, ...new_prd}
//             let index = prods.findIndex((p) => p.id == id)
//             prods.splice(index, 1, new_prods)
//             res.end(JSON.stringify(prods))
//         })
//     }else if(req.url.startsWith("/prods") && req.method == "DELETE"){
//         let [, , id] = path.pathname.split("/")
//         // console.log(id);

//         let prd = prods.find((p) => p.id == id)
//         let prod = prods.filter((p) => p.id != id)
//         // console.log(prd);
//         // console.log(prod);
        
//         prods = prod

//         if (prd) {
//             res.end(JSON.stringify(prods))
//         }else{
//             res.end(JSON.stringify("Bunday ID lik product topilmadi"))
//         }

//     }

// })

// server.listen(2000, ()=>{
//     console.log("2000 port sever ishlamoqda");
    
// })

// ----------------------------------------------------------------------------------------------------
// FAYIL BN ISHLAGAN VAZIFAM

const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req, res)=>{

    let path = url.parse(req.url)
    let data = "sa"

    if (path.pathname == "/category" && req.method == "GET") {
        fs.readFile("category.json", "utf-8", (err,data) => {
            data = JSON.parse(data)
            if (!err) {
                // console.log(data);
                res.end(JSON.stringify(data))
            }else{
                res.end(JSON.stringify("Fayl uqishda xatolik yuz berdi"))
            }
        })
    }else if(req.url.startsWith("/category") && req.method == "GET"){

        fs.readFile('category.json', 'utf8', (err, data) => {

            data = JSON.parse(data)
            if (!err) {
                let [, , id] = path.pathname.split("/")
                // console.log(id);
                let prd = data.find(p => p.id == id)
                res.end(JSON.stringify(prd))
            }else{
                res.end(JSON.stringify("Xatolik yuz berdi:"))
            }
        });
        // let prd = prods.find(p => p.id == id)
        // res.end(JSON.stringify(prd))
        
    }else if(req.url.startsWith("/category") && req.method == "POST"){

        let readFiles = JSON.parse(fs.readFileSync('category.json','utf8'))
        
        let body = ""
                req.on("data", (ch) =>{
                    body += ch
                    // console.log(body);
                    
                })

                req.on("end", ()=>{
                let new_prd = JSON.parse(body)
                new_prd = { ...new_prd}
                readFiles.push(new_prd)
                res.end(JSON.stringify(readFiles))
                let WriteFiles = fs.writeFileSync("category.json", JSON.stringify(readFiles, null, 4), "utf-8")
            })
        // console.log(readFiles);
        
        
    }else if(req.url.startsWith("/category") && req.method == "DELETE"){

        let readFiles = JSON.parse(fs.readFileSync('category.json','utf8'))
        
        let [, , id] = path.pathname.split("/")

        let prd = readFiles.find((p) => p.id == id)
        let coteg = readFiles.filter((p) => p.id != id)
        readFiles = coteg

        if (prd) {
                let WriteFiles = fs.writeFileSync("category.json", JSON.stringify(readFiles, null, 4), "utf-8")
        }else{
            res.end(JSON.stringify("Not Found"))
        }
        
    }else if(req.url.startsWith("/category") && req.method == "PATCH"){

        let readFiles = JSON.parse(fs.readFileSync('category.json','utf8'))
        
        let body = ""
        let [, , id] = path.pathname.split("/")

        let prd = readFiles.find((p) => p.id == id)

        req.on("data", (ch) => {
            body += ch
        })

        req.on("end", ()=>{
            let new_Data= JSON.parse(body)
            let new_Categ = { ...prd, ...new_Data}
            let index = readFiles.findIndex((p) => p.id == id)
            readFiles.splice(index, 1, new_Categ)
            let WriteFiles = fs.writeFileSync("category.json", JSON.stringify(readFiles, null, 4), "utf-8")
        })

    }

    if(path.pathname == "/prods" && req.method == "GET"){
        fs.readFile("prods.json", "utf-8", (err,data) => {
            data = JSON.parse(data)
            if (!err) {
                console.log(data);
                res.end(JSON.stringify(data))
            }else{
                res.end(JSON.stringify("Fayl uqishda xatolik yuz berdi"))
            }
        })
    }else if(req.url.startsWith("/prods") && req.method == "GET"){

        fs.readFile('prods.json', 'utf8', (err, data) => {

            data = JSON.parse(data)
            if (!err) {
                let [, , id] = path.pathname.split("/")
                // console.log(id);
                let prd = data.find(p => p.id == id)
                res.end(JSON.stringify(prd))
            }else{
                res.end(JSON.stringify("Xatolik yuz berdi:"))
            }
        });
    }else if(req.url.startsWith("/productbycategory") && req.method == "GET"){

        fs.readFile('prods.json', 'utf8', (err, data) => {

            data = JSON.parse(data)
            if (!err) {
                let [, , id] = path.pathname.split("/")
                // console.log(id);
                let prd = data.filter(p => p.category == id)
                res.end(JSON.stringify(prd))
            }else{
                res.end(JSON.stringify("Xatolik yuz berdi:"))
            }
        });
        // let [, , id] = path.pathname.split("/")

        // let prd = prods.filter((p) => p.category == id)
        // res.end(JSON.stringify(prd))
        
    }else if(req.url.startsWith("/prods") && req.method == "POST"){
        
        let readFiles = JSON.parse(fs.readFileSync('prods.json','utf8'))
        
        let body = ""
                req.on("data", (ch) =>{
                    body += ch
                    // console.log(body);
                    
                })

                req.on("end", ()=>{
                let new_prd = JSON.parse(body)
                new_prd = { ...new_prd}
                readFiles.push(new_prd)
                res.end(JSON.stringify(readFiles))
                let WriteFiles = fs.writeFileSync("prods.json", JSON.stringify(readFiles, null, 4), "utf-8")
            })
    }else if(req.url.startsWith("/prods") && req.method == "PATCH"){
        let readFiles = JSON.parse(fs.readFileSync('prods.json','utf8'))
        
        let body = ""
        let [, , id] = path.pathname.split("/")

        let prd = readFiles.find((p) => p.id == id)

        req.on("data", (ch) => {
            body += ch
        })

        req.on("end", ()=>{
            let new_Data= JSON.parse(body)
            let new_Categ = { ...prd, ...new_Data}
            let index = readFiles.findIndex((p) => p.id == id)
            readFiles.splice(index, 1, new_Categ)
            let WriteFiles = fs.writeFileSync("prods.json", JSON.stringify(readFiles, null, 4), "utf-8")
        })
    }else if(req.url.startsWith("/prods") && req.method == "DELETE"){

        let readFiles = JSON.parse(fs.readFileSync('prods.json','utf8'))
        
        let [, , id] = path.pathname.split("/")

        let prd = readFiles.find((p) => p.id == id)
        let coteg = readFiles.filter((p) => p.id != id)
        readFiles = coteg

        if (prd) {
                let WriteFiles = fs.writeFileSync("prods.json", JSON.stringify(readFiles, null, 4), "utf-8")
        }else{
            res.end(JSON.stringify("Not Found"))
        }
    }

})

server.listen(2000, ()=>{
    console.log("2000 port sever ishlamoqda");
    
})