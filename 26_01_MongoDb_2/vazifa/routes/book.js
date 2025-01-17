const Product = require("../models/book")

const express = require("express")

const route = express.Router()

route.get("/", async (req, res)=>{
    let all = await Product.find()

    let keys = Object.keys(req.query);

    if (keys.length === 1 && keys[0] === "janr") {
        let janr = req.query.janr
        console.log(janr);
        
        let filtered = await Product.find({ janr: janr }); 

        console.log(filtered);
        res.status(202).send(filtered); 

    }
    if (keys.length === 1 && keys[0] === "year") {

        let year = req.query.year
        console.log(year);
        

        if (year !== NaN && keys == "year" && Number(year)) {
            let filtered = await Product.find({ year: year }); 
            // console.log(filtered);
            
            if (filtered == "") {
                return res.status(404).send({date: "Year Topilmadi❎"})

            }else{
                return res.status(202).send(filtered)
            }
        }else{
            return res.status(404).send({date: "Year Topilmadi❎"})
        }
    }
    if (keys.length === 1 && keys[0] === "language") {

        let lan = req.query.language
        
        if (keys.length === 1 && keys == "language") {
            let filtered = await Product.find({ language: lan }); 
            console.log(filtered);
            
            if (filtered == "") {
                return res.status(404).send({date: "language Topilmadi❎"})

            }else{
                return res.status(202).send(filtered)
            }
        }else{
            return res.status(404).send({date: "language Topilmadi❎"})
        }
    }
    if (keys.length === 1 && keys[0] === "after") {

        let lan = req.query.after

        if (keys.length === 1 && keys == "after") {
            let filtered = await Product.find({ after: lan }); 
            console.log(filtered);

            if (filtered == "") {
                return res.status(404).send({date: "language Topilmadi❎"})

            }else{
                return res.status(202).send(filtered)
            }
        }else{
            return res.status(404).send({date: "language Topilmadi❎"})
        }
    }
    if (keys.length === 1 && keys[0] === "after") {

        let lan = req.query.after

        if (keys.length === 1 && keys == "after") {
            let filtered = await Product.find({ after: lan }); 
            console.log(filtered);

            if (filtered == "") {
                return res.status(404).send({date: "language Topilmadi❎"})

            }else{
                return res.status(202).send(filtered)
            }
        }else{
            return res.status(404).send({date: "language Topilmadi❎"})
        }
    }
    if (Object.keys(req.query)[0] === "page" || Object.keys(req.query)[0] === "take") {

        let query = req.query

        if(keys[0] === "page" && keys[1] === "take"){
            let PagePrd = await Product.find().skip(query.page).limit(query.page*query.take)
            
            return res.send(PagePrd)
        }else if(Object.keys(req.query)[0] === "page"){
            let page = (query.page-1)*3

            let uzunlik = all.length

            let obj = []
            for (page; page < uzunlik; page++) {
                obj.push(all[page])
            }

            if (obj == "") {
                res.status(404).send("Malumot topiladi")

                return 
            }
            res.send(obj)
        }
    }
    if (Object.keys(req.query)[0] === "year" || Object.keys(req.query)[0] === "janr") {

        let year = req.query.year
        let janr = req.query.janr
        console.log(year);
        console.log(janr);

        let filtered = await Product.find({ janr: janr, year: year}); 

        console.log(filtered);
        res.status(202).send(filtered);
        
    }
    else{
        res.status(202).send(all)
    }

})
route.get("/:id", async (req, res)=>{
    let {id} = req.params
    
    let all = await Product.find()
    
    let filtered = all.filter((p)=> p.id == id)

    res.send(filtered)
})

route.post("/", async (req, res)=>{
    let newItem = new Product(req.body)
    await newItem.save()
    res.send(newItem)
})

route.patch("/:id", async (req, res)=>{
    console.log("ASas");
    
    const prd = await Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body, {new: true}
    )

    console.log(prd);
    

    res.status(201).send(prd)
})

route.delete("/:id", async (req, res)=>{
    try {
        let {id} = req.params
        await Product.findByIdAndDelete(id)

        res.status(200).send({date: "deleted✅"})

    } catch (error) {
        console.log(errorMonitor.message);

    }
})

module.exports = route