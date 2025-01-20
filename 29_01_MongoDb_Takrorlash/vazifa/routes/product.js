const {Router} = require("express")
const {Product, ProductValidation, ProductPatchValidation} = require("./../models/product.js")
const {urtakash} = require("./../middlewares/auth.js")
const upload = require("./../middlewares/multer.js")
const { ObjectId } = require("bson")

let route = Router()

route.get("/", async(req, res)=>{
    if (Object.keys(req.query)[0] === "sort" && Object.keys(req.query).length === 1 && req.query.sort == "name") {
        let sort = req.query.sort
        let sorted = await Product.find().sort({name: 1}).populate("category")
        res.status(307).send(sorted)
    }

    else if (Object.keys(req.query)[0] === "sort" && Object.keys(req.query).length === 1 && req.query.sort == "color") {
        let sort = req.query.sort
        let sorted = await Product.find().sort({color: 1}).populate("category")
        res.status(307).send(sorted)
    }

    else if (Object.keys(req.query)[0] === "sort" && Object.keys(req.query).length === 1 && req.query.sort == "price") {
        let sort = req.query.sort
        console.log(sort); 

        let sorted = await Product.find().sort({price: 1}).populate("category")
        res.status(307).send(sorted)
    }

    else if (Object.keys(req.query)[0] === "sort" && Object.keys(req.query).length === 1 && req.query.sort == "image") {
        let sort = req.query.sort
        console.log(sort); 

        let sorted = await Product.find().sort({image: 1}).populate("category")
        res.status(307).send(sorted)
    }

    if (Object.keys(req.query)[0] === "name" && Object.keys(req.query).length === 1) {

        let name = req.query.name

        let sorted = await Product.find({name}).populate("category")

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "color" && Object.keys(req.query).length === 1) {

        let color = req.query.color

        let sorted = await Product.find({color}).populate("category")

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "price" && Object.keys(req.query).length === 1) {

        let price = req.query.price

        let sorted = await Product.find({price}).populate("category")

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "image" && Object.keys(req.query).length === 1) {

        let image = req.query.image

        let sorted = await Product.find({image}).populate("category")

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "category" && Object.keys(req.query).length === 1) {

        let category = req.query.category

        let sorted = await Product.find({category}).populate("category")

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "page" && Object.keys(req.query)[1] === "take" && Object.keys(req.query).length === 2) {
        console.log("SASSASSASSAS");

        let page = req.query.page
        let take = req.query.take
        console.log(page, take);
        

        let start = (page - 1 )*take
        let sorted = await Product.find().skip(start).limit(take)
        res.status(307).send(sorted)
    }
    else{
        let all = await Product.find().populate("category")
        res.status(201).send(all)
    }

})

route.get("/:id", async(req, res)=>{
    try {
        let {id} = req.params

        let ctg = await Product.find({_id: id}).populate("category")
        res.status(201).send(ctg)
    } catch (error) {
        res.status(500).send({error: "Not Found"})
    }

})

route.post("/", urtakash, upload.single("image"), async (req, res) => {

    try {
        const {error, value} = ProductValidation.validate(req.body)

        if (error) {
            res.status(501).send({error: error.details[0].message})
            return
        }
        
        let {filename} = req.file
        let newPrd = new Product({
            ...value, 
            image: filename
        })
        
        await newPrd.save()
        res.send(newPrd)
    } catch (error) {
        res.status(500).send({error: `Serverda xatolik yuz berdi --> ${error.message}`})
        
    }
})

route.patch("/:id", urtakash, async (req, res)=>{
    
    let {error, value} = ProductPatchValidation.validate(req.body)
    if (error) {
        res.status(401).send({error: error.details[0].message})
        return
    }

    let {id} = req.params

    let update = await Product.findByIdAndUpdate({_id: id}, value, {new: true})
    res.status(201).send(update)
    console.log(req.body);
    
})

route.delete("/:id", urtakash, async (req, res)=>{
    
    let {id} = req.params

    let del = await Product.findByIdAndDelete({_id: id})
    res.status(408).send(del)
    
})

module.exports = route