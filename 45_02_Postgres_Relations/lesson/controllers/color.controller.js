import pool from "../config/db.js";
import {
  ColorValidation,
  ColorPatchValidation,
} from "../validations/color.validation.js";

async function findAll(req, res) {
  try {
    let { rows } = await pool.query("select * from color");

    if (rows.length === 0) {
      return res.status(404).json({ error: "color Not Found" });
    }

    res.status(200).json({ data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let { rows } = await pool.query("select * from color where id = $1", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "color Not Found" });
    }

    res.status(200).json({ data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = ColorValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name } = value;

    let check = await pool.query("select * from color where name = $1", [
      name,
    ]);

    if (check.rows.length != 0) {
      return res.status(409).json({ error: "This color is available" });
    }

    let { rows } = await pool.query(
      "insert into color(name) values ($1) RETURNING *",
      [name]
    );

    res.status(201).json({ message: "Create Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;
    let { error, value } = ColorPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let data = value;
    let { name } = value;

    if (name) {
      let check = await pool.query("select * from color where name = $1", [
        name,
      ]);

      if (check.rows.length != 0) {
        return res.status(409).json({ error: "This color is available" });
      }
    }

    let keys = Object.keys(data);
    let values = Object.values(data);

    if (!keys.length) {
      return res.status(400).json({ error: "No fields to update" });
    }

    let query = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");

    let sql = `UPDATE color SET ${query} WHERE id = $${
      keys.length + 1
    } RETURNING *`;

    let { rows } = await pool.query(sql, [...values, id]);

    if (!rows.length) {
      return res.status(404).json({ error: "color not found" });
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
      "delete from color where id = $1 returning *",
      [id]
    );
    if (rows.length == 0) {
      return res.status(404).json({ error: "color Not Found" });
    }

    res.status(200).json({ message: "Deleted Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { findAll, findOne, create, update, remove };
