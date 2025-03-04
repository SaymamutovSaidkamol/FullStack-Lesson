import { error } from "console";
import pool from "../config/db.js";
import {
  ClientValidation,
  ClientPatchValidation,
} from "../validations/client.validation.js";

async function findAll(req, res) {
  try {
    let key = Object.keys(req.query);
    let value = Object.values(req.query);

    if (key.length == 0) {
      let { rows } = await pool.query(`
        SELECT 
    client.id, 
    client.name, 
    client.phone, 
    json_build_object(
        'id', region.id,
        'name', region.name
    ) AS region
FROM client
JOIN region ON region.id = client.regionId;

      `);

      if (rows.length === 0) {
        return res.status(404).json({ error: "client Not Found" });
      }

      return res.status(200).json({ data: rows });
    }

    if (key[0] == "sort") {
      console.log("kirdi");

      let sortBy = req.query.sort || "id"; // Default `id` bo‘yicha saralanadi
      let order = req.query.order || "ASC"; // Default `ASC` bo‘yicha saralanadi

      // Xavfsiz ustunlarni tekshiramiz
      const validColumns = ["id", "name", "code", "colorId"];
      if (!validColumns.includes(sortBy)) {
        return res.status(400).json({ error: "Invalid sort column" });
      }

      // SQL Query yaratish
      let sql = `SELECT 
    client.id, 
    client.name, 
    client.phone, 
    json_build_object(
        'id', region.id,
        'name', region.name
    ) AS region
FROM client
JOIN region ON region.id = client.regionId ORDER BY ${sortBy} ${
        order === "DESC" ? "DESC" : "ASC"
      }`;

      let { rows } = await pool.query(sql);

      if (rows.length === 0) {
        return res.status(404).json({ error: "Not Found" });
      }

      return res.status(200).json({ data: rows });
    }
    
    if (key[0] == "page" || key[1] == "take") {
      key[1] = key[1] || "take"
      let limit = parseInt(value[0])
      let offset = parseInt(value[1]) || 1

      let paganation = await pool.query(`SELECT 
    client.id, 
    client.name, 
    client.phone, 
    json_build_object(
        'id', region.id,
        'name', region.name
    ) AS region
FROM client
JOIN region ON region.id = client.regionId ORDER BY id LIMIT $1 OFFSET $2`, [limit, offset])

      return res.status(200).json({data: paganation.rows})
      console.log(key);
    }

    try {
      let queryKey = key.map((e, i) => (e += ` = $${i + 1}`));
      console.log(queryKey);
      
      let query = await pool.query(
        `SELECT 
    client.id, 
    client.name, 
    client.phone, 
    json_build_object(
        'id', region.id,
        'name', region.name
    ) AS region
FROM client
JOIN region ON region.id = client.regionId where ${queryKey.join("and")}`,
        [...value]
      );

      if (query.rows.length == 0) {
        return res.status(404).json({ error: "Not Found" });
      }

      res.status(200).json({ data: query.rows });
    } catch (error) {
      res.status(404).json({ error: "Invalid value entered." });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let { rows } = await pool.query(
      `SELECT 
    client.id, 
    client.name, 
    client.phone, 
    json_build_object(
        'id', region.id,
        'name', region.name
    ) AS region
FROM client
JOIN region ON region.id = client.regionId where client.id = $1`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "client Not Found" });
    }

    res.status(200).json({ data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = ClientValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name, phone, regionId } = value;

    let check = await pool.query("select * from client where phone = $1", [
      phone,
    ]);

    if (check.rows.length != 0) {
      return res
        .status(409)
        .json({ error: "There is such a digital client" });
    }

    let { rows } = await pool.query(
      "insert into client(name, phone, regionId) values ($1, $2, $3) RETURNING *",
      [name, phone, regionId]
    );

    res.status(201).json({ message: "Create Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;
    let { error, value } = ClientPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let data = value;
    let { phone } = value;

    if (phone) {
      let check = await pool.query(
        "select * from client where phone = $1",
        [phone]
      );

      if (check.rows.length != 0) {
        return res
          .status(409)
          .json({ error: "There is such a digital client" });
      }
    }

    let keys = Object.keys(data);
    let values = Object.values(data);

    if (!keys.length) {
      return res.status(400).json({ error: "No fields to update" });
    }

    let query = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");

    let sql = `UPDATE client SET ${query} WHERE id = $${
      keys.length + 1
    } RETURNING *`;

    let { rows } = await pool.query(sql, [...values, id]);

    if (!rows.length) {
      return res.status(404).json({ error: "client not found" });
    }

    res.status(200).json({ message: "Updated Successfully", data: rows[0] });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let { rows } = await pool.query(
      "delete from client where id = $1 returning *",
      [id]
    );
    if (rows.length == 0) {
      return res.status(404).json({ error: "client Not Found" });
    }

    res.status(200).json({ message: "Deleted Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { findAll, findOne, create, update, remove };
