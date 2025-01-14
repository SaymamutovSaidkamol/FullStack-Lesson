const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

let url = "mongodb://127.0.0.1:27017/product"

mongoose.connect(url).then(() => console.log("Mongodb connected✅"));

const ProductSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
})

const Product = mongoose.model("Produktlar", ProductSchema)

app.get("/prod", async (req, res)=> {
    const query = req.query;
    const prd = await Product.find()
    
    console.log(query);
    console.log(query);
    
    if (query.color) {
        const Color = prd.filter((p)=> p.color == query.color)

        return res.status(200).send(Color)
    }else if(query.name && !query.take){
        if (query.name == "asd") {
            const asd = await Product.find().sort({ name: 1 });
            return res.send(asd)
            
        }else{
            const asd = await Product.find().sort({ name: -1 });
            return res.send(asd)
            

        }
        
    }else if(query.page){

        if(query.page && query.take){
            let PagePrd = await Product.find().skip(query.page).limit(query.page*query.take)
            
            return res.send(PagePrd)
        }else{
            console.log("SAlom");
            let page = (query.page-1)*3

            let uzunlik = prd.length

            let obj = []
            for (page; page < uzunlik; page++) {
                obj.push(prd[page])
            }

            if (obj == "") {
                res.status(404).send("Malumot topiladi")

                return 
            }
            res.send(obj)
        }
    }

})

app.get("/prod/:id", async (req, res)=> {

    const prd = await Product.find({_id: req.params.id})
    // console.log(prd);
    res.status(202).send(prd)

})

app.post("/prod", async (req, res)=>{
    const new_prd = new Product(req.body)

    await new_prd.save()
    res.status(202).send(new_prd)
    
})

app.patch("/prod/:id", async (req, res)=>{

    const prd = await Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body, {new: true}
    )

    res.status(201).send(prd)
    
})

app.delete("/prod/:id", async (req, res)=>{

    const prd = await Product.findOneAndDelete(
        {_id: req.params.id}
    )

    res.status(204).send(prd)
    
})

// app.listen(3000, ()=>{
//     console.log("300 port server ishlamoqda...");
    
// })