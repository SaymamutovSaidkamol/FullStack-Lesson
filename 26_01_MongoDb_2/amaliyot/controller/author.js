
import authorModel from "../models/auther.js";

async function findAll(req, res) {
    try {
        let author = await authorModel.find()
        res.status(200).send({data: author})
    } catch (error) {
        console.log(error.message);
        
    }
}

async function create(req, res) {
    try {
        let body = req.body
        let auther = await authorModel.find()
        res.status(200).send({data: auther})
    } catch (error) {
        console.log(error.message);
        
    }
}

async function findOne(req, res) {
    try {
        let id = req.params.id
        let auther = await authorModel.findById(id)
        res.status(200).send({data: auther})
    } catch (error) {
        console.log(error.message);
        
    }
}

async function update(req, res) {
    try {
        let {id} = req.params
        let body = req.body

        let newAuthor = await authorModel.findByIdAndUpdate(id, body, {new: true})
    } catch (error) {
        console.log(error.message);
        
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params
        await authorModel.findByIdAndDelete(id)

        res.status(200).send({date: "deleted✅"})
    } catch (error) {
        console.log(error.message);
        
    }
}

export {
    findAll, create, findOne, remove, update
}