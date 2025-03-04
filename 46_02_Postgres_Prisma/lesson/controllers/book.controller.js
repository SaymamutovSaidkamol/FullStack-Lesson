import { client } from "../main.js";
import {
  BookValidation,
  BookPatchValidation,
} from "../validation/book.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.book.findMany({ include: { author: true } });

    if (!all.length) {
      return res.status(404).json({ error: "book Not Found" });
    }
    res.status(200).json({ data: all });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let one = await client.book.findFirst({
      where: { id: +id },
      include: { author: true },
    });

    if (!one) {
      return res.status(404).json({ error: "book Not Found" });
    }

    res.status(200).json({ data: one });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = BookValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { authorId } = value;

    let one = await client.author.findFirst({ where: { id: +authorId } });

    if (!one) {
      return res.status(404).json({ error: "AuthorId Not Found" });
    }

    let newbook = await client.book.create({ data: value });

    res.status(201).json({ data: newbook });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let checkbook = await client.book.findFirst({ where: { id: +id } });

    if (!checkbook) {
      return res.status(404).json({ error: "book Not Found" });
    }

    let { error, value } = BookPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { authorId } = value;

    if (authorId) {
      let one = await client.author.findFirst({ where: { id: +authorId } });

      if (!one) {
        return res.status(404).json({ error: "AuthorId Not Found" });
      }
    }

    let updatebook = await client.book.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updatebook });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let checkbook = await client.book.findFirst({ where: { id: +id } });

    if (!checkbook) {
      return res.status(404).json({ error: "book Not Found" });
    }

    let removebook = await client.book.delete({ where: { id: +id } });

    res.status(200).json({ message: "Deleted Saccessfully", data: removebook });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { findAll, findOne, create, update, remove };
