import { error } from "console";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import Book from "../models/Book.models.js";
import Author from "../models/author.models.js";

async function findAll(req, res) {
  try {
    let book = await Book.findAll({include: Author})

    res.send(book);
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  try {
    let book = await Book.findOne();
    res.send(book);
  } catch (error) {
    console.log(error.message);
  }
}

async function findBySearch(req, res) {
  try {
    let query = req.query;
    let keys = Object.keys(query);
    let values = Object.values(query);

    let newObj = {};

    values.forEach((val, index) => {
      if (val) {
        newObj[keys[index]] = val;
      }
    });
    console.log(newObj);
    let author = await Book.findAll({ where: obj });

    res.send(author);
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    await Book.create(req.body);
    res.send({ data: "Created" });
  } catch (error) {
    console.log(error.message);
  }
}


async function update(req, res) {
  try {

    await Book.update({where: {id: req.params.id}})

    res.send({data: "Created"})

  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    await Book.destroy({where: {id: req.params.id}})
    res.send({data: "deleted"})
  } catch (error) {
    console.log(error.message);
  }
}

export {
  findAll,
  findOne,
  findBySearch,
  create,
  update,
  remove,
};
