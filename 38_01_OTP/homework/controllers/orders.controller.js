import { query } from "express";
import db from "../config/db.js"
import { ordersidValidation } from "../validations/orders.js";

async function findAll(req, res) {
    try {

        console.log("SAlm");
        
        let key = Object.keys(req.query)
        let values = Object.values(req.query)
        
        let querys = Object.keys(req.query)
        
        if (key == "users_id" && querys.length == 1) {
        let [result] = await db.query("select * from orders WHERE users_id = ?", [values])

        res.send(result)
        }else{
        let [result] = await db.query("select * from orders ")
        res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query("select * from orders where id = ?", [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = ordersidValidation.validate(req.body)

        if(error){
            res.send(error.details[0].message)
            return
        }

        let {users_id} = value

        let [result] = await db.query("INSERT INTO orders(users_id) values (?)", [users_id])

        res.send({data: "Creted"})
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        let {id} = req.params

        let {error,value} = ordersidValidation.validate(req.body)

        if(error){
            res.send(error.details[0].message)
            return
        }

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE orders SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from orders WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
