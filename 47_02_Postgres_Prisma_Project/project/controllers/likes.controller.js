import { client } from "../main.js";
import { LikesValidation } from "../validations/likes.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.likes.findMany();

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
    req.body.authorId = req.user.id;
    let { error, value } = LikesValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { bannerId } = value;

    let checklikes = await client.likes.findFirst({ where: { bannerId } });

    if (checklikes) {
      return res.status(409).json({ error: "This likes exist" });
    }

    let Newlikes = await client.likes.create({ data: value });

    res.status(201).json({ data: Newlikes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check = await client.likes.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "Region Not Found" });
    }

    let deleteRegion = await client.likes.delete({ where: { id: +id } });

    res.status(200).json({ data: deleteRegion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { create, findAll, remove };
