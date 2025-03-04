import joi from "joi";

const RegionBannerItemValidation = joi.object({
  regionId: joi.number().positive().required(),
  bannerId: joi.number().positive().required(),
});

export { RegionBannerItemValidation };
