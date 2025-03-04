import express from "express";
import pool from "./config/db.js";
let app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  let { rows } = await pool.query("select * from users");
  res.status(200).send({ data: rows });
});

app.get("/users/:id", async (req, res) => {
  let { id } = req.params;
  let { rows } = await pool.query(`select * from users where id = ?`, [id]);
  res.status(200).send({ data: rows });
});

app.post("/users", async (req, res) => {
  let { name, age } = req.body;
  let { rows } = await pool.query("insert into (name, age) values (?, ?)", [
    name,
    age,
  ]);
  res.status(200).send({ data: rows });
});

app.patch("/users", async (req, res) => {
  let { id } = req.params;
  let data = req.body;

  let key = Object.keys(data);
  let value = Object.values(data);
  let newQuery = {};

  key.forEach((val)=>{
    
  })

  let { rows } = await pool.query("select * from users");
  res.status(200).send({ data: rows });
});

app.listen(4000, () => {
  console.log("Server started on port 4000🟢");
});
