import { query } from "express";
import db from "../config/db.js"
import { RegionValidation } from "../validations/region.js";

async function findAll(req, res) {
  try {

    let [result] = await db.query("select * from banner ")
    res.send(result)

  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  try {

    let {id} = req.params

    let [result] = await db.query("select * from banner where id = ?", [id])

    res.send(result)
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {

    let {error,value} = RegionValidation.validate(req.body)

    if(error){
      res.send(error.details[0].message)
      return
    }

    let {name} = value

    let [result] = await db.query("INSERT INTO banner(name) values (?)", [name])

    res.send({data: "Creted"})
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    let {id} = req.params

    let {error,value} = RegionValidation.validate(req.body)

    if(error){
      res.send(error.details[0].message)
      return
    }

    let keys = Object.keys(value)
    let values = Object.values(value)
    let queryKey = keys.map((k) => (k += " = ?"))

    let result = await db.query(`UPDATE banner SET ${queryKey.join(",")} where id = ?`, [...values, id])

    res.send({data: "Updated"})
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    let {id} = req.params

    let result = await db.query("DELETE from banner WHERE id = ? ", [id])

    res.send({data: "Deleted"})

  } catch (error) {
    console.log(error.message);
  }
}

export { findAll, findOne, create, update, remove };
