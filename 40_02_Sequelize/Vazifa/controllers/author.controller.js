import { error } from "console";
import Author from "../models/author.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

async function findAll(req, res) {
  try {
    let author = await Author.findAll();

    res.send(author);
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  try {
    let author = await Author.findOne();
    res.send(author);
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
    let author = await Author.findAll({ where: obj });

    res.send(author);
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    let check_author = await Author.findOne({
      where: { fullname: req.body.fullname },
    });

    if (check_author) {
      return res.send({ error: "There is such a username." });
    }

    let hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;

    await Author.create(req.body);
    res.send({ data: "Created" });
  } catch (error) {
    console.log(error.message);
  }
}

async function VerifyPassword(req, res) {
  try {
    let { password } = req.body;
    let data = await Author.findOne({ where: { fullname: req.body.fullname } });

    console.log(data.dataValues);
    
    if (!data) {
      return res.status(401).send({ error: "User not found" });
    }

    let matchPassword = bcrypt.compareSync(password, data.password);

    if (!matchPassword) {
      return res.send({matchPassword: "wrong password"})
    }
    

    let token = jwt.sign(
      {
        id: data.dataValues.id,
        fullname: data.dataValues.fullname,
      },
      "Secret"
    );
    
    res.send({token});
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {

    // await Author.update({where: {id: req.params.id}})

    res.send({data: "Created"})

  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    // await Author.destroy({where: {id: req.params.id}})
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
  VerifyPassword,
};
