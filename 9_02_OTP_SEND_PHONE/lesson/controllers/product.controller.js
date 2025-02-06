import db from "../config/db.js"
import {productValidation, productPatchValidation} from "../validation/product.js"


async function findAll(req, res) {
    try {
  
      let [result] = await db.query("select * from product ")
      res.send(result)
  
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
      let {id} = req.params
  
      let {error,value} = productPatchValidation.validate(req.body)
  
      if(error){
        res.send(error.details[0].message)
        return
      }
  
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

    let result = await db.query("DELETE from product WHERE id = ? ", [id])

    res.send({data: "Deleted"})

} catch (error) {
    console.log(error.message);
}
}

async function update(req, res) {
    try {

        let {error, value} = productValidation.validate(req.body)        

        if (error) {
            res.json({error: error.details[0].message})
            return
        }

        await db.query("insert into product(name, price, color) values (?, ?, ?)", [value.name, value.price, value.color])

        res.status(201).json({data: "Updated"})
        
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}


export {findAll, findOne, update, create, remove}