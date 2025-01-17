const express = require("express")

const { Aftor, AftorValidation } = require("../models/aftor");

const route = express.Router()

route.get("/", async (req, res) =>{
    
    if (Object.keys(req.query) == "janr") {
        let janr = req.query.janr
        console.log(janr);
        
        let filtered = await Aftor.find({ janr: janr }); 

        if (filtered == "") {
            res.status(501).send({data: "Janr topilmadi !!!"})
            return
        }
        res.status(200).send(filtered)
        return
        
    }else if(Object.keys(req.query) == "year"){

        let year = req.query.year

        let filtered = await Aftor.find({year: year})

        if (filtered == "") {
            res.status(501).send({data: "Yil topilmadi !!!"})
            return
        }
        
        res.status(200).send(filtered)
        return
    }else{
        const all = await Aftor.find()
        res.send(all)
    }
    

})

route.post("/", async(req, res)=>{
    console.log(req.body);

    const { error, value } = AftorValidation.validate(req.body)
    // console.log(error);
    if(error){
        return res.status(400).send(error.details[0].message)
    }else{
        const created = new Aftor(value)
        await created.save()
        res.status(200).send(created)
    }

})

route.get("/:id", async(req, res)=>{
    
    let {id} = req.params

    const all = await Aftor.find()

    let book = all.filter((p) => p.id == id)

    res.send(book)

})

// VALIDATION B/N ISHLANGAN PATCH
// route.patch("/:id", async (req, res)=>{
//     let {id} = req.params
//     const { error, value } = AftorValidation.validate(req.body)
//     // console.log(error);
//     if(error){
//         return res.status(400).send(error.details[0].message)
//     }else{
//         const af = await Aftor.findByIdAndUpdate({_id: id}, req.body, {new: true})

//         console.log(af);
//         res.status(202).send(af)
//     }
// })

// VALIDATION SIZ ISHLANGAN PATCH
route.patch("/:id", async (req, res)=>{
    let {id} = req.params

    const af = await Aftor.findByIdAndUpdate({_id: id}, req.body, {new: true})

    console.log(af);
    res.status(202).send(af)

})


route.delete("/:id", async (req, res)=>{
    let {id} = req.params

    const Delete = await Aftor.findByIdAndDelete(id)

    res.status(200).send(Delete)
})
module.exports = route