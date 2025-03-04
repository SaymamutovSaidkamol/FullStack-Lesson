import pool from "../config/db.js";
import {
  CantractValidation,
  CantractPatchValidation,
} from "../validation/cantract.validation.js";

async function findAll(req, res) {
  try {
    let { rows } = await pool.query(
      `SELECT 
    cantrakt.id,
    player.name AS player_name, 
    club.ClubName, 
    cantrakt.contractSumma, 
    cantrakt.cantractTerm
FROM player
INNER JOIN cantrakt ON player.id = cantrakt.playersId
INNER JOIN club ON cantrakt.clubId = club.id; 
`
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "cantrakt Not Found" });
    }

    res.status(200).json({ data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let { rows } = await pool.query(
      `SELECT 
    cantrakt.id,
    player.name AS player_name, 
    club.ClubName, 
    cantrakt.contractSumma, 
    cantrakt.cantractTerm
FROM player
INNER JOIN cantrakt ON player.id = cantrakt.playersId
INNER JOIN club ON cantrakt.clubId = club.id
      where club.id = $1`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "cantrakt Not Found" });
    }

    res.status(200).json({ data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = CantractValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { contractsumma, cantractterm, playersid, clubid } = value;

    let { rows } = await pool.query(
      "insert into cantrakt(contractsumma, cantractterm, playersid, clubid) values ($1, $2, $3, $4) RETURNING *",
      [contractsumma, cantractterm, playersid, clubid]
    );

    res.status(201).json({ message: "Create Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;
    let { error, value } = CantractPatchValidation.validate(req.body);

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

    let sql = `UPDATE cantrakt SET ${query} WHERE id = $${
      keys.length + 1
    } RETURNING *`;

    let { rows } = await pool.query(sql, [...values, id]);

    if (!rows.length) {
      return res.status(404).json({ error: "cantrakt not found" });
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
      "delete from cantrakt where id = $1 returning *",
      [id]
    );
    console.log(rows);
    
    if (rows.length == 0) {
      return res.status(404).json({ error: "cantrakt Not Found" });
    }

    res.status(200).json({ message: "Deleted Successfully", data: rows });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { findAll, findOne, create, update, remove };
