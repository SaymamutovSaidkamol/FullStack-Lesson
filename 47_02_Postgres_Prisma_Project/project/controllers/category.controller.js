import { client } from "../main.js";
import {
  CategoryPatchValidation,
  CategoryValidation,
} from "../validations/category.validation.js";
import path from "path";
import fs from "fs";

const deleteOldImage = (imgPath) => {
  if (imgPath) {
    const fullPath = path.join("uploads", imgPath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }
};

async function findAll(req, res) {
  try {
    let all = await client.category.findMany();

    if (all.length == 0) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json({ data: all });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let one = await client.category.findFirst({ where: { id: +id } });

    if (!one) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.status(200).json({ data: one });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = CategoryValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name } = value;

    let checkcategory = await client.category.findFirst({ where: { name } });

    if (checkcategory) {
      return res.status(409).json({ error: "This category exist" });
    }

    let Newcategory = await client.category.create({ data: value });

    res.status(201).json({ data: Newcategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let check = await client.category.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "category Not Found" });
    }

    let { error, value } = CategoryPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name, img } = value;

    let checkcategory = await client.category.findFirst({ where: { name } });

    if (checkcategory) {
      return res.status(409).json({ error: "This category exist" });
    }

    if (img) {
      deleteOldImage(check.img);
    }

    let updatecategory = await client.category.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updatecategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check = await client.category.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "category Not Found" });
    }

    let deletecategory = await client.category.delete({ where: { id: +id } });

    deleteOldImage(check.img);

    res.status(200).json({ data: deletecategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function Search(req, res) {
  try {
    let { page, take, name } = req.query;

    page = parseInt(page, 10) || 1;
    take = parseInt(take, 10) || 10;
    let skip = (page - 1) * take;

    let where = {};

    if (name) {
      where.name = {
        contains: name,
        mode: "insensitive",
      };
    }

    let totalItems = await client.category.count({ where });

    let category = await client.category.findMany({
      where,
      skip,
      take,
      include: {
        _count: { select: { Likes: true } },
        Comment: true,
      },
      orderBy: { id: "desc" },
    });

    if (!category.length) {
      return res.status(404).json({ error: "category Not Found" });
    }

    return res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / take),
      currentPage: page,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export { create, findAll, findOne, remove, update, Search };
