import { query } from "express";
import db from "../config/db.js"
import { banner_idValidation } from "../validations/banner_item.js";

async function findAll(req, res) {
    try {

        let key = Object.keys(req.query)
        let values = Object.values(req.query)

        let querys = Object.keys(req.query)
        
        console.log(key);
        
        if (key == "name" && querys.length == 1) {
            let [result] = await db.query("select * from banner_item WHERE name = ?", [values])
            
            res.send(result)
            return
        }
        if (key == "banner_id" && querys.length == 1) {
            let [result] = await db.query("select * from banner_item WHERE banner_id = ?", [values])
            console.log(result);

            res.send(result)
            return
        }
        if (key == "region_id" && querys.length == 1) {
            let [result] = await db.query("select * from banner_item WHERE region_id = ?", [values])

            res.send(result)
        return
        }
        
        else{
            let [result] = await db.query("select * from banner_item ")
            res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
  try {

    let {id} = req.params

    let [result] = await db.query("select * from banner_item where id = ?", [id])

    res.send(result)
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {

      let {error,value} = banner_idValidation.validate(req.body)

    if(error){
      res.send(error.details[0].message)
      return
    }

    let {name, banner_id, region_id} = value

    let [result] = await db.query("INSERT INTO banner_item(name, banner_id, region_id) values (?, ?, ?)", [name, banner_id, region_id])

    res.send({data: "Creted"})
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    let {id} = req.params

    let {error,value} = banner_idValidation.validate(req.body)

    if(error){
      res.send(error.details[0].message)
      return
    }

    let keys = Object.keys(value)
    let values = Object.values(value)
    let queryKey = keys.map((k) => (k += " = ?"))

    let result = await db.query(`UPDATE banner_item SET ${queryKey.join(",")} where id = ?`, [...values, id])

    res.send({data: "Updated"})
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    let {id} = req.params

    let result = await db.query("DELETE from banner_item WHERE id = ? ", [id])

    res.send({data: "Deleted"})

  } catch (error) {
    console.log(error.message);
  }
}

export { findAll, findOne, create, update, remove };
