const express = require("express")

const {Book, BookValidation} = require("../models/book")
const { Aftor } = require("../models/aftor")
const { error } = require("console")
const route = express.Router()

route.get("/",async (req, res)=>{
    const all = await Book.find()

    if(Object.keys(req.query).length == 1 && Object.keys(req.query) == "aftor"){

        let aftor = req.query.aftor

        let Bk = all.filter((p) => p.aftor == aftor)
        if (Bk == "") {
            return res.status(501).send({error: "data topilmadi !!!"})
            
        }

        res.status(200).send(Bk) 
        return
        
    }
    if (Object.keys(req.query).length == 1 && Object.keys(req.query) == "janr") {
        
        let janr = req.query.janr
        
        let bk = await Book.find({janr: janr})

        if (bk == "") {
            res.status(501).send({error: "Janr topilmadi !!!"})
            return 
        }
        
        res.status(200).send(bk)
        return
        
    }
    if (Object.keys(req.query).length == 1 && Object.keys(req.query) == "year") {
        
        let year = req.query.year
        
        let Year = all.filter((p) => p.year == year)
        
        if (Year == "") {
            console.log("Year");
            res.status(501).send({error: "Year topilmadi!!!"})
            return 
        }
        res.status(200).send(Year)
        return
        
    }
    if (Object.keys(req.query).length == 1 && Object.keys(req.query) == "language") {
        let Language = req.query.language
        
        
        let Lang = all.filter((p) => p.language == Language)
        
        if (Lang == "") {
            res.status(501).send({error: "Language topiladi !!!"})
            return
            
        }
        res.status(201).send(Lang)
        return

    }
    if (Object.keys(req.query)[0] == "year" && Object.keys(req.query)[1] == "janr") {
        let Year = req.query.year
        let Janr = req.query.janr

        let filtered = await Book.find({janr: Janr, year: Year})
        
        if (filtered == "") {
            console.log("filtered");
            res.status(501).send({error: "Year b/n Janr topilmadi !!!"})
            return
        }
        res.status(201).send(filtered)
        return 
    }
    if (Object.keys(req.query).length == 1 && Object.keys(req.query)[0] == "page") {
        let page = req.query.page
        let start = (page-1)*2

        let pagenation = await Book.find().skip(start)

        console.log(pagenation);
        
    }
    if (Object.keys(req.query)[0] == "page" && Object.keys(req.query)[1] == "take") {
        let page = req.query.page
        let take = req.query.take
        let start = (page - 1 )*take
        let pagenation = await Book.find().skip(start).limit(take)
        
        if (pagenation == "") {
            res.status(501).send({error: "Bunday sahifa topilmadi !!!"})
            return

        }
        res.status(201).send(pagenation)
        return
    
    }
    res.send(all)
    
})
route.post("/",async (req, res)=>{
    
    const {error, value} =  BookValidation.validate(req.body)

    if(error){
        return res.status(400).send(error.details[0].message)
    }else{
        const created = new Book(value)
        await created.save()
        res.status(200).send(created)
    }

})
route.get("/:id",async (req, res)=>{

    try {
        let {id} = req.params

        let filter = await Book.find({_id: id})
        res.status(202).send(filter)
        
    } catch (error) {
        res.status(400).send({error: error.message})
        
    }
    
})

// VALIDATION B/N ISHLANGAN PATCH
// route.patch("/:id",async (req, res)=>{
//     try {
//         const {error, value} =  BookValidation.validate(req.body)

//         if(error){
//             return res.status(400).send(error.details[0].message)
//         }else{
//             let {id} = req.params
//             console.log(id);

//             const bk = await Book.findByIdAndUpdate({_id: id}, req.body, {new: true})
            
//             res.status(201).send(bk)
//     }
//     } catch (error) {
//         res.status(501).send({error: error.message})
//     }
    
    
// })

// VALIDATION SIZ ISHLANGAN PATCH
route.patch("/:id",async (req, res)=>{
    try {
        let {id} = req.params
        console.log(id);

        const bk = await Book.findByIdAndUpdate({_id: id}, req.body, {new: true})
        
        res.status(201).send(bk)
    } catch (error) {
        res.status(501).send({error: error.message})   
    }
    
})
route.delete("/:id",async (req, res)=>{
    try {
        let {id} = req.params

        console.log(id);

        let bk = await Book.findByIdAndDelete(id)

        res.status(201).send(bk)
    } catch (error) {
        res.status(501).send({error: error.message})

    }
    
    
})

module.exports = route