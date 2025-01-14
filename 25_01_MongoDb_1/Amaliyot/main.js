import express from 'express'
import mongoose, { model, Schema } from 'mongoose'

let PORT = 1101
let app = express()

app.use(express.json())

async function bootstap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/n16")
        console.log("db connected successfully✅");

        app.listen(PORT, ()=>{
            console.log(`server ${PORT} da ishlamoqda...`);
            
        })
        
    } catch (error) {
        console.log(error.message);
        
    }
}

bootstap()

let productSchema = new Schema(
    {
        name: {
            type: String,
        }
    }
)

let productModel = model("product", productSchema)

app.get("/prod", async (req, res) =>{
    let data = await productModel.find({})
    res.status(200).send({msg: "ok", data})
})

app.post("/prod", async (req, res) =>{
    let body = req.body
    let item = await productModel.create(body)
    res.status(200).send({msg: "ok", data: item})
})


app.patch("/product/:id", async(req, res)=> {
    let body = req.body
    let { id } = req.params
    let item = await productModel.findByIdAndUpdate(id, body, {new: true})
    res.status(201).send({msg: "ok", data: item})
})

app.delete("/product/:id", async(req, res)=> {
    let { id } = req.params
    let item = await productModel.findByIdAndUpdate(id)
    res.status(200).send({msg: "ok", data: "deleted"})
})