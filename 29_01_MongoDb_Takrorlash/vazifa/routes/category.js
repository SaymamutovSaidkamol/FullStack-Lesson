const {Router} = require("express")
const {Category, CategoryValidation, CategoryPatchValidation} = require("./../models/category.js")
const upload = require("./../middlewares/multer.js")
const {urtakash} = require("./../middlewares/auth")
const { json } = require("body-parser")

let route = Router()

route.get("/", async (req, res)=>{
    if (Object.keys(req.query)[0] === "sort" && Object.keys(req.query).length === 1 && req.query.sort == "name") {
        let sort = req.query.sort
        let sorted = await Category.find().sort({name: 1})
        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "sort" && Object.keys(req.query).length === 1 && req.query.sort == "image") {
        let sort = req.query.sort

        let sorted = await Category.find().sort({image: 1})
        res.status(307).send(sorted)
    }

    if (Object.keys(req.query)[0] === "name" && Object.keys(req.query).length === 1) {

        let name = req.query.name

        let sorted = await Category.find({name})

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "image" && Object.keys(req.query).length === 1) {

        let image = req.query.image

        let sorted = await Category.find({image})

        res.status(307).send(sorted)
    }
    else if (Object.keys(req.query)[0] === "page" && Object.keys(req.query)[1] === "take" && Object.keys(req.query).length === 2) {
        console.log("SASSASSASSAS");

        let page = req.query.page
        let take = req.query.take
        console.log(page, take);
        

        let start = (page - 1 )*take
        let sorted = await Category.find().skip(start).limit(take)
        res.status(307).send(sorted)
    }
    else{
        let all = await Category.find()
        res.send(all)
    }
    
})

route.get("/:id", async (req, res)=>{
    let {id} = req.params
    let ctg = await Category.find({_id: id})
    res.status(202).send(ctg)
})

route.post("/", urtakash, upload.single("image"), async (req, res)=>{
    const {error, value} = CategoryValidation.validate(req.body)
    
    let {name} = req.body

    let filter_name = await Category.findOne({name})

    if (filter_name) {
        res.status(403).send({error: "This category exists"})
        return
    }

    if (error) {
        res.status(500).send({error: error.details[0].message})
        return
    }

    if (name) {
        
    }

    let {filename} = req.file

    let newCtg = new Category ({
        ...value,
        image: filename
    })

    await newCtg.save()
    res.send(newCtg)
})

route.patch("/:id", urtakash, async (req, res)=>{
    
    let {error, value} = CategoryPatchValidation.validate(req.body)
    if (error) {
        res.status(401).send({error: error.details[0].message})
        return
    }

    let {id} = req.params

    let update = await Category.findByIdAndUpdate({_id: id}, value, {new: true})
    res.status(201).send(update)
    console.log(req.body);
    
})

route.delete("/:id", urtakash, async (req, res)=>{
    
    let {id} = req.params

    let del = await Category.findByIdAndDelete({_id: id})
    res.status(408).send(del)
    
})

module.exports = route