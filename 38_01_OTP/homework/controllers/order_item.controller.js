import { query } from "express";
import db from "../config/db.js"
import { order_itemPatchValidation, order_itemValidation } from "../validations/order_item.js";

async function findAll(req, res) {
    try {

        let key = Object.keys(req.query)
        let values = Object.values(req.query)
        
        let querys = Object.keys(req.query)
        
        if (key == "product_variant_id" && querys.length == 1) {
            let [result] = await db.query("select * from order_item WHERE product_variant_id = ?", [values])

            res.send(result)
        }
        
        if (key == "order_id" && querys.length == 1) {
            let [result] = await db.query("select * from order_item WHERE order_id = ?", [values])

            res.send(result)
        }
        
        else{
            let [result] = await db.query("select * from order_item ")
            res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query("select * from order_item where id = ?", [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = order_itemValidation.validate(req.body)

        if(error){
            res.send(error.details[0].message)
            return
        
        }else{
            let {product_variant_id, order_id} = value
    
            let [result] = await db.query("INSERT INTO order_item(product_variant_id, order_id) values (?, ?)", [product_variant_id, order_id])
    
            res.send({data: "Creted"})

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        let {id} = req.params

        let {error,value} = order_itemPatchValidation.validate(req.body)

        if(error){
            res.send(error.details[0].message)
            return
        }

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE order_item SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from order_item WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
