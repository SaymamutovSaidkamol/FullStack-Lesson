import { client } from "../main.js";
import {
  CommentPatchValidation,
  CommentValidation,
} from "../validations/comment.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.comment.findMany();

    if (all.length == 0) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json({ data: all });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    req.body.authorId = req.user.id
    let { error, value } = CommentValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }



    let Newcomment = await client.comment.create({ data: value });

    res.status(201).json({ data: Newcomment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let check = await client.comment.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "comment Not Found" });
    }

    let { error, value } = CommentPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let updatecomment = await client.comment.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updatecomment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check = await client.comment.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "comment Not Found" });
    }

    let deletecomment = await client.comment.delete({ where: { id: +id } });

    res.status(200).json({ data: deletecomment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function Search(req, res) {
  try {
    let { page, take } = req.query;

    page = parseInt(page, 10) || 1;
    take = parseInt(take, 10) || 10;
    let skip = (page - 1) * take;

    let comment = await client.comment.findMany({
      skip,
      take,
      include: {
        banner: true,
      },
      orderBy: { id: "desc" },
    });

    if (!comment.length) {
      return res.status(404).json({ error: "comment Not Found" });
    }

    let totalItems = await client.comment.count();

    return res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / take),
      currentPage: page,
      data: comment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { create, findAll, remove, update,Search };
