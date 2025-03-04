import Actor from "../models/actor.model.js";
import Movies from "../models/movies.model.js";

async function findAll(req, res) {
  try {
    let movies = await Movies.findAll({ include: [Actor] });
    res.send({ data: movies });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  try {
    let movies = await Movies.findAll({ include: [Actor] });

    if (!movies) {
      return res.status(401).send({ error: "Movies not found" });
    }
    res.send({ data: movies });
  } catch (error) {
    console.log(error.message);
  }
}

async function findBySearch(req, res) {
  try {
    let query = req.query;
    let keys = Object.keys(query);
    let values = Object.values(query);
    let newQuery = {};
    values.forEach((val, index) => {
      if (val) {
        newQuery[keys[index]] = val;
      }
    });

    let movies = await Movies.findAll({
      where: newQuery,
      include: { model: Movies, as: "films" },
    });
    res.status(200).send({ data: movies });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    let body = req.body;
    await Movies.create(body);
    res.status(201).send({ data: "success" });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    await Movies.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.send({ data: "Updated" });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    await Movies.destroy({ where: { id: req.params.id } });
    res.send({ data: "Deleted" });
  } catch (error) {
    console.log(error.message);
  }
}

export { findAll, findOne, findBySearch, create, update, remove };
