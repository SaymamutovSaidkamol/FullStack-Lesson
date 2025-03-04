import { client } from "../main.js";
import {
  BannerPatchValidation,
  BannerValidation,
} from "../validations/banner.validation.js";
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
    let all = await client.banners.findMany({
      include: { _count: { select: { Likes: true } }, Comment: true },
    });

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
    try {
      let { id } = req.params;

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "Invalid ID" });
      }

      let one = await client.banners.findFirst({ where: { id: Number(id) } });

      if (!one) {
        return res.status(404).json({ error: "Not Found" });
      }
      res.status(200).json({ data: one });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    req.body.authorId = req.user.id;
    let { error, value } = BannerValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name, categoryId } = value;

    let checkCateg = await client.category.findFirst({
      where: { id: +categoryId },
    });

    if (!checkCateg) {
      return res.status(404).json({ error: "Category Not Found" });
    }

    let Newbanners = await client.banners.create({ data: value });

    res.status(201).json({ data: Newbanners });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let check = await client.banners.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "banners Not Found" });
    }

    let { error, value } = BannerPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { img, categoryId } = value;

    if (categoryId) {
      let checkCategory = await client.category.findFirst({
        where: { id: +categoryId },
      });

      if (!checkCategory) {
        return res.status(404).json({ error: "Category Not Found" });
      }
    }

    if (img) {
      deleteOldImage(check.img);
    }

    let updatebanners = await client.banners.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updatebanners });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check = await client.banners.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "banners Not Found" });
    }

    deleteOldImage(check.img);

    let deletebanners = await client.banners.delete({ where: { id: +id } });

    res.status(200).json({ data: deletebanners });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Search(req, res) {
  try {
    let { page, take, name, categoryId } = req.query;

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

    if (categoryId) {
      let categoryIdInt = parseInt(categoryId, 10);
      if (!isNaN(categoryIdInt)) {
        where.categoryId = categoryIdInt;
      }
    }

    let totalItems = await client.banners.count({ where });

    let banners = await client.banners.findMany({
      where,
      skip,
      take,
      include: {
        _count: { select: { Likes: true } },
        Comment: true,
      },
      orderBy: { id: "desc" },
    });

    if (!banners.length) {
      return res.status(404).json({ error: "Banners Not Found" });
    }

    return res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / take),
      currentPage: page,
      data: banners,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { create, findAll, findOne, remove, update, Search };
