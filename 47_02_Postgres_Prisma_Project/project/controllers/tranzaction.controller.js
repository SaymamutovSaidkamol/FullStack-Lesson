import { client } from "../main.js";
import { TranzactionValidation } from "../validations/tranzaction.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.tranzaction.findMany();

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
    let { error, value } = TranzactionValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let Newtranzaction = await client.tranzaction.create({ data: value });

    res.status(201).json({ data: Newtranzaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { create, findAll };
