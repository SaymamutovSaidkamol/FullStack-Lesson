import { query } from "express";
import db from "../config/db.js"

import {ProductValidation} from "../validations/product.validation.js"

async function findAll(req, res) {
    try {
        let [result, _] = await db.query("select * from product")
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
} 

async function findOne(req, res) {
    try {
        let {id} = req.params
        console.log(id);

        let [result, _] = await db.query("select * from product where id=?", [id])
        res.status(200).send({data: result})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function create(req, res) {
    try {

        let {error,value} = ProductValidation.validate(req.body)

        if (error) {
            res.send({error: error.details[0].message})
            return
        }

        let {name, price, color, category_id} = value

        let {filename} = req.file
        await db.query("insert into product(name, price, color, category_id, img) values (?, ?, ?, ?, ?)", [name, price, color, category_id, filename])
        res.status(200).send({data: "product created"})
        
    } catch (error) {
        console.log(error);
        
    }
}

async function update(req, res) {
    try {
        const {id} = req.params

        let keys = Object.keys(req.body)
        let values = Object.values(req.body)
        let querykey = keys.map((k) => (k += "= ?"))

        try {
            let updated = await db.query(
                `update product set ${querykey.join(",")} where id = ?`,
                [...values, id]
            )
            res.send({data: "updated"})
        } catch (error) {
            res.send({error: "error"})
        }

    } catch (error) {
        console.log(error);

    }
}

async function deleted(req, res) {
    try {
        let { id } = req.params

        let author_deleted = await db.query(`DELETE from product WHERE id = ${id}`)
        console.log(author_deleted);
        
        res.status(200).send({deleted: `Book id ${id}`}) 
        
    } catch (error) {
        console.log(error);
        
    }
}

export { findAll, findOne, create, update, deleted }