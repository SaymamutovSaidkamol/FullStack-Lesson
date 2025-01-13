import { log } from "console"
import express from "express"
import fs from "fs"
const app = express()
app.use(express.json())

let ReadFiles = JSON.parse(fs.readFileSync("prod.json", "utf-8"))

app.get("/prod", (req, res) =>{

    try {
        res.status(201).send(ReadFiles)
    } catch (error) {
        res.status(404).send("Note Found")
        
    }
})
app.get("/prod/:id", (req, res) =>{
    console.log(req.params);

    let prd = ReadFiles.filter((p) => p.id == req.params.id)

    if (prd && prd != "") {
        res.status(201).send(prd)
        
    }else{
        res.status(404).send("Topilmadi!!!")
    }
    
    // res.send(ReadFiles)
})
app.get("/products-by-category/:id", (req, res) =>{
    let ReadFilesc = JSON.parse(fs.readFileSync("category.json", "utf-8"))

    // let categ_id = req.params.id

    let prd1 = ReadFilesc.filter((p)=> p.id == req.params.id)
    let prd2 = ReadFiles.filter((p) => p.category == req.params.id)
    console.log(ReadFiles);
    
    if (prd1 && prd1 != "" && prd2 && prd2 != "") {
        res.status(201).send(prd2)
        console.log(prd2);
        
    }else{
        console.log("MAvjud emas");
        res.status(404).send("Bunday category topilmadi!!!")
        
    }
    // let prd = 
    // console.log("Salom");
    
    // res.send(ReadFiles)
})
app.post("/prod", (req, res) => {
    let body = req.query; // Query parametrlari
    let keys = Object.keys(body); // Kalitlarni olish

    if (keys.length === 1 && keys[0] === "page") {
        let take1 = (body.page - 1) * 10

        let new_prd = []
        for (take1; take1 < ReadFiles.length; take1++) {
            new_prd.push(ReadFiles[take1])
        }
        // console.log(new_prd);
        res.send(`'page': ${body.page}\n'prods': ${JSON.stringify(new_prd)}`);
        
    }else if(keys.length === 1 && keys[0] === "color") {

        let color = Object.values(body)
        let prd = ReadFiles.filter((p) =>  p.color == color );

        res.send(prd)
    }
    else if (keys.length === 2 && keys[0] === "page" && keys[1] === "take") {
        console.log(body.page, body.take);

        let take1 = (body.page-1) * body.take
        let page1 = body.page * body.take
        console.log(take1, page1);
        
        let new_prd = []
        for (take1; take1 < page1; take1++) {
            new_prd.push(ReadFiles[take1])
        }
        console.log(new_prd);
        res.send(`'page': ${body.page}, 'take': ${body.take}\n'prods': ${JSON.stringify(new_prd)}`);
    } else {
        res.status(400).send(ReadFiles);
    }
});
app.patch("/prod/:id", (req, res) =>{

    try {
        let prd = ReadFiles.find((p) => p.id == req.params.id)
        let index = ReadFiles.findIndex((p) => p.id == prd.id)

        let  new_prd = { ...prd, ...req.body}
        ReadFiles.splice(index, 1, new_prd)
        res.status(201).send(new_prd)
        // console.log(ReadFiles);
        let WriteFiles = fs.writeFileSync("prod.json", JSON.stringify(ReadFiles, null, 4), "utf-8")

    } catch (e) {
        res.status(404).send("Not Found")
        
    }
})
app.delete("/prod/:id", (req, res) =>{
    try {
        let prd = ReadFiles.find((p) => p.id == req.params.id)
        ReadFiles = ReadFiles.filter((p) => p.id != prd.id)
        let WriteFiles = fs.writeFileSync("prod.json", JSON.stringify(ReadFiles, null, 4), "utf-8")
        
        res.status(201).send(prd)
    } catch (e) {
        res.status(404).send("Not Found")
        
    }
    
})

// ------------------------------------------------------


app.get("/categ", (req, res) =>{
    try {
        let ReadFilesc = JSON.parse(fs.readFileSync("category.json", "utf-8"))
        res.status(201).send(ReadFilesc)
    } catch (error) {
        res.status(404).send("Not Found")
    }
})
app.get("/categ/:id", (req, res) =>{
        let ReadFilesc = JSON.parse(fs.readFileSync("category.json", "utf-8"))

        let prd = ReadFilesc.find((p) => p.id == req.params.id)

        console.log(prd);

        if (prd != "") {
            res.status(201).send(prd)
        }else{
            res.status(404).send("Note Found")
        }
})
app.post("/categ", (req, res) => {
    let ReadFilesc = JSON.parse(fs.readFileSync("category.json", "utf-8"))

    let body = req.query; // Query parametrlari
    let keys = Object.keys(body); // Kalitlarni olish

    if (keys.length === 1 && keys[0] === "page") {
        let take1 = (body.page - 1) * 10

        let new_prd = []
        for (take1; take1 <= ReadFilesc.length; take1++) {
            new_prd.push(ReadFilesc[take1])
        }
        // console.log(new_prd);
        res.send(`'page': ${body.page}\n'prods': ${JSON.stringify(new_prd)}`);
        
    }else if(keys.length === 1 && keys[0] === "color") {

        let color = Object.values(body)
        let prd = ReadFilesc.filter((p) =>  p.color == color );

        res.send(prd)
    }
    else if (keys.length === 2 && keys[0] === "page" && keys[1] === "take") {
        console.log(body.page, body.take);

        let take1 = (body.page-1) * body.take
        let page1 = body.page * body.take
        console.log(take1, page1);
        
        let new_prd = []
        for (take1; take1 < page1; take1++) {
            new_prd.push(ReadFilesc[take1])
        }
        console.log(new_prd);
        res.send(`'page': ${body.page}, 'take': ${body.take}\n'prods': ${JSON.stringify(new_prd)}`);
    } else {
        res.status(400).send(ReadFilesc);
    }
});
app.patch("/prod/:id", (req, res) =>{
    let ReadFilesc = JSON.parse(fs.readFileSync("category.json", "utf-8"))

    try {
        let prd = ReadFilesc.find((p) => p.id == req.params.id)
        let index = ReadFilesc.findIndex((p) => p.id == prd.id)

        let  new_prd = { ...prd, ...req.body}
        ReadFilesc.splice(index, 1, new_prd)
        res.status(201).send(new_prd)
        // console.log(ReadFilesC);
    } catch (e) {
        res.status(404).send("Not Found")
        
    }
})
app.delete("/categ/:id", (req, res) =>{
    let ReadFilesc = JSON.parse(fs.readFileSync("category.json", "utf-8"))
    // console.log("Salom");
    
    try {
        let prd = ReadFilesc.find((p) => p.id == req.params.id);
        if (!prd) {
            throw new Error("Not Found");
        }

        ReadFilesc = ReadFilesc.filter((p) => p.id != req.params.id);

        fs.writeFileSync("category.json", JSON.stringify(ReadFilesc, null, 4), "utf-8");

        res.status(204).send();
    } catch (e) {
        res.status(404).send("Not Found")
        
    }
    
})

app.listen(5000, ()=>{
    console.log("5000 port ishlamoqda...");
    
})

