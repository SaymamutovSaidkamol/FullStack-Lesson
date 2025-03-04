import { client } from "../main.js";
import {
  RegionBannerItemValidation,
} from "../validations/regionbannerItem.validation.js";

async function create(req, res) {
  try {
    let { error, value } = RegionBannerItemValidation.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let NewregionBannerItem = await client.regionBannerItem.create({ data: value });

    res.status(201).json({ data: NewregionBannerItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let check = await client.regionBannerItem.findFirst({ where: { id: +id } });

    if (!check) {
      return res.status(404).json({ error: "RegionbanregionBannerItem Not Found" });
    }

    let deleteRegionBannerItem = await client.regionBannerItem.delete({ where: { id: +id } });

    res.status(200).json({ data: deleteRegionBannerItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { create, remove };
