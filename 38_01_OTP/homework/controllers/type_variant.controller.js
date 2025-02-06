import { query } from "express";
import db from "../config/db.js"
import { type_variantPatchValidation, type_variantValidation } from "../validations/type_variant.js";

async function findAll(req, res) {
    try {

        let key = Object.keys(req.query)
        let values = Object.values(req.query)

        let querys = Object.keys(req.query)
        
        console.log(key);
        
        if (key == "name" && querys.length == 1) {
            let [result] = await db.query("select * from type_variant WHERE name = ?", [values])
            
            res.send(result)
            return
        }
        if (key == "type_id" && querys.length == 1) {
            let [result] = await db.query("select * from type_variant WHERE type_id = ?", [values])

            res.send(result)
        return
        }
        
        else{
            let [result] = await db.query("select * from type_variant ")
            res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query("select * from type_variant where id = ?", [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = type_variantValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let {name, type_id} = value

        let [result] = await db.query("INSERT INTO type_variant(name, type_id) values (?, ?)", [name, type_id])

        res.send({data: "Creted"})
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        let {id} = req.params

        let {error,value} = type_variantPatchValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE type_variant SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from type_variant WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
