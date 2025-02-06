import { query } from "express";
import db from "../config/db.js"
import { TypeValidation } from "../validations/type.js";

async function findAll(req, res) {
    try {

        console.log("SAlm");
        
        let key = Object.keys(req.query)
        let values = Object.values(req.query)
        
        let querys = Object.keys(req.query)
        
        if (key == "name" && querys.length == 1) {
        let [result] = await db.query("select * from type WHERE name = ?", [values])

        res.send(result)
        }else{
        let [result] = await db.query("select * from type ")
        res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query("select * from type where id = ?", [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = TypeValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let {name} = value

        let [result] = await db.query("INSERT INTO type(name) values (?)", [name])

        res.send({data: "Creted"})
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        let {id} = req.params

        let {error,value} = TypeValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE type SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from type WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
