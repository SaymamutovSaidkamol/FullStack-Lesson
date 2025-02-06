import { query } from "express";
import db from "../config/db.js"
import { productValidation, productPatchValidation } from "../validations/product.js";

async function findAll(req, res) {
    try {

        let key = Object.keys(req.query)
        let values = Object.values(req.query)
        
        let querys = Object.keys(req.query)
        
        if (key == "name" && querys.length == 1) {
        let [result] = await db.query("select * from product WHERE name = ?", [values])

        res.send(result)
        }
        if (key == "price" && querys.length == 1) {
        let [result] = await db.query("select * from product WHERE price = ?", [values])

        res.send(result)
        }
        if (key == "category_id" && querys.length == 1) {
        let [result] = await db.query("select * from product WHERE category_id = ?", [values])

        res.send(result)
        }
        
        else{
        let [result] = await db.query("select * from product ")
        res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query("select * from product where id = ?", [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = productValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let {name, price, image, category_id} = value

        let {filename} = req.file

        let [result] = await db.query(
            "INSERT INTO product(name, price, image, category_id) VALUES (?, ?, ?, ?)",
            [name, price, filename, category_id]
        );
        
        res.send({data: "Creted"})
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {

        let {error,value} = productPatchValidation.validate(req.body)

        if(error){
            res.send(error.details[0].message)
            return
        }

        let {id} = req.params

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE product SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from region WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
