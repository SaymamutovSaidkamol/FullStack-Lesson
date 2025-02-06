import { query } from "express";
import db from "../config/db.js"
import { product_variantPatchValidation, product_variantValidation } from "../validations/product_variant.js";

async function findAll(req, res) {
    try {

        console.log("SAlm");
        
        let key = Object.keys(req.query)
        let values = Object.values(req.query)
        
        let querys = Object.keys(req.query)
        
        if (key == "price" && querys.length == 1) {
        let [result] = await db.query("select * from product_variant WHERE price = ?", [values])

        res.send(result)
        }
        
        if (key == "product_id" && querys.length == 1) {
        let [result] = await db.query("select * from product_variant WHERE product_id = ?", [values])

        res.send(result)
        }
        
        if (key == "type_variant_id" && querys.length == 1) {
        let [result] = await db.query("select * from product_variant WHERE type_variant_id = ?", [values])

        res.send(result)
        }
        
        else{
        let [result] = await db.query("select * from product_variant ")
        res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query("select * from product_variant where id = ?", [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = product_variantValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let {price, product_id, type_variant_id} = value

        let [result] = await db.query("INSERT INTO product_variant(price, product_id, type_variant_id) values (?, ?, ?)", [price, product_id, type_variant_id])

        res.send({data: "Creted"})
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        let {id} = req.params

        let {error,value} = product_variantPatchValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE product_variant SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from product_variant WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
