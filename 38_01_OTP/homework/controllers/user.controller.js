import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { totp } from "otplib";
import nodemailer from "nodemailer";

let transpodatarter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saymamutovsaidkamol6@gmail.com",
    pass: "elhx txxs pdhn ggvs",
  },
});

async function RegisterPost(req, res) {
  try {

    let { firstname, age, email, password, role } = req.body;

    let [result] = await db.query("select * from users where email = ?", [
      email,
    ]);

    if (result.length) {
      res.json({ error: "You have acount" });
      return;
    }

    let hash = bcrypt.hashSync(password, 10);
    let user = await db.query(
      "insert into users(firstname, age, email, password, role, status) values (?, ?, ?, ?, ?, ?)",
      [firstname, age, email, hash, role, "passive"]
    );

    res.json({ data: "Registration accepted" });
  } catch (error) {
    console.log(error);
  }
}

async function LoginPost(req, res) {
  try {
    let { email, password } = req.body;

    let [user] = await db.query("select * from users where email = ?", [email]);

    if (!user.length) {
      res.json({ error: "user not found" });
      return;
    }

    let hashed = bcrypt.compareSync(password, user[0].password);

    if (!hashed) {
      res.json({ error: "Wrong password" });
      return;
    }

    let token = jwt.sign(
      {
        id: user[0].id,
        firstname: user[0].firstname,
        email: user[0].email,
        role: user[0].role,
        status: user[0].status,
      },
      "Salom"
    );

    let otp = totp.generate("qanaqadur" + email);

    let data = await transpodatarter.sendMail({
      to: email,
      subject: "activate account",
      text: `Plase activate your acount ${email}`,
      html: `<h5><a href='http://localhost:3000/verify/${token}'>activated</h5>`,
    });

    res.send(`Plase activate your account \n${token}`);
  } catch (error) {
    console.log(error);
  }
}

async function VerifyToken(req, res) {
  try {
    let { token } = req.params;

    let data = jwt.verify(token, "Salom");

    let [users] = await db.query("select * from users where email = ?", [
      data.email,
    ]);
    
    let actived = await db.query(
      "update users set status = 'actived' where email = ?",
      [data.email]
    );
    res.send("acepted");
  } catch (error) {
    console.log(error);
  }
}

async function findAll(req, res) {
    try {

        let key = Object.keys(req.query)
        let values = Object.values(req.query)

        let querys = Object.keys(req.query)

        if (key == "firstname" && querys.length == 1) {

          console.log(key);

        let [result] = await db.query(`
            SELECT 
    users.id as "User ID",
    orders.id AS "Zakas ID",
    users.firstname AS "Foydalanuvchi ismi",
    users.age AS "Foydalanuvchi yoshi",
    users.email AS "Users email",
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
WHERE users.firstname = ?`, [values])

        res.send(result)
        }else{

        let [result] = await db.query(`
            SELECT 
    users.id as "User ID",
    orders.id AS "Zakas ID",
    users.firstname AS "Foydalanuvchi ismi",
    users.age AS "Foydalanuvchi yoshi",
    users.email AS "Users email",
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
  users.firstname AS "Foydalanuvchi ismi",
  users.age AS "Foydalanuvchi yoshi",
    users.email AS "Users email",
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

    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let keys = Object.keys(req.body);
    let values = Object.values(req.body);

    console.log(keys);
    console.log(values);

    if (keys.length > 1 && keys[1] === "password") {
      let new_password = values[1];
      let new_hash_password = bcrypt.hashSync(new_password, 10);
      console.log(new_hash_password);
      values[1] = new_hash_password;
    }
    console.log(values);

    let queryKey = keys.map((k) => (k += "=?"));

    try {
      await db.query(`UPDATE users SET ${queryKey.join(",")} where id = ?`, [
        ...values,
        id,
      ]);
      res.send({ data: "Updated" });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  try {
    let {id} = req.params

    console.log(id);

    await db.query("delete from users where id = ? ", [id])
    res.send({data: "Deleted"})
  } catch (error) {
    console.log(error.message);
    
  }
}

export { LoginPost, RegisterPost, findAll, findOne, update, VerifyToken, remove };
