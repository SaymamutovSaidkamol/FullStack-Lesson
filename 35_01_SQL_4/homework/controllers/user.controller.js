import { query } from "express";
import db from "../config/db.js"
import { UserValidation, UserPatchValidation } from "../validations/user.js";

async function findAll(req, res) {
    try {

        let key = Object.keys(req.query)
        let values = Object.values(req.query)
        
        let querys = Object.keys(req.query)
        
        if (key == "name" && querys.length == 1) {
        let [result] = await db.query(`
            SELECT 
    users.id as "User ID",
    orders.id AS "Zakas ID",
    users.name AS "Foydalanuvchi ismi",
    users.age AS "Foydalanuvchi yoshi",
    region.name AS "Foydalanuvchi Manzili",
    product.name AS "Maxsulot Nomi",
    product.price AS "Maxsulot Narxi",
    product_variant.price AS variant_price,
    type_variant.name AS "Zakas Nomi",
    banner.name AS "Banner Name",
    product.image AS "Maxsulot Rasmi",
    banner_item.name AS "Reklama",
    category.name AS "Maxsulot Categoriyasi nomi",
    comment.msg AS "Yozilgan Comment"
FROM orders
INNER JOIN users ON orders.users_id = users.id
INNER JOIN region ON users.region_id = region.id
INNER JOIN order_item ON orders.id = order_item.order_id
INNER JOIN product_variant ON order_item.product_variant_id = product_variant.id
INNER JOIN product ON product_variant.product_id = product.id
INNER JOIN category ON product.category_id = category.id
INNER JOIN type_variant ON product_variant.type_variant_id = type_variant.id
LEFT JOIN banner_item ON region.id = banner_item.region_id
LEFT JOIN banner ON banner_item.banner_id = banner.id
LEFT JOIN comment ON product.id = comment.product_id
WHERE users.name = ?`, [values])

        res.send(result)
        }else{

            console.log("SA");
            

        let [result] = await db.query(`
            SELECT 
    users.id as "User ID",
    orders.id AS "Zakas ID",
    users.name AS "Foydalanuvchi ismi",
    users.age AS "Foydalanuvchi yoshi",
    region.name AS "Foydalanuvchi Manzili",
    product.name AS "Maxsulot Nomi",
    product.price AS "Maxsulot Narxi",
    product_variant.price AS variant_price,
    type_variant.name AS "Zakas Nomi",
    banner.name AS "Banner Name",
    product.image AS "Maxsulot Rasmi",
    banner_item.name AS "Reklama",
    category.name AS "Maxsulot Categoriyasi nomi",
    comment.msg AS "Yozilgan Comment"
FROM orders
INNER JOIN users ON orders.users_id = users.id
INNER JOIN region ON users.region_id = region.id
INNER JOIN order_item ON orders.id = order_item.order_id
INNER JOIN product_variant ON order_item.product_variant_id = product_variant.id
INNER JOIN product ON product_variant.product_id = product.id
INNER JOIN category ON product.category_id = category.id
INNER JOIN type_variant ON product_variant.type_variant_id = type_variant.id
LEFT JOIN banner_item ON region.id = banner_item.region_id
LEFT JOIN banner ON banner_item.banner_id = banner.id
LEFT JOIN comment ON product.id = comment.product_id`)
        res.send(result)

        }

    } catch (error) {
        console.log(error.message);
    }
}

async function findOne(req, res) {
    try {

        let {id} = req.params

        let [result] = await db.query(`
            SELECT 
    users.id as "User ID",
    orders.id AS "Zakas ID",
    users.name AS "Foydalanuvchi ismi",
    users.age AS "Foydalanuvchi yoshi",
    region.name AS "Foydalanuvchi Manzili",
    product.name AS "Maxsulot Nomi",
    product.price AS "Maxsulot Narxi",
    product_variant.price AS variant_price,
    type_variant.name AS "Zakas Nomi",
    banner.name AS "Banner Name",
    product.image AS "Maxsulot Rasmi",
    banner_item.name AS "Reklama",
    category.name AS "Maxsulot Categoriyasi nomi",
    comment.msg AS "Yozilgan Comment"
FROM orders
INNER JOIN users ON orders.users_id = users.id
INNER JOIN region ON users.region_id = region.id
INNER JOIN order_item ON orders.id = order_item.order_id
INNER JOIN product_variant ON order_item.product_variant_id = product_variant.id
INNER JOIN product ON product_variant.product_id = product.id
INNER JOIN category ON product.category_id = category.id
INNER JOIN type_variant ON product_variant.type_variant_id = type_variant.id
LEFT JOIN banner_item ON region.id = banner_item.region_id
LEFT JOIN banner ON banner_item.banner_id = banner.id
LEFT JOIN comment ON product.id = comment.product_id
WHERE users.id = ?`, [id])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
}

async function create(req, res) {
    try {

        let {error,value} = UserValidation.validate(req.body)

        if(error){
        res.send(error.details[0].message)
        return
        }

        let {name, age, region_id} = value

        let [result] = await db.query("INSERT INTO users(name, age, region_id) values (?, ?, ?)", [name, age, region_id])

        res.send({data: "Creted"})
    } catch (error) {
        console.log(error.message);
    }
}

async function update(req, res) {
    try {
        let {id} = req.params

        let {error,value} = UserPatchValidation.validate(req.body)

        if(error){
            res.send(error.details[0].message)
            return
        }

        let keys = Object.keys(value)
        let values = Object.values(value)
        let queryKey = keys.map((k) => (k += " = ?"))

        let result = await db.query(`UPDATE users SET ${queryKey.join(",")} where id = ?`, [...values, id])

        res.send({data: "Updated"})
    } catch (error) {
        console.log(error.message);
    }
}

async function remove(req, res) {
    try {
        let {id} = req.params

        let result = await db.query("DELETE from users WHERE id = ? ", [id])

        res.send({data: "Deleted"})

    } catch (error) {
        console.log(error.message);
    }
}

export { findAll, findOne, create, update, remove };
