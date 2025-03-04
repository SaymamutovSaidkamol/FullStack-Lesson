import Actor from "../models/actor.model.js";
import Movies from "../models/movies.model.js";

async function findAll(req, res) {
  try {
    let actors = await Actor.findAll({
      include: { model: Movies },
    });
    res.status(200).send({ data: actors });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;
    let actor = await Actor.findByPk(id, {
      include: { model: Movies, as: "films" },
    });
    res.status(200).send({ data: actor });
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

    let actors = await Actor.findAll({
      where: newQuery,
      include: { model: Movies, as: "films" },
    });

    if (!actors) {
      return res.status(401).send({ error: "Movies not found" });
    }
    res.status(200).send({ data: actors });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    let body = req.body;
    await Actor.create(body);
    res.status(201).send({ data: "Created new actor successfully" });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;
    let updateData = req.body;

    let updateActor = await Actor.update(updateData, {
      where: id,
      returning: true,
    });
    res.status(200).send({ data: updateActor });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;
    await Actor.destroy({ where: id });
    res.send(200).send({ data: "Actor deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
}

export { findAll, findOne, findBySearch, create, update, remove };
