import { error } from "console";
import pool from "../config/db.js";
import {
  OrderValidation,
  OrderPatchValidation,
} from "../validations/order.validation.js";

async function findAll(req, res) {
  try {
    let key = Object.keys(req.query);
    let value = Object.values(req.query);

    if (key.length == 0) {
      let { rows } = await pool.query(`
        SELECT 
    "orders".id, 
    "orders".toPay, 
    "orders"."type",
    json_build_object(
        'id', client.id,
        'name', client.name,
        'phone', client.phone,
        'region', json_build_object(
            'id', region.id,
            'name', region.name
        )
    ) AS client,
    json_build_object(
        'id', plastmassa.id,
        'code', plastmassa.code,
        'name', plastmassa.name,
        'mator', plastmassa.mator,
        'shakli', plastmassa.shakli,
        'kelganVaqti', plastmassa.kelganVaqti,
        'astatka', plastmassa.astatka
    ) AS plastmassa
FROM "orders"
JOIN client ON client.id = "orders".clientId
JOIN region ON region.id = client.regionId
JOIN plastmassa ON plastmassa.id = "orders".plastmassaId;
`);

      if (rows.length === 0) {
        return res.status(404).json({ error: "orders Not Found" });
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
    "orders".id, 
    "orders".toPay, 
    "orders"."type",
    json_build_object(
        'id', client.id,
        'name', client.name,
        'phone', client.phone,
        'region', json_build_object(
            'id', region.id,
            'name', region.name
        )
    ) AS client,
    json_build_object(
        'id', plastmassa.id,
        'code', plastmassa.code,
        'name', plastmassa.name,
        'mator', plastmassa.mator,
        'shakli', plastmassa.shakli,
        'kelganVaqti', plastmassa.kelganVaqti,
        'astatka', plastmassa.astatka
    ) AS plastmassa
FROM "orders"
JOIN client ON client.id = "orders".clientId
JOIN region ON region.id = client.regionId
JOIN plastmassa ON plastmassa.id = "orders".plastmassaId ORDER BY ${sortBy} ${
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
    "orders".id, 
    "orders".toPay, 
    "orders"."type",
    json_build_object(
        'id', client.id,
        'name', client.name,
        'phone', client.phone,
        'region', json_build_object(
            'id', region.id,
            'name', region.name
        )
    ) AS client,
    json_build_object(
        'id', plastmassa.id,
        'code', plastmassa.code,
        'name', plastmassa.name,
        'mator', plastmassa.mator,
        'shakli', plastmassa.shakli,
        'kelganVaqti', plastmassa.kelganVaqti,
        'astatka', plastmassa.astatka
    ) AS plastmassa
FROM "orders"
JOIN client ON client.id = "orders".clientId
JOIN region ON region.id = client.regionId
JOIN plastmassa ON plastmassa.id = "orders".plastmassaId ORDER BY id LIMIT $1 OFFSET $2`, [limit, offset])

      return res.status(200).json({data: paganation.rows})
    }

    try {
      let queryKey = key.map((e, i) => (e += ` = $${i + 1}`));
      
      let query = await pool.query(
        `SELECT 
    "orders".id, 
    "orders".toPay, 
    "orders"."type",
    json_build_object(
        'id', client.id,
        'name', client.name,
        'phone', client.phone,
        'region', json_build_object(
            'id', region.id,
            'name', region.name
        )
    ) AS client,
    json_build_object(
        'id', plastmassa.id,
        'code', plastmassa.code,
        'name', plastmassa.name,
        'mator', plastmassa.mator,
        'shakli', plastmassa.shakli,
        'kelganVaqti', plastmassa.kelganVaqti,
        'astatka', plastmassa.astatka
    ) AS plastmassa
FROM "orders"
JOIN client ON client.id = "orders".clientId
JOIN region ON region.id = client.regionId
JOIN plastmassa ON plastmassa.id = "orders".plastmassaId where ${queryKey.join("and")}`,
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
    "orders".id, 
    "orders".toPay, 
    "orders"."type",
    json_build_object(
        'id', client.id,
        'name', client.name,
        'phone', client.phone,
        'region', json_build_object(
            'id', region.id,
            'name', region.name
        )
    ) AS client,
    json_build_object(
        'id', plastmassa.id,
        'code', plastmassa.code,
        'name', plastmassa.name,
        'mator', plastmassa.mator,
        'shakli', plastmassa.shakli,
        'kelganVaqti', plastmassa.kelganVaqti,
        'astatka', plastmassa.astatka
    ) AS plastmassa
FROM "orders"
JOIN client ON client.id = "orders".clientId
JOIN region ON region.id = client.regionId
JOIN plastmassa ON plastmassa.id = "orders".plastmassaId where orders.id = $1`,
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
    let { error, value } = OrderValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { plastmassaId, type, toPay, clientId } = value;

    let { rows } = await pool.query(
      "insert into orders(plastmassaId, type, toPay, clientId) values ($1, $2, $3, $4) RETURNING *",
      [plastmassaId, type, toPay, clientId]
    );

    res.status(201).json({ message: "Create Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;
    let { error, value } = OrderPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let data = value;

    let keys = Object.keys(data);
    let values = Object.values(data);

    if (!keys.length) {
      return res.status(400).json({ error: "No fields to update" });
    }

    let query = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");

    let sql = `UPDATE orders SET ${query} WHERE id = $${
      keys.length + 1
    } RETURNING *`;

    let { rows } = await pool.query(sql, [...values, id]);

    if (!rows.length) {
      return res.status(404).json({ error: "orders not found" });
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
      "delete from orders where id = $1 returning *",
      [id]
    );
    if (rows.length == 0) {
      return res.status(404).json({ error: "orders Not Found" });
    }

    res.status(200).json({ message: "Deleted Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { findAll, findOne, create, update, remove };
