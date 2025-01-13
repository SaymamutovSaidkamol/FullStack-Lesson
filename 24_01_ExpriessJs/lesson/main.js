const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

let ReadFiles = JSON.parse(fs.readFileSync("prod.json", "utf-8"))

let keys = ""

function  masalan(req, res, next) {
    // console.log("Masalan middleware ishladi");
    // console.log(req.body);
    
    // let [, , savol] = req.path.split("?")


    let body = req.query

    keys = Object.keys(body)
    // console.log(keys);
    
    // console.log(req.query);
    if (keys == "page") {
        console.log("Query mavjud");
        next()
    }else{
        console.log("Query mavjud emas");
        
    }
}

app.get("/prod", masalan, (req, res) =>{
    res.send(ReadFiles)
})
app.get("/prod/:id", (req, res) =>{
    let prd = ReadFiles.find((p) => p.id == req.params.id)
    res.send(prd)
})
app.post("/prod", (req, res) =>{
    let prd = { ...req.body, id: ReadFiles.length + 1}

    res.send(prd)
    ReadFiles.push(prd)
    let WriteFiles = fs.writeFileSync("prod.json", JSON.stringify(ReadFiles, null, 4), "utf-8")
    console.log(WriteFiles);
    
})
app.patch("/prod/:id", (req, res) =>{
    let prd = ReadFiles.find((p) => p.id == req.params.id)
    let index = ReadFiles.findIndex((p) => p.id == req.params.id)

    let  new_prd = { ...prd, ...req.body}
    ReadFiles.splice(index, 1, new_prd)
    res.send(new_prd)
    let WriteFiles = fs.writeFileSync("prod.json", JSON.stringify(ReadFiles, null, 4), "utf-8")
})
app.delete("/prod/:id", (req, res) =>{
    console.log(req.params.id);
    
    let prd = ReadFiles.find((p) => p.id == req.params.id)
    ReadFiles = ReadFiles.filter((p)=> p.id != req.params.id)

    res.send(prd)
    let WriteFiles = fs.writeFileSync("prod.json", JSON.stringify(ReadFiles, null, 4), "utf-8")
})

// app.listen(5000, ()=>{
    // console.log("5000 prort ishlamoqda...");
    
// })