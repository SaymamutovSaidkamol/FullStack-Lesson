import { client } from "../main.js";
import {
  AuhorValidation,
  AuhorPatchValidation,
} from "../validation/author.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.author.findMany({ include: { Book: true } });

    if (!all.length) {
      return res.status(404).json({ error: "Author Not Found" });
    }
    res.status(200).json({ data: all });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let one = await client.author.findFirst({ where: { id: +id }, include: { Book: true } });

    if (!one) {
      return res.status(404).json({ error: "Author Not Found" });
    }

    res.status(200).json({ data: one });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = AuhorValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let newAuthor = await client.author.create({ data: value });

    res.status(201).json({ data: newAuthor });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let checkAuthor = await client.author.findFirst({ where: { id: +id } });

    if (!checkAuthor) {
      return res.status(404).json({ error: "Author Not Found" });
    }

    let { error, value } = AuhorPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let updateAuthor = await client.author.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updateAuthor });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let checkAuthor = await client.author.findFirst({ where: { id: +id } });

    if (!checkAuthor) {
      return res.status(404).json({ error: "Author Not Found" });
    }

    let removeAuthor = await client.author.delete({ where: { id: +id } });

    res
      .status(200)
      .json({ message: "Deleted Saccessfully", data: removeAuthor });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { findAll, findOne, create, update, remove };
