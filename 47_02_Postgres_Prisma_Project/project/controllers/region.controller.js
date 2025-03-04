import { client } from "../main.js";
import {
  RegionPatchValidation,
  RegionValidation,
  validateName,
} from "../validations/region.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.region.findMany();

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

    let one = await client.region.findFirst({ where: { id: +id } });

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
    let { error, value } = RegionValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name } = value;

    const checkName = validateName(name);

    if (!checkName) {
      return res.status(400).json({ error: "Please enter only letters." });
    }

    let checkRegion = await client.region.findFirst({ where: { name } });

    if (checkRegion) {
      return res.status(409).json({ error: "This Region exist" });
    }

    let Newregion = await client.region.create({ data: value });

    res.status(201).json({ data: Newregion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let check = await client.region.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "Region Not Found" });
    }

    let { error, value } = RegionPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { name } = value;

    const checkName = validateName(name);

    if (!checkName) {
      return res.status(400).json({ error: "Please enter only letters." });
    }

    let checkRegion = await client.region.findFirst({ where: { name } });

    if (checkRegion) {
      return res.status(409).json({ error: "This Region exist" });
    }

    let updateRegion = await client.region.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updateRegion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check = await client.region.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "Region Not Found" });
    }

    let deleteRegion = await client.region.delete({ where: { id: +id } });

    res.status(200).json({ data: deleteRegion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { create, findAll, findOne, remove, update };
